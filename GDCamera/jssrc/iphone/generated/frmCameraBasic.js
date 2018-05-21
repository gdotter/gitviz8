function addWidgetsfrmCameraBasic() {
    frmCameraBasic.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblHeader",
        "text": "Camera Basic",
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
    var cameraBasic = new kony.ui.Camera({
        "centerX": "50%",
        "compressionLevel": 0,
        "focusSkin": "camkonyf",
        "height": "50dp",
        "id": "cameraBasic",
        "isVisible": true,
        "left": "76dp",
        "onCapture": AS_Camera_4feb8d4c98aa45469f7b261857622e99,
        "scaleFactor": 80,
        "skin": "camkony",
        "text": "Go To Camera",
        "top": "10dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "nativeUserInterface": true,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": ""
        }
    });
    var lblRaw = new kony.ui.Label({
        "id": "lblRaw",
        "isVisible": true,
        "left": "10dp",
        "skin": "lblwhite120",
        "text": "Image in RawBytes:",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgRaw = new kony.ui.Image2({
        "centerX": "50%",
        "height": "120dp",
        "id": "imgRaw",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": "120dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblBase64 = new kony.ui.Label({
        "id": "lblBase64",
        "isVisible": true,
        "left": "10dp",
        "skin": "lblwhite120",
        "text": "Image in Base64:",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgBase64 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "120dp",
        "id": "imgBase64",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": "120dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMain.add(lblHeader, cameraBasic, lblRaw, imgRaw, lblBase64, imgBase64);
    frmCameraBasic.add(flxMain);
};

function frmCameraBasicGlobals() {
    frmCameraBasic = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraBasic,
        "bounces": false,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "frmCameraBasic",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera Options"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
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