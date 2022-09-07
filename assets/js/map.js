const CLUSTER_DISTANCE = 30;
const CLUSTER_RESOLUTION = 80;

const GEOGRAPHIC_PROJ  = "EPSG:4326"; 
const MERCATOR_PROJ = "EPSG:3857";
const BASE_ZOOM = 13;

window.addEventListener('DOMContentLoaded', function() {
    const map = new ol.Map({
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

    
    const monumentsSource = new ol.source.Vector({});
    
    renderOnlyFoundMonuments(monumentsSource);

    const unclusteredMonumentsLayer = new ol.layer.Vector({
        maxResolution: CLUSTER_RESOLUTION,
        source: monumentsSource,
        style: new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.2,1],
                scale: 0.8,
                src: '/assets/sprites/pin_primary_shadow.png',
            }),
            // image: new ol.style.Circle({
            //     fill: new ol.style.Fill({
            //         color: '#852b0c'
            //     }),
            //     radius: 5,
            // }),
        }),
        zIndex: 1000
    });
    map.addLayer(unclusteredMonumentsLayer)
})

function renderAllMonuments(monumentsSource) {
    MONUMENTS.forEach(monumentData=>renderMonument(monumentsSource, monumentData));
}

function renderOnlyFoundMonuments(monumentsSource) {
    monumentsFoundList = getFoundMonumentList();
    
    MONUMENTS.forEach(monumentData=>{
        if(!monumentsFoundList.includes(monumentData.id)) return;
        renderMonument(monumentsSource, monumentData)
    });
}

function renderMonument(monumentsSource, monumentData) {
    let monumentFeature = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([
        monumentData.position.lon,
        monumentData.position.lat
    ])))

    monumentFeature.attributes = {monumentData};

    monumentsSource.addFeature(monumentFeature);
}