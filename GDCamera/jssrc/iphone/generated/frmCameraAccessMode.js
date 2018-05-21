function addWidgetsfrmCameraAccessMode() {
    frmCameraAccessMode.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblHeader300",
        "text": "Camera Access Modes",
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
    var cameraPublic = new kony.ui.Camera({
        "centerX": "50%",
        "compressionLevel": 0,
        "focusSkin": "camkonyf",
        "height": "50dp",
        "id": "cameraPublic",
        "isVisible": true,
        "left": "76dp",
        "onCapture": AS_Camera_9286cec159a3435b9d9484e57d8c233e,
        "scaleFactor": 80,
        "skin": "camkony",
        "text": "Public",
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
    var cameraPrivate = new kony.ui.Camera({
        "centerX": "50%",
        "compressionLevel": 0,
        "focusSkin": "camkonyf",
        "height": "50dp",
        "id": "cameraPrivate",
        "isVisible": true,
        "left": "76dp",
        "onCapture": AS_Camera_280b31bf71cc47f483e7f12dd77bacd0,
        "scaleFactor": 80,
        "skin": "camkony",
        "text": "Private",
        "top": "10dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PRIVATE,
        "enableOverlay": false,
        "nativeUserInterface": true,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": ""
        }
    });
    var cameraInMemory = new kony.ui.Camera({
        "centerX": "50%",
        "compressionLevel": 0,
        "focusSkin": "camkonyf",
        "height": "50dp",
        "id": "cameraInMemory",
        "isVisible": true,
        "left": "76dp",
        "onCapture": AS_Camera_9a243042ce504448ad69558f114769c8,
        "scaleFactor": 80,
        "skin": "camkony",
        "text": "In-Memory",
        "top": "10dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_INMEMORY,
        "enableOverlay": false,
        "nativeUserInterface": true,
        "overlayConfig": {
            "startVideoButtonText": "",
            "stopVideoButtonText": ""
        }
    });
    var flxImages = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "120dp",
        "id": "flxImages",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxImages.setDefaultUnit(kony.flex.DP);
    var imgPublic = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80dp",
        "id": "imgPublic",
        "isVisible": true,
        "left": "20dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgPrivate = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80dp",
        "id": "imgPrivate",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgInMemory = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80dp",
        "id": "imgInMemory",
        "isVisible": true,
        "right": "20dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImages.add(imgPublic, imgPrivate, imgInMemory);
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblNormal",
        "top": "20dp",
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
    frmCameraAccessMode.add(lblHeader, cameraPublic, cameraPrivate, cameraInMemory, flxImages, lblDesc);
};

function frmCameraAccessModeGlobals() {
    frmCameraAccessMode = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCameraAccessMode,
        "bounces": false,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "frmCameraAccessMode",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera Access Modes"
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