function addWidgetsfrmBatteryStatus() {
    frmBatteryStatus.setDefaultUnit(kony.flex.DP);
    var frmHome = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "frmHome",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0548a508c489340",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmHome.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "CopyslLabel0d2b6fa947b9443",
        "text": "Battery Level via NFI",
        "top": "20dp",
        "width": "90%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnGetBattery = new kony.ui.Button({
        "centerX": "49.91%",
        "focusSkin": "btnkonyorangef",
        "height": "40dp",
        "id": "btnGetBattery",
        "isVisible": true,
        "left": "45dp",
        "onClick": AS_Button_fa3d24a334684d83877e55210ddad668,
        "skin": "btnkonyorange",
        "text": "Get Current Battery Level",
        "top": "90dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var flxLevel = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "62dp",
        "id": "flxLevel",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox02ab34d6bddfb46",
        "top": "225dp",
        "width": "70%",
        "zIndex": 2
    }, {}, {});
    flxLevel.setDefaultUnit(kony.flex.DP);
    var flxBatteryInner = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBatteryInner",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "Copysknflx0fd890454b0a646",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBatteryInner.setDefaultUnit(kony.flex.DP);
    flxBatteryInner.add();
    var lblStatus = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblStatus",
        "isVisible": true,
        "left": "91dp",
        "skin": "CopyslLabel0415db0560c0c42",
        "top": "12dp",
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
    var imgCharger = new kony.ui.Image2({
        "centerY": "50%",
        "height": "36dp",
        "id": "imgCharger",
        "isVisible": false,
        "left": "25dp",
        "skin": "slImage",
        "src": "charging.png",
        "width": "55dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLevel.add(flxBatteryInner, lblStatus, imgCharger);
    frmHome.add(lblTitle, btnGetBattery, flxLevel);
    frmBatteryStatus.add(frmHome);
};

function frmBatteryStatusGlobals() {
    frmBatteryStatus = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBatteryStatus,
        "enabledForIdleTimeout": false,
        "id": "frmBatteryStatus",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm06199358e6b6840"
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};