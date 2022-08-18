ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32647").setExtent([806364.025935, 713582.534566, 808441.229897, 714737.333729]);
var wms_layers = [];

var format_Land_Pin_0 = new ol.format.GeoJSON();
var features_Land_Pin_0 = format_Land_Pin_0.readFeatures(json_Land_Pin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Land_Pin_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Land_Pin_0.addFeatures(features_Land_Pin_0);
var lyr_Land_Pin_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Land_Pin_0, 
                style: style_Land_Pin_0,
                interactive: true,
                title: '<img src="styles/legend/Land_Pin_0.png" /> Land_Pin'
            });

        var lyr_EsriTopographic_1 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Rubber_FSC_2 = new ol.format.GeoJSON();
var features_Rubber_FSC_2 = format_Rubber_FSC_2.readFeatures(json_Rubber_FSC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Rubber_FSC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rubber_FSC_2.addFeatures(features_Rubber_FSC_2);
var lyr_Rubber_FSC_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rubber_FSC_2, 
                style: style_Rubber_FSC_2,
                interactive: true,
    title: 'Rubber_FSC<br />\
    <img src="styles/legend/Rubber_FSC_2_0.png" /> FSC<br />\
    <img src="styles/legend/Rubber_FSC_2_1.png" /> No<br />\
    <img src="styles/legend/Rubber_FSC_2_2.png" /> <br />'
        });
var format_Tam_New_3 = new ol.format.GeoJSON();
var features_Tam_New_3 = format_Tam_New_3.readFeatures(json_Tam_New_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Tam_New_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tam_New_3.addFeatures(features_Tam_New_3);
var lyr_Tam_New_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tam_New_3, 
                style: style_Tam_New_3,
                interactive: true,
                title: '<img src="styles/legend/Tam_New_3.png" /> Tam_New'
            });

lyr_Land_Pin_0.setVisible(true);lyr_EsriTopographic_1.setVisible(true);lyr_Rubber_FSC_2.setVisible(true);lyr_Tam_New_3.setVisible(true);
var layersList = [lyr_Land_Pin_0,lyr_EsriTopographic_1,lyr_Rubber_FSC_2,lyr_Tam_New_3];
lyr_Land_Pin_0.set('fieldAliases', {'id': 'id', 'Pin_Code': 'Pin_Code', 'X': 'X', 'Y': 'Y', });
lyr_Rubber_FSC_2.set('fieldAliases', {'Land_Code': 'Land_Code', 'Land_Type2': 'Land_Type2', 'Name': 'Name', 'Coop_Code': 'Coop_Code', 'Sqm': 'Sqm', 'X1': 'X1', 'Y1': 'Y1', 'Rai1': 'Rai1', 'Name_coop': 'Name_coop', 'Num_coop': 'Num_coop', 'Employee': 'Employee', 'FSC_Projec': 'FSC_Projec', 'ID_Card2': 'ID_Card2', 'Slop1': 'Slop1', 'Length_R': 'Length_R', 'Height_Dif': 'Height_Dif', 'FSC_ID': 'FSC_ID', 'NAME_THA': 'NAME_THA', 'SEX': 'SEX', 'ID_CARD': 'ID_CARD', 'PHONE_NUM': 'PHONE_NUM', 'FARMER_ID': 'FARMER_ID', 'ADDRESS': 'ADDRESS', 'NAME_L_THA': 'NAME_L_THA', 'NAME_L_ENG': 'NAME_L_ENG', 'RELATIONS': 'RELATIONS', 'LAND_TYPE': 'LAND_TYPE', 'LAND_NUM': 'LAND_NUM', 'ISSUE_DATE': 'ISSUE_DATE', 'RAI': 'RAI', 'NGAN': 'NGAN', 'SQAURE_WA': 'SQAURE_WA', 'ADDRESS_L': 'ADDRESS_L', 'CONTACT_A': 'CONTACT_A', 'SLOP': 'SLOP', 'X': 'X', 'Y': 'Y', 'PLANT_AREA': 'PLANT_AREA', 'REGIS_AREA': 'REGIS_AREA', 'PLANTING_Y': 'PLANTING_Y', 'RUBBER_AGE': 'RUBBER_AGE', 'R_SPECIES': 'R_SPECIES', 'REPLANT_Y': 'REPLANT_Y', 'CUT_AGE': 'CUT_AGE', 'REMARK': 'REMARK', 'TEX64': 'TEX64', 'TEX65': 'TEX65', 'TEX66': 'TEX66', 'APPLY_DATE': 'APPLY_DATE', 'MEMBER_Y': 'MEMBER_Y', 'STATUS': 'STATUS', 'APPROVAL_D': 'APPROVAL_D', 'RESIG_D': 'RESIG_D', 'APPROVER': 'APPROVER', 'REASON': 'REASON', 'GE': 'GE', 'LAND_AREA': 'LAND_AREA', 'TAPPING_A': 'TAPPING_A', 'RUB_AGE': 'RUB_AGE', 'YOUNG_AREA': 'YOUNG_AREA', 'YOUNG_AGE': 'YOUNG_AGE', 'WOOD_AREA': 'WOOD_AREA', 'RESIDENCE': 'RESIDENCE', 'ROAD_AREA': 'ROAD_AREA', 'BUFFER_Z': 'BUFFER_Z', 'WATER_AREA': 'WATER_AREA', 'CROPS_AREA': 'CROPS_AREA', });
lyr_Tam_New_3.set('fieldAliases', {'AREA': 'AREA', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'TAM_NAM_E': 'TAM_NAM_E', });
lyr_Land_Pin_0.set('fieldImages', {'id': 'TextEdit', 'Pin_Code': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Rubber_FSC_2.set('fieldImages', {'Land_Code': 'TextEdit', 'Land_Type2': 'TextEdit', 'Name': 'TextEdit', 'Coop_Code': 'TextEdit', 'Sqm': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Rai1': 'TextEdit', 'Name_coop': 'TextEdit', 'Num_coop': 'TextEdit', 'Employee': 'TextEdit', 'FSC_Projec': 'TextEdit', 'ID_Card2': 'TextEdit', 'Slop1': 'TextEdit', 'Length_R': 'TextEdit', 'Height_Dif': 'TextEdit', 'FSC_ID': 'TextEdit', 'NAME_THA': 'TextEdit', 'SEX': 'TextEdit', 'ID_CARD': 'TextEdit', 'PHONE_NUM': 'TextEdit', 'FARMER_ID': 'TextEdit', 'ADDRESS': 'TextEdit', 'NAME_L_THA': 'TextEdit', 'NAME_L_ENG': 'TextEdit', 'RELATIONS': 'TextEdit', 'LAND_TYPE': 'TextEdit', 'LAND_NUM': 'TextEdit', 'ISSUE_DATE': 'DateTime', 'RAI': 'Range', 'NGAN': 'Range', 'SQAURE_WA': 'Range', 'ADDRESS_L': 'TextEdit', 'CONTACT_A': 'TextEdit', 'SLOP': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PLANT_AREA': 'TextEdit', 'REGIS_AREA': 'TextEdit', 'PLANTING_Y': 'TextEdit', 'RUBBER_AGE': 'Range', 'R_SPECIES': 'TextEdit', 'REPLANT_Y': 'TextEdit', 'CUT_AGE': 'Range', 'REMARK': 'TextEdit', 'TEX64': 'TextEdit', 'TEX65': 'TextEdit', 'TEX66': 'TextEdit', 'APPLY_DATE': 'DateTime', 'MEMBER_Y': 'Range', 'STATUS': 'TextEdit', 'APPROVAL_D': 'DateTime', 'RESIG_D': 'DateTime', 'APPROVER': 'TextEdit', 'REASON': 'TextEdit', 'GE': 'TextEdit', 'LAND_AREA': 'TextEdit', 'TAPPING_A': 'TextEdit', 'RUB_AGE': 'Range', 'YOUNG_AREA': 'TextEdit', 'YOUNG_AGE': 'Range', 'WOOD_AREA': 'TextEdit', 'RESIDENCE': 'TextEdit', 'ROAD_AREA': 'TextEdit', 'BUFFER_Z': 'TextEdit', 'WATER_AREA': 'TextEdit', 'CROPS_AREA': 'TextEdit', });
lyr_Tam_New_3.set('fieldImages', {'AREA': 'TextEdit', 'TAM_CODE': 'TextEdit', 'TAM_NAM_T': 'TextEdit', 'TAM_NAM_E': 'TextEdit', });
lyr_Land_Pin_0.set('fieldLabels', {'id': 'no label', 'Pin_Code': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Rubber_FSC_2.set('fieldLabels', {'Land_Code': 'inline label', 'Land_Type2': 'no label', 'Name': 'no label', 'Coop_Code': 'inline label', 'Sqm': 'no label', 'X1': 'no label', 'Y1': 'no label', 'Rai1': 'no label', 'Name_coop': 'inline label', 'Num_coop': 'no label', 'Employee': 'no label', 'FSC_Projec': 'no label', 'ID_Card2': 'no label', 'Slop1': 'no label', 'Length_R': 'no label', 'Height_Dif': 'no label', 'FSC_ID': 'no label', 'NAME_THA': 'no label', 'SEX': 'no label', 'ID_CARD': 'no label', 'PHONE_NUM': 'no label', 'FARMER_ID': 'no label', 'ADDRESS': 'no label', 'NAME_L_THA': 'no label', 'NAME_L_ENG': 'no label', 'RELATIONS': 'no label', 'LAND_TYPE': 'no label', 'LAND_NUM': 'no label', 'ISSUE_DATE': 'no label', 'RAI': 'no label', 'NGAN': 'no label', 'SQAURE_WA': 'no label', 'ADDRESS_L': 'no label', 'CONTACT_A': 'no label', 'SLOP': 'no label', 'X': 'no label', 'Y': 'no label', 'PLANT_AREA': 'no label', 'REGIS_AREA': 'no label', 'PLANTING_Y': 'no label', 'RUBBER_AGE': 'no label', 'R_SPECIES': 'no label', 'REPLANT_Y': 'no label', 'CUT_AGE': 'no label', 'REMARK': 'no label', 'TEX64': 'no label', 'TEX65': 'no label', 'TEX66': 'no label', 'APPLY_DATE': 'no label', 'MEMBER_Y': 'no label', 'STATUS': 'no label', 'APPROVAL_D': 'no label', 'RESIG_D': 'no label', 'APPROVER': 'no label', 'REASON': 'no label', 'GE': 'no label', 'LAND_AREA': 'no label', 'TAPPING_A': 'no label', 'RUB_AGE': 'no label', 'YOUNG_AREA': 'no label', 'YOUNG_AGE': 'no label', 'WOOD_AREA': 'no label', 'RESIDENCE': 'no label', 'ROAD_AREA': 'no label', 'BUFFER_Z': 'no label', 'WATER_AREA': 'no label', 'CROPS_AREA': 'no label', });
lyr_Tam_New_3.set('fieldLabels', {'AREA': 'no label', 'TAM_CODE': 'no label', 'TAM_NAM_T': 'no label', 'TAM_NAM_E': 'no label', });
lyr_Tam_New_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});