function addWidgetsfrmCameraOpts() {
    frmCameraOpts.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblHeader",
        "text": "Camera Options",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnCamera = new kony.ui.Button({
        "focusSkin": "btnflatbluef",
        "height": "50dp",
        "id": "btnCamera",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_33bbed4376504a6888b4360c46ce0832,
        "right": "50dp",
        "skin": "btnflatblue",
        "text": "Basic Camera",
        "top": "160dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCameraOverlay = new kony.ui.Button({
        "focusSkin": "btnflatbluef",
        "height": "50dp",
        "id": "btnCameraOverlay",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_8db5c3f8a314440caed5de4fc7b564cd,
        "right": "50dp",
        "skin": "btnflatblue",
        "text": "Camera with Form Overlay",
        "top": "230dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnAccMode = new kony.ui.Button({
        "focusSkin": "btnflatbluef",
        "height": "50dp",
        "id": "btnAccMode",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_3d55447853434aca8e98ee247b378bf9,
        "right": "50dp",
        "skin": "btnflatblue",
        "text": "Camera Access Modes",
        "top": "300dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmCameraOpts.add(lblHeader, btnCamera, btnCameraOverlay, btnAccMode);
};

function frmCameraOptsGlobals() {
    frmCameraOpts = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraOpts,
        "enabledForIdleTimeout": false,
        "id": "frmCameraOpts",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera Options"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};