var size = 0;
var placement = 'point';

var style_Pedalabilitatterritorialprojectada_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("calcul_t_1");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,251,241,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.500000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(204,231,222,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.000000 && value <= 1.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(140,207,185,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.500000 && value <= 2.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(79,181,136,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.000000 && value <= 2.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(35,151,85,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.500000 && value <= 3.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,109,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
