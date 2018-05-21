function addWidgetsfrmCameraOpts() {
    frmCameraOpts.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblHeader",
        "text": "Camera Options",
        "top": "0dp",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    }, {
        "showProgressIndicator": true
    });
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
    }, {
        "showProgressIndicator": true
    });
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
    }, {
        "showProgressIndicator": true
    });
    var btnOrientation = new kony.ui.Button({
        "focusSkin": "btnflatbluef",
        "height": "50dp",
        "id": "btnOrientation",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_7212eb06e1294d218ed12aa433d4db64,
        "right": "50dp",
        "skin": "btnflatblue",
        "text": "Camera Orientation",
        "top": "370dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmCameraOpts.add(lblHeader, btnCamera, btnCameraOverlay, btnAccMode, btnOrientation);
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
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarAttributes": {
            "barStyle": constants.BAR_STYLE_DEAFULT,
            "navigationBarHidden": false,
            "translucent": true,
            "tintColor": "333333",
            "hidesBackButton": true,
            "prompt": "",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "button",
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": []
        },
        "titleBarSkin": "slTitleBar"
    });
};