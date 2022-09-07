const CLUSTER_DISTANCE = 30;
const CLUSTER_RESOLUTION = 80;

const GEOGRAPHIC_PROJ  = "EPSG:4326"; 
const MERCATOR_PROJ = "EPSG:3857";
const BASE_ZOOM = 13;

window.addEventListener('DOMContentLoaded', function() {
    const map = new ol.Map({
        // controls: new ol.control.defaults().extend([new AnimateAgainControl()]),
        target: 'map',
        layers: [
            new ol.layer.Tile({source: new ol.source.Stamen({layer: 'watercolor'})}),
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

    const positionsSource = new ol.source.Vector({});
    const pointsSource = new ol.source.Vector({});

    const unclusteredPositionsLayer = new ol.layer.Vector({
        maxResolution: CLUSTER_RESOLUTION,
        source: positionsSource,
        // style: MAP_STYLE.unclustered_place,
        zIndex: 1000
    });
    map.addLayer(unclusteredPositionsLayer)


    const pointsLayer = new ol.layer.Vector({
        source: pointsSource
    });
    map.addLayer(pointsLayer)
})