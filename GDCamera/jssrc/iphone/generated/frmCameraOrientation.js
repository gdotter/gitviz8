function addWidgetsfrmCameraOrientation() {
    frmCameraOrientation.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblHeader",
        "text": "Camera Orientation",
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
    var cameraPortrait = new kony.ui.Camera({
        "centerX": "50%",
        "compressionLevel": 0,
        "focusSkin": "camkonyf",
        "height": "50dp",
        "id": "cameraPortrait",
        "isVisible": true,
        "left": "76dp",
        "onCapture": AS_Camera_c9f0c205858f42d39245ce64f719a0a9,
        "scaleFactor": 80,
        "skin": "camkony",
        "text": "Portrait",
        "top": "10dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_PORTRAIT,
        "enableOverlay": false,
        "nativeUserInterface": true,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": ""
        }
    });
    var cameraLandscape = new kony.ui.Camera({
        "centerX": "50%",
        "compressionLevel": 0,
        "focusSkin": "camkonyf",
        "height": "50dp",
        "id": "cameraLandscape",
        "isVisible": true,
        "left": "76dp",
        "onCapture": AS_Camera_19039df90f514fc7a144206727f19cee,
        "scaleFactor": 80,
        "skin": "camkony",
        "text": "Landscape",
        "top": "10dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_LANDSCAPE,
        "enableOverlay": false,
        "nativeUserInterface": true,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": ""
        }
    });
    var flxImages = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "220dp",
        "id": "flxImages",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxImages.setDefaultUnit(kony.flex.DP);
    var imgPortrait = new kony.ui.Image2({
        "centerY": "50%",
        "height": "130dp",
        "id": "imgPortrait",
        "isVisible": true,
        "left": "30dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "130dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLandscape = new kony.ui.Image2({
        "centerY": "50%",
        "height": "130dp",
        "id": "imgLandscape",
        "isVisible": true,
        "right": "30dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "130dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImages.add(imgPortrait, imgLandscape);
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblNormal",
        "top": "50dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmCameraOrientation.add(lblHeader, cameraPortrait, cameraLandscape, flxImages, lblDesc);
};

function frmCameraOrientationGlobals() {
    frmCameraOrientation = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraOrientation,
        "bounces": false,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "frmCameraOrientation",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera Orientation"
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