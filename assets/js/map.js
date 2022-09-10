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

window.addEventListener('DOMContentLoaded', function() {

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
        view: new ol.View({
            center: ol.proj.fromLonLat([
                -0.579541,
                44.837912
            ]),
            zoom: BASE_ZOOM
        })
    });

    
    
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
        if (!feature) return;

        openPopupInfoMonument(feature.attributes.monumentData);
    });

    map.on('movestart', hideUI);
    map.on('moveend', showUI);

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