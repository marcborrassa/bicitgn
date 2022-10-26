var wms_layers = [];


        var lyr_OSMCyclemapTF_0 = new ol.layer.Tile({
            'title': 'OSM Cycle map (TF)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Maps © Thunderforest, Data © OpenStreetMap contributors</a>',
                url: 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=cd7e834a48194ef7943f8458be22d823'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.746000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_focus_studyarea_2 = new ol.format.GeoJSON();
var features_focus_studyarea_2 = format_focus_studyarea_2.readFeatures(json_focus_studyarea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_focus_studyarea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_focus_studyarea_2.addFeatures(features_focus_studyarea_2);
var lyr_focus_studyarea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_focus_studyarea_2, 
                style: style_focus_studyarea_2,
                interactive: false,
                title: '<img src="styles/legend/focus_studyarea_2.png" /> focus_studyarea'
            });
var format_Municipisdelreadestudi_3 = new ol.format.GeoJSON();
var features_Municipisdelreadestudi_3 = format_Municipisdelreadestudi_3.readFeatures(json_Municipisdelreadestudi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipisdelreadestudi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipisdelreadestudi_3.addFeatures(features_Municipisdelreadestudi_3);
var lyr_Municipisdelreadestudi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipisdelreadestudi_3, 
                style: style_Municipisdelreadestudi_3,
                interactive: false,
                title: '<img src="styles/legend/Municipisdelreadestudi_3.png" /> Municipis de l\'àrea d\'estudi'
            });
var format_Pedalabilitatterritorialactual_4 = new ol.format.GeoJSON();
var features_Pedalabilitatterritorialactual_4 = format_Pedalabilitatterritorialactual_4.readFeatures(json_Pedalabilitatterritorialactual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedalabilitatterritorialactual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedalabilitatterritorialactual_4.addFeatures(features_Pedalabilitatterritorialactual_4);
var lyr_Pedalabilitatterritorialactual_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedalabilitatterritorialactual_4, 
                style: style_Pedalabilitatterritorialactual_4,
                interactive: false,
    title: 'Pedalabilitat territorial actual<br />\
    <img src="styles/legend/Pedalabilitatterritorialactual_4_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/Pedalabilitatterritorialactual_4_1.png" /> 0,5 - 1<br />\
    <img src="styles/legend/Pedalabilitatterritorialactual_4_2.png" /> 1 - 1,5<br />\
    <img src="styles/legend/Pedalabilitatterritorialactual_4_3.png" /> 1,5 - 2<br />\
    <img src="styles/legend/Pedalabilitatterritorialactual_4_4.png" /> 2 - 2,5<br />\
    <img src="styles/legend/Pedalabilitatterritorialactual_4_5.png" /> 2,5 - 3<br />'
        });
var format_Pedalabilitatterritorialprojectada_5 = new ol.format.GeoJSON();
var features_Pedalabilitatterritorialprojectada_5 = format_Pedalabilitatterritorialprojectada_5.readFeatures(json_Pedalabilitatterritorialprojectada_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedalabilitatterritorialprojectada_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedalabilitatterritorialprojectada_5.addFeatures(features_Pedalabilitatterritorialprojectada_5);
var lyr_Pedalabilitatterritorialprojectada_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedalabilitatterritorialprojectada_5, 
                style: style_Pedalabilitatterritorialprojectada_5,
                interactive: false,
    title: 'Pedalabilitat territorial projectada<br />\
    <img src="styles/legend/Pedalabilitatterritorialprojectada_5_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/Pedalabilitatterritorialprojectada_5_1.png" /> 0,5 - 1<br />\
    <img src="styles/legend/Pedalabilitatterritorialprojectada_5_2.png" /> 1 - 1,5<br />\
    <img src="styles/legend/Pedalabilitatterritorialprojectada_5_3.png" /> 1,5 - 2<br />\
    <img src="styles/legend/Pedalabilitatterritorialprojectada_5_4.png" /> 2 - 2,5<br />\
    <img src="styles/legend/Pedalabilitatterritorialprojectada_5_5.png" /> 2,5 - 3<br />'
        });
var format_Pedalabilitatperviesactual_6 = new ol.format.GeoJSON();
var features_Pedalabilitatperviesactual_6 = format_Pedalabilitatperviesactual_6.readFeatures(json_Pedalabilitatperviesactual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedalabilitatperviesactual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedalabilitatperviesactual_6.addFeatures(features_Pedalabilitatperviesactual_6);
var lyr_Pedalabilitatperviesactual_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedalabilitatperviesactual_6, 
                style: style_Pedalabilitatperviesactual_6,
                interactive: false,
                title: 'Pedalabilitat per vies actual'
            });
var format_Pedalabilitatperviesprojectada_7 = new ol.format.GeoJSON();
var features_Pedalabilitatperviesprojectada_7 = format_Pedalabilitatperviesprojectada_7.readFeatures(json_Pedalabilitatperviesprojectada_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedalabilitatperviesprojectada_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedalabilitatperviesprojectada_7.addFeatures(features_Pedalabilitatperviesprojectada_7);
var lyr_Pedalabilitatperviesprojectada_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedalabilitatperviesprojectada_7, 
                style: style_Pedalabilitatperviesprojectada_7,
                interactive: false,
                title: 'Pedalabilitat per vies projectada'
            });
var format_Carrilsbiciactualsiprojectats_8 = new ol.format.GeoJSON();
var features_Carrilsbiciactualsiprojectats_8 = format_Carrilsbiciactualsiprojectats_8.readFeatures(json_Carrilsbiciactualsiprojectats_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carrilsbiciactualsiprojectats_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carrilsbiciactualsiprojectats_8.addFeatures(features_Carrilsbiciactualsiprojectats_8);
var lyr_Carrilsbiciactualsiprojectats_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carrilsbiciactualsiprojectats_8, 
                style: style_Carrilsbiciactualsiprojectats_8,
                interactive: false,
                title: 'Carrils bici actuals i projectats'
            });
var format_Fonts_9 = new ol.format.GeoJSON();
var features_Fonts_9 = format_Fonts_9.readFeatures(json_Fonts_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fonts_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fonts_9.addFeatures(features_Fonts_9);
var lyr_Fonts_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fonts_9, 
                style: style_Fonts_9,
                interactive: false,
                title: '<img src="styles/legend/Fonts_9.png" /> Fonts'
            });
var format_Aparcamentperabicicletes_10 = new ol.format.GeoJSON();
var features_Aparcamentperabicicletes_10 = format_Aparcamentperabicicletes_10.readFeatures(json_Aparcamentperabicicletes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aparcamentperabicicletes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aparcamentperabicicletes_10.addFeatures(features_Aparcamentperabicicletes_10);
var lyr_Aparcamentperabicicletes_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aparcamentperabicicletes_10, 
                style: style_Aparcamentperabicicletes_10,
                interactive: false,
                title: '<img src="styles/legend/Aparcamentperabicicletes_10.png" /> Aparcament per a bicicletes'
            });
var format_Comerosespecialitzats_11 = new ol.format.GeoJSON();
var features_Comerosespecialitzats_11 = format_Comerosespecialitzats_11.readFeatures(json_Comerosespecialitzats_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comerosespecialitzats_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comerosespecialitzats_11.addFeatures(features_Comerosespecialitzats_11);
var lyr_Comerosespecialitzats_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comerosespecialitzats_11, 
                style: style_Comerosespecialitzats_11,
                interactive: false,
                title: '<img src="styles/legend/Comerosespecialitzats_11.png" /> Comerços especialitzats'
            });

lyr_OSMCyclemapTF_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_focus_studyarea_2.setVisible(true);lyr_Municipisdelreadestudi_3.setVisible(true);lyr_Pedalabilitatterritorialactual_4.setVisible(true);lyr_Pedalabilitatterritorialprojectada_5.setVisible(true);lyr_Pedalabilitatperviesactual_6.setVisible(true);lyr_Pedalabilitatperviesprojectada_7.setVisible(true);lyr_Carrilsbiciactualsiprojectats_8.setVisible(true);lyr_Fonts_9.setVisible(true);lyr_Aparcamentperabicicletes_10.setVisible(true);lyr_Comerosespecialitzats_11.setVisible(true);
var layersList = [lyr_OSMCyclemapTF_0,lyr_OSMStandard_1,lyr_focus_studyarea_2,lyr_Municipisdelreadestudi_3,lyr_Pedalabilitatterritorialactual_4,lyr_Pedalabilitatterritorialprojectada_5,lyr_Pedalabilitatperviesactual_6,lyr_Pedalabilitatperviesprojectada_7,lyr_Carrilsbiciactualsiprojectats_8,lyr_Fonts_9,lyr_Aparcamentperabicicletes_10,lyr_Comerosespecialitzats_11];
lyr_focus_studyarea_2.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'municipios': 'municipios', 'mostra': 'mostra', 'studiare': 'studiare', });
lyr_Municipisdelreadestudi_3.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', 'municipios': 'municipios', 'mostra': 'mostra', 'studiare': 'studiare', });
lyr_Pedalabilitatterritorialactual_4.set('fieldAliases', {'ID_QUADTRE': 'ID_QUADTRE', 'LEVEL_FINA': 'LEVEL_FINA', 'TOTAL': 'TOTAL', 'HOMES': 'HOMES', 'DONES': 'DONES', 'P_0_14': 'P_0_14', 'P_15_64': 'P_15_64', 'P_65_I_MES': 'P_65_I_MES', 'P_ESPANYOL': 'P_ESPANYOL', 'P_ESTRANGE': 'P_ESTRANGE', 'P_NASC_CAT': 'P_NASC_CAT', 'P_NASC_RES': 'P_NASC_RES', 'P_NASC_EST': 'P_NASC_EST', 'P_POS_IMPU': 'P_POS_IMPU', 'calcul_ter': 'calcul_ter', 'calcul_t_1': 'calcul_t_1', });
lyr_Pedalabilitatterritorialprojectada_5.set('fieldAliases', {'ID_QUADTRE': 'ID_QUADTRE', 'LEVEL_FINA': 'LEVEL_FINA', 'TOTAL': 'TOTAL', 'HOMES': 'HOMES', 'DONES': 'DONES', 'P_0_14': 'P_0_14', 'P_15_64': 'P_15_64', 'P_65_I_MES': 'P_65_I_MES', 'P_ESPANYOL': 'P_ESPANYOL', 'P_ESTRANGE': 'P_ESTRANGE', 'P_NASC_CAT': 'P_NASC_CAT', 'P_NASC_RES': 'P_NASC_RES', 'P_NASC_EST': 'P_NASC_EST', 'P_POS_IMPU': 'P_POS_IMPU', 'calcul_ter': 'calcul_ter', 'calcul_t_1': 'calcul_t_1', });
lyr_Pedalabilitatperviesactual_6.set('fieldAliases', {'id_tramo': 'id_tramo', 'id_vial': 'id_vial', 'tipo_vial': 'tipo_vial', 'tipo_vialD': 'tipo_vialD', 'claseD': 'claseD', 'nombre': 'nombre', 'fuente_v': 'fuente_v', 'fuente_vD': 'fuente_vD', 'tipo_tramo': 'tipo_tramo', 'tipo_tramD': 'tipo_tramD', 'calzada': 'calzada', 'calzadaD': 'calzadaD', 'acceso': 'acceso', 'accesoD': 'accesoD', 'firme': 'firme', 'firmeD': 'firmeD', 'ncarriles': 'ncarriles', 'ncarrilesD': 'ncarrilesD', 'sentido': 'sentido', 'sentidoD': 'sentidoD', 'situacion': 'situacion', 'situacionD': 'situacionD', 'estadofis': 'estadofis', 'estadofisD': 'estadofisD', 'tipovehic': 'tipovehic', 'tipovehicD': 'tipovehicD', 'titular': 'titular', 'titularD': 'titularD', 'orden': 'orden', 'ordenD': 'ordenD', 'fuente_t': 'fuente_t', 'fuente_tD': 'fuente_tD', 'fecha_alta': 'fecha_alta', 'bikeabi_1': 'bikeabi_1', 'run': 'run', 'Coinci_1': 'Coinci_1', 'f_id': 'f_id', });
lyr_Pedalabilitatperviesprojectada_7.set('fieldAliases', {'id_tramo': 'id_tramo', 'id_vial': 'id_vial', 'tipo_vial': 'tipo_vial', 'tipo_vialD': 'tipo_vialD', 'claseD': 'claseD', 'nombre': 'nombre', 'fuente_v': 'fuente_v', 'fuente_vD': 'fuente_vD', 'tipo_tramo': 'tipo_tramo', 'tipo_tramD': 'tipo_tramD', 'calzada': 'calzada', 'calzadaD': 'calzadaD', 'acceso': 'acceso', 'accesoD': 'accesoD', 'firme': 'firme', 'firmeD': 'firmeD', 'ncarriles': 'ncarriles', 'ncarrilesD': 'ncarrilesD', 'sentido': 'sentido', 'sentidoD': 'sentidoD', 'situacion': 'situacion', 'situacionD': 'situacionD', 'estadofis': 'estadofis', 'estadofisD': 'estadofisD', 'tipovehic': 'tipovehic', 'tipovehicD': 'tipovehicD', 'titular': 'titular', 'titularD': 'titularD', 'orden': 'orden', 'ordenD': 'ordenD', 'fuente_t': 'fuente_t', 'fuente_tD': 'fuente_tD', 'fecha_alta': 'fecha_alta', 'bikeabi_1': 'bikeabi_1', 'run': 'run', 'Coinci_1': 'Coinci_1', 'f_id': 'f_id', });
lyr_Carrilsbiciactualsiprojectats_8.set('fieldAliases', {'asphalt': 'asphalt', 'Conviv (V)': 'Conviv (V)', 'showbici': 'showbici', 'long': 'long', 'Projectat': 'Projectat', });
lyr_Fonts_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gid': 'gid', 'estat': 'estat', 'observacio': 'observacio', 'material': 'material', 'foto': 'foto', 'data_alta': 'data_alta', 'FID': 'FID', 'category': 'category', 'code': 'code', 'coloricona': 'coloricona', 'icona': 'icona', 'imatge': 'imatge', 'info': 'info', 'layer': 'layer', 'nid': 'nid', 'subcategor': 'subcategor', 'tipusicona': 'tipusicona', 'id': 'id', 'tipus': 'tipus', 'subtipus': 'subtipus', 'activa': 'activa', 'data_inst': 'data_inst', 'data_baixa': 'data_baixa', 'codi_carre': 'codi_carre', 'observac_1': 'observac_1', 'foto_1': 'foto_1', 'foto_2': 'foto_2', 'Nom': 'Nom', 'X': 'X', 'Y': 'Y', 'path': 'path', });
lyr_Aparcamentperabicicletes_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gx_media_l': 'gx_media_l', 'adreca': 'adreca', 'code': 'code', 'id': 'id', 'Segur': 'Segur', 'FID': 'FID', 'NUM_APARC': 'NUM_APARC', 'NUCLI': 'NUCLI', 'gid': 'gid', 'tipus': 'tipus', 'subtipus': 'subtipus', 'activa': 'activa', 'data_inst': 'data_inst', 'data_baixa': 'data_baixa', 'codi_carre': 'codi_carre', 'observacio': 'observacio', 'estat': 'estat', 'foto_1': 'foto_1', 'foto_2': 'foto_2', 'layer': 'layer', 'path': 'path', });
lyr_Comerosespecialitzats_11.set('fieldAliases', {'Name': 'Name', });
lyr_focus_studyarea_2.set('fieldImages', {'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', 'municipios': 'TextEdit', 'mostra': 'TextEdit', 'studiare': 'TextEdit', });
lyr_Municipisdelreadestudi_3.set('fieldImages', {'INSPIREID': '', 'COUNTRY': '', 'NATLEV': '', 'NATLEVNAME': '', 'NATCODE': '', 'NAMEUNIT': '', 'CODNUT1': '', 'CODNUT2': '', 'CODNUT3': '', 'municipios': '', 'mostra': '', 'studiare': '', });
lyr_Pedalabilitatterritorialactual_4.set('fieldImages', {'ID_QUADTRE': 'TextEdit', 'LEVEL_FINA': 'TextEdit', 'TOTAL': 'TextEdit', 'HOMES': 'TextEdit', 'DONES': 'TextEdit', 'P_0_14': 'TextEdit', 'P_15_64': 'TextEdit', 'P_65_I_MES': 'TextEdit', 'P_ESPANYOL': 'TextEdit', 'P_ESTRANGE': 'TextEdit', 'P_NASC_CAT': 'TextEdit', 'P_NASC_RES': 'TextEdit', 'P_NASC_EST': 'TextEdit', 'P_POS_IMPU': 'TextEdit', 'calcul_ter': 'TextEdit', 'calcul_t_1': 'TextEdit', });
lyr_Pedalabilitatterritorialprojectada_5.set('fieldImages', {'ID_QUADTRE': 'TextEdit', 'LEVEL_FINA': 'TextEdit', 'TOTAL': 'TextEdit', 'HOMES': 'TextEdit', 'DONES': 'TextEdit', 'P_0_14': 'TextEdit', 'P_15_64': 'TextEdit', 'P_65_I_MES': 'TextEdit', 'P_ESPANYOL': 'TextEdit', 'P_ESTRANGE': 'TextEdit', 'P_NASC_CAT': 'TextEdit', 'P_NASC_RES': 'TextEdit', 'P_NASC_EST': 'TextEdit', 'P_POS_IMPU': 'TextEdit', 'calcul_ter': 'TextEdit', 'calcul_t_1': 'TextEdit', });
lyr_Pedalabilitatperviesactual_6.set('fieldImages', {'id_tramo': 'TextEdit', 'id_vial': 'TextEdit', 'tipo_vial': 'Range', 'tipo_vialD': 'TextEdit', 'claseD': 'TextEdit', 'nombre': 'TextEdit', 'fuente_v': 'Range', 'fuente_vD': 'TextEdit', 'tipo_tramo': 'Range', 'tipo_tramD': 'TextEdit', 'calzada': 'Range', 'calzadaD': 'TextEdit', 'acceso': 'Range', 'accesoD': 'TextEdit', 'firme': 'Range', 'firmeD': 'TextEdit', 'ncarriles': 'TextEdit', 'ncarrilesD': 'TextEdit', 'sentido': 'Range', 'sentidoD': 'TextEdit', 'situacion': 'Range', 'situacionD': 'TextEdit', 'estadofis': 'Range', 'estadofisD': 'TextEdit', 'tipovehic': 'TextEdit', 'tipovehicD': 'TextEdit', 'titular': 'Range', 'titularD': 'TextEdit', 'orden': 'TextEdit', 'ordenD': 'TextEdit', 'fuente_t': 'Range', 'fuente_tD': 'TextEdit', 'fecha_alta': 'DateTime', 'bikeabi_1': 'TextEdit', 'run': 'TextEdit', 'Coinci_1': 'TextEdit', 'f_id': 'TextEdit', });
lyr_Pedalabilitatperviesprojectada_7.set('fieldImages', {'id_tramo': 'TextEdit', 'id_vial': 'TextEdit', 'tipo_vial': 'Range', 'tipo_vialD': 'TextEdit', 'claseD': 'TextEdit', 'nombre': 'TextEdit', 'fuente_v': 'Range', 'fuente_vD': 'TextEdit', 'tipo_tramo': 'Range', 'tipo_tramD': 'TextEdit', 'calzada': 'Range', 'calzadaD': 'TextEdit', 'acceso': 'Range', 'accesoD': 'TextEdit', 'firme': 'Range', 'firmeD': 'TextEdit', 'ncarriles': 'TextEdit', 'ncarrilesD': 'TextEdit', 'sentido': 'Range', 'sentidoD': 'TextEdit', 'situacion': 'Range', 'situacionD': 'TextEdit', 'estadofis': 'Range', 'estadofisD': 'TextEdit', 'tipovehic': 'TextEdit', 'tipovehicD': 'TextEdit', 'titular': 'Range', 'titularD': 'TextEdit', 'orden': 'TextEdit', 'ordenD': 'TextEdit', 'fuente_t': 'Range', 'fuente_tD': 'TextEdit', 'fecha_alta': 'DateTime', 'bikeabi_1': 'TextEdit', 'run': 'TextEdit', 'Coinci_1': 'TextEdit', 'f_id': 'TextEdit', });
lyr_Carrilsbiciactualsiprojectats_8.set('fieldImages', {'asphalt': 'TextEdit', 'Conviv (V)': 'TextEdit', 'showbici': 'TextEdit', 'long': 'TextEdit', 'Projectat': 'Range', });
lyr_Fonts_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'gid': 'TextEdit', 'estat': 'TextEdit', 'observacio': 'TextEdit', 'material': 'TextEdit', 'foto': 'TextEdit', 'data_alta': 'TextEdit', 'FID': 'TextEdit', 'category': 'TextEdit', 'code': 'TextEdit', 'coloricona': 'TextEdit', 'icona': 'TextEdit', 'imatge': 'TextEdit', 'info': 'TextEdit', 'layer': 'TextEdit', 'nid': 'TextEdit', 'subcategor': 'TextEdit', 'tipusicona': 'TextEdit', 'id': 'TextEdit', 'tipus': 'TextEdit', 'subtipus': 'TextEdit', 'activa': 'TextEdit', 'data_inst': 'TextEdit', 'data_baixa': 'TextEdit', 'codi_carre': 'TextEdit', 'observac_1': 'TextEdit', 'foto_1': 'TextEdit', 'foto_2': 'TextEdit', 'Nom': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'path': 'TextEdit', });
lyr_Aparcamentperabicicletes_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'gx_media_l': 'TextEdit', 'adreca': 'TextEdit', 'code': 'TextEdit', 'id': 'TextEdit', 'Segur': 'TextEdit', 'FID': 'TextEdit', 'NUM_APARC': 'TextEdit', 'NUCLI': 'TextEdit', 'gid': 'TextEdit', 'tipus': 'TextEdit', 'subtipus': 'TextEdit', 'activa': 'TextEdit', 'data_inst': 'TextEdit', 'data_baixa': 'TextEdit', 'codi_carre': 'TextEdit', 'observacio': 'TextEdit', 'estat': 'TextEdit', 'foto_1': 'TextEdit', 'foto_2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Comerosespecialitzats_11.set('fieldImages', {'Name': 'TextEdit', });
lyr_focus_studyarea_2.set('fieldLabels', {'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', 'municipios': 'no label', 'mostra': 'no label', 'studiare': 'no label', });
lyr_Municipisdelreadestudi_3.set('fieldLabels', {'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', 'municipios': 'no label', 'mostra': 'no label', 'studiare': 'no label', });
lyr_Pedalabilitatterritorialactual_4.set('fieldLabels', {'ID_QUADTRE': 'no label', 'LEVEL_FINA': 'no label', 'TOTAL': 'no label', 'HOMES': 'no label', 'DONES': 'no label', 'P_0_14': 'no label', 'P_15_64': 'no label', 'P_65_I_MES': 'no label', 'P_ESPANYOL': 'no label', 'P_ESTRANGE': 'no label', 'P_NASC_CAT': 'no label', 'P_NASC_RES': 'no label', 'P_NASC_EST': 'no label', 'P_POS_IMPU': 'no label', 'calcul_ter': 'no label', 'calcul_t_1': 'no label', });
lyr_Pedalabilitatterritorialprojectada_5.set('fieldLabels', {'ID_QUADTRE': 'no label', 'LEVEL_FINA': 'no label', 'TOTAL': 'no label', 'HOMES': 'no label', 'DONES': 'no label', 'P_0_14': 'no label', 'P_15_64': 'no label', 'P_65_I_MES': 'no label', 'P_ESPANYOL': 'no label', 'P_ESTRANGE': 'no label', 'P_NASC_CAT': 'no label', 'P_NASC_RES': 'no label', 'P_NASC_EST': 'no label', 'P_POS_IMPU': 'no label', 'calcul_ter': 'no label', 'calcul_t_1': 'no label', });
lyr_Pedalabilitatperviesactual_6.set('fieldLabels', {'id_tramo': 'no label', 'id_vial': 'no label', 'tipo_vial': 'no label', 'tipo_vialD': 'no label', 'claseD': 'no label', 'nombre': 'no label', 'fuente_v': 'no label', 'fuente_vD': 'no label', 'tipo_tramo': 'no label', 'tipo_tramD': 'no label', 'calzada': 'no label', 'calzadaD': 'no label', 'acceso': 'no label', 'accesoD': 'no label', 'firme': 'no label', 'firmeD': 'no label', 'ncarriles': 'no label', 'ncarrilesD': 'no label', 'sentido': 'no label', 'sentidoD': 'no label', 'situacion': 'no label', 'situacionD': 'no label', 'estadofis': 'no label', 'estadofisD': 'no label', 'tipovehic': 'no label', 'tipovehicD': 'no label', 'titular': 'no label', 'titularD': 'no label', 'orden': 'no label', 'ordenD': 'no label', 'fuente_t': 'no label', 'fuente_tD': 'no label', 'fecha_alta': 'no label', 'bikeabi_1': 'no label', 'run': 'no label', 'Coinci_1': 'no label', 'f_id': 'no label', });
lyr_Pedalabilitatperviesprojectada_7.set('fieldLabels', {'id_tramo': 'no label', 'id_vial': 'no label', 'tipo_vial': 'no label', 'tipo_vialD': 'no label', 'claseD': 'no label', 'nombre': 'no label', 'fuente_v': 'no label', 'fuente_vD': 'no label', 'tipo_tramo': 'no label', 'tipo_tramD': 'no label', 'calzada': 'no label', 'calzadaD': 'no label', 'acceso': 'no label', 'accesoD': 'no label', 'firme': 'no label', 'firmeD': 'no label', 'ncarriles': 'no label', 'ncarrilesD': 'no label', 'sentido': 'no label', 'sentidoD': 'no label', 'situacion': 'no label', 'situacionD': 'no label', 'estadofis': 'no label', 'estadofisD': 'no label', 'tipovehic': 'no label', 'tipovehicD': 'no label', 'titular': 'no label', 'titularD': 'no label', 'orden': 'no label', 'ordenD': 'no label', 'fuente_t': 'no label', 'fuente_tD': 'no label', 'fecha_alta': 'no label', 'bikeabi_1': 'no label', 'run': 'no label', 'Coinci_1': 'no label', 'f_id': 'no label', });
lyr_Carrilsbiciactualsiprojectats_8.set('fieldLabels', {'asphalt': 'no label', 'Conviv (V)': 'no label', 'showbici': 'no label', 'long': 'no label', 'Projectat': 'no label', });
lyr_Fonts_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gid': 'no label', 'estat': 'no label', 'observacio': 'no label', 'material': 'no label', 'foto': 'no label', 'data_alta': 'no label', 'FID': 'no label', 'category': 'no label', 'code': 'no label', 'coloricona': 'no label', 'icona': 'no label', 'imatge': 'no label', 'info': 'no label', 'layer': 'no label', 'nid': 'no label', 'subcategor': 'no label', 'tipusicona': 'no label', 'id': 'no label', 'tipus': 'no label', 'subtipus': 'no label', 'activa': 'no label', 'data_inst': 'no label', 'data_baixa': 'no label', 'codi_carre': 'no label', 'observac_1': 'no label', 'foto_1': 'no label', 'foto_2': 'no label', 'Nom': 'no label', 'X': 'no label', 'Y': 'no label', 'path': 'no label', });
lyr_Aparcamentperabicicletes_10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gx_media_l': 'no label', 'adreca': 'no label', 'code': 'no label', 'id': 'no label', 'Segur': 'no label', 'FID': 'no label', 'NUM_APARC': 'no label', 'NUCLI': 'no label', 'gid': 'no label', 'tipus': 'no label', 'subtipus': 'no label', 'activa': 'no label', 'data_inst': 'no label', 'data_baixa': 'no label', 'codi_carre': 'no label', 'observacio': 'no label', 'estat': 'no label', 'foto_1': 'no label', 'foto_2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Comerosespecialitzats_11.set('fieldLabels', {'Name': 'no label', });
lyr_Comerosespecialitzats_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});