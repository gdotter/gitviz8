function addWidgetsfrmCameraOverlay() {
    frmCameraOverlay.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblHeader",
        "text": "Camera with Overlay",
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
    var cameraOverlay = new kony.ui.Camera({
        "centerX": "50%",
        "compressionLevel": 0,
        "focusSkin": "camkonyf",
        "height": "50dp",
        "id": "cameraOverlay",
        "isVisible": true,
        "left": "76dp",
        "onCapture": AS_Camera_f50a199ee87a47cba27b244b10ef4824,
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
        "enableOverlay": true,
        "nativeUserInterface": true,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": "",
            "overlayForm": frmOverlay
        }
    });
    var imgImageWithOverlay = new kony.ui.Image2({
        "centerX": "50%",
        "height": "370dp",
        "id": "imgImageWithOverlay",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "10dp",
        "width": "305dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmCameraOverlay.add(lblHeader, cameraOverlay, imgImageWithOverlay);
};

function frmCameraOverlayGlobals() {
    frmCameraOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraOverlay,
        "bounces": false,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "frmCameraOverlay",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera with Overlay"
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