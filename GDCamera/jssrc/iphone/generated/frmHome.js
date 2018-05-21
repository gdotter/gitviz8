function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLblHeader",
        "text": "Camera Demo",
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
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "isVisible": true,
        "left": "10dp",
        "skin": "sknlblNormal",
        "text": "This application will showcase the following features of the Camera API:",
        "top": "143dp",
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
    if (typeof initializeFBox0c7082933375f40 === 'function') initializeFBox0c7082933375f40();
    var segDesc = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{
            "imgBullet": "bullet.png",
            "lblItemDesc": "Capture Pictures using the Native Camera"
        }, {
            "imgBullet": "bullet.png",
            "lblItemDesc": "Overlaying the widgets on the Native Camera view"
        }, {
            "imgBullet": "bullet.png",
            "lblItemDesc": "Controlling the Camera Access Modes"
        }, {
            "imgBullet": "bullet.png",
            "lblItemDesc": "Specifying the orientation of the Image"
        }],
        "groupCells": false,
        "height": "180dp",
        "id": "segDesc",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "segTxpt",
        "rowTemplate": FBox0c7082933375f40,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "190dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxDesc": "flxDesc",
            "imgBullet": "imgBullet",
            "lblItemDesc": "lblItemDesc"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": false
    });
    var btnContinue = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "btnflatbluef",
        "height": "50dp",
        "id": "btnContinue",
        "isVisible": true,
        "left": "30dp",
        "onClick": AS_Button_417c71101bb6460282cf86f96d2846fc,
        "right": "70dp",
        "skin": "btnflatblue",
        "text": "Continue",
        "top": "395dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmHome.add(lblHeader, lblDesc, segDesc, btnContinue);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera Demo"
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
            "leftBarButtonItems": [],
            "rightBarButtonItems": []
        },
        "titleBarSkin": "slTitleBar"
    });
};