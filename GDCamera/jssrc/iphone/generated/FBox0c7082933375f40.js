function initializeFBox0c7082933375f40() {
    FBox0c7082933375f40 = new kony.ui.FlexContainer({
        "clipBounds": false,
        "height": "40dp",
        "id": "FBox0c7082933375f40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0c7082933375f40.setDefaultUnit(kony.flex.DP);
    var flxDesc = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "flxDesc",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxDesc.setDefaultUnit(kony.flex.DP);
    var imgBullet = new kony.ui.Image2({
        "centerY": "20dp",
        "height": "15dp",
        "id": "imgBullet",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "15dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblItemDesc = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblItemDesc",
        "isVisible": true,
        "left": "25dp",
        "skin": "sknlblNormal",
        "text": "Label",
        "width": "340dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxDesc.add(imgBullet, lblItemDesc);
    FBox0c7082933375f40.add(flxDesc);
}