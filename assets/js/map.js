const CLUSTER_DISTANCE = 30;
const CLUSTER_RESOLUTION = 80;

const GEOGRAPHIC_PROJ  = "EPSG:4326"; 
const MERCATOR_PROJ = "EPSG:3857";
const BASE_ZOOM = 13;

const monumentsSource = new ol.source.Vector({});


const pinStyles = {
    normal: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.2,1],
            scale: 0.4,
            src: '/assets/sprites/pin_primary_shadow.png',
        }),
        // image: new ol.style.Circle({
        //     fill: new ol.style.Fill({
        //         color: '#852b0c'
        //     }),
        //     radius: 5,
        // }),
    }),
    last: new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.2,1],
            scale: 0.4,
            src: '/assets/sprites/pin_yellow_shadow.png',
        }),
    }),
}
const positionStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({
            color: '#3399CC',
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 2,
        }),
    }),
})

window.addEventListener('DOMContentLoaded', function() {

    const view = new ol.View({
        center: ol.proj.fromLonLat([
            -0.579541,
            44.837912
        ]),
        zoom: BASE_ZOOM
    });

    const map = new ol.Map({
        interactions: ol.interaction.defaults({altShiftDragRotate:false, pinchRotate:false}), 
        controls: [], 
        // controls: new ol.control.defaults().extend([new AnimateAgainControl()]),
        target: 'map',
        layers: [
            // new ol.layer.Tile({source: new ol.source.OSM()}),
            // new ol.layer.Tile({source: new ol.source.Stamen({layer: 'watercolor'})}),
            // new ol.layer.Tile({source: new ol.source.Stamen({layer: 'terrain-labels'})}),

            new ol.layer.Tile({source: new ol.source.Stamen({layer: 'terrain'})}),
            new ol.layer.Tile({source: new ol.source.Stamen({layer: 'terrain-labels'})}),
        ],
        view
    });

    addGeolocation(map);  
    
    renderOnlyFoundMonuments(monumentsSource);

    const unclusteredMonumentsLayer = new ol.layer.Vector({
        maxResolution: CLUSTER_RESOLUTION,
        source: monumentsSource,
        zIndex: 1000
    });

    map.on('click', function (evt) {
        const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
            return feature;
        });
        if (feature) {
            openPopupInfoMonument(feature.attributes.monumentData);
        } else {
            toggleUI();
        }
    });

    // map.on('movestart', willHideUI);
    // map.on('moveend', willShowUI);

    map.addLayer(unclusteredMonumentsLayer)
})

function renderAllMonuments() {
    monumentsSource.clear();
    MONUMENTS.forEach(monumentData=>renderMonument(monumentData));
}

function renderOnlyFoundMonuments() {
    monumentsSource.clear();
    monumentsFoundList = getFoundMonumentList();
    
    MONUMENTS.forEach(monumentData=>{
        if(!monumentsFoundList.includes(monumentData.id)) return;
        renderMonument(monumentData)
    });
}

function renderMonument(monumentData) {
    let monumentFeature = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([
        monumentData.position.lon,
        monumentData.position.lat
    ])))

    const monumentsFoundList = getFoundMonumentList();

    monumentFeature.setStyle(
        monumentData.id == monumentsFoundList[monumentsFoundList.length-1] 
        ?
        pinStyles.last
        :
        pinStyles.normal
    );

    monumentFeature.attributes = {monumentData};

    monumentsSource.addFeature(monumentFeature);
}

function addGeolocation(map) {
    const geolocation = new ol.Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
          enableHighAccuracy: true,
        },
        projection: map.getView().getProjection(),
    });

    geolocation.setTracking(true);

    const accuracyFeature = new ol.Feature();
    geolocation.on('change:accuracyGeometry', function () {
        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });
    const positionFeature = new ol.Feature();
    positionFeature.setStyle(positionStyle);

    geolocation.on('change:position', ()=>handlePositionChanged(map, geolocation, positionFeature));

    new ol.layer.Vector({
        map,
        source: new ol.source.Vector({
            features: [
                // accuracyFeature, 
                positionFeature,
            ],
        }),
    });
}

function formatLength(line) {
    const length = ol.sphere.getLength(line);
    let output;
    if (length > 100) {
      output = Math.round((length / 1000) * 100) / 100 + ' ' + 'km';
    } else {
      output = Math.round(length * 100) / 100 + ' ' + 'm';
    }
    return output;
};

function lineLengthToMeters(line) {
    const length = ol.sphere.getLength(line);
    return Math.round(length * 100) / 100;
};
function lineLengthToKilometers(line) {
    const length = ol.sphere.getLength(line);
    return Math.round((length / 1000) * 100) / 100;
};

function handlePositionChanged(map, geolocation, positionFeature) {
    console.log('position changed');
    const geolocationCoordinates = geolocation.getPosition();
    positionFeature.setGeometry(geolocationCoordinates ? new ol.geom.Point(geolocationCoordinates) : null);

    const monumentCoordinatesObj = getEnigmaOngoingMonumentData().position;
    const monumentCoordinatesGeo = [
        monumentCoordinatesObj.lon,
        monumentCoordinatesObj.lat,
    ];
    const monumentCoordinatesMerca = ol.proj.transform(monumentCoordinatesGeo, GEOGRAPHIC_PROJ, MERCATOR_PROJ)



    console.log([
        geolocationCoordinates,
        monumentCoordinatesMerca
    ]);

    const geometryLine = new ol.geom.LineString([
        geolocationCoordinates,
        monumentCoordinatesMerca
    ])
    var featureLine = new ol.Feature({
        geometry: geometryLine
    });
    console.log(lineLengthToKilometers(geometryLine));
    new ol.layer.Vector({
        map,
        source: new ol.source.Vector({
            features: [
                featureLine,
            ],
        }),
    });
}