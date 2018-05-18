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
    var flxLoginform = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "52%",
        "id": "flxLoginform",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0548a508c489340",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxLoginform.setDefaultUnit(kony.flex.DP);
    var flxUsername = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flxUsername",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknflxbg039fa86a373bf41",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxUsername.setDefaultUnit(kony.flex.DP);
    var txtUsername = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "SkntxtfldFoc056dbe240c7054e",
        "height": "100%",
        "id": "txtUsername",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "SkntxtfldNor05b2bbef8be7042",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "70%",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblUsericon06dbf163abfed4f = new kony.ui.Label({
        "height": "100%",
        "id": "lblUsericon06dbf163abfed4f",
        "isVisible": true,
        "left": "15%",
        "skin": "SknlblIcon021b525bf594446",
        "text": "D",
        "top": "0dp",
        "width": "15%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Linee0b002539357fe43 = new kony.ui.Label({
        "bottom": "0dp",
        "centerX": "50%",
        "height": "1dp",
        "id": "Linee0b002539357fe43",
        "isVisible": false,
        "skin": "SknlblLine073c47dccb26248",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxUsername.add(txtUsername, lblUsericon06dbf163abfed4f, Linee0b002539357fe43);
    var flxPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "44dp",
        "id": "flxPassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknflxbg039fa86a373bf41",
        "top": "44dp",
        "width": "100%"
    }, {}, {});
    flxPassword.setDefaultUnit(kony.flex.DP);
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "SkntxtfldFoc056dbe240c7054e",
        "height": "100%",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "SkntxtfldNor05b2bbef8be7042",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "70%",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [6, 0, 6, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblPasswordicon09f9a183c18da45 = new kony.ui.Label({
        "height": "100%",
        "id": "lblPasswordicon09f9a183c18da45",
        "isVisible": true,
        "left": "15%",
        "skin": "SknlblIcon021b525bf594446",
        "text": "U",
        "top": "0dp",
        "width": "15%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLinee0344a7e9459354a = new kony.ui.Label({
        "bottom": "0dp",
        "centerX": "50%",
        "height": "1dp",
        "id": "CopyLinee0344a7e9459354a",
        "isVisible": true,
        "skin": "SknlblLine073c47dccb26248",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxPassword.add(txtPassword, lblPasswordicon09f9a183c18da45, CopyLinee0344a7e9459354a);
    var btnLogin = new kony.ui.Button({
        "centerX": "50.00%",
        "focusSkin": "SknBtnFoc0dd6b6185061f40",
        "height": "40dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "45dp",
        "skin": "SknBtnNor090d080db3e4142",
        "text": "Login",
        "top": "110dp",
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
    var btnForgotPassword = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "SknBtntxtFoc032cea6153b2343",
        "height": "20dp",
        "id": "btnForgotPassword",
        "isVisible": true,
        "skin": "SknBtntxtNor0d3179da334ec4e",
        "text": "Forgot Password?",
        "top": "155dp",
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
    var btnCreateAccount = new kony.ui.Button({
        "bottom": "0dp",
        "centerX": "50%",
        "focusSkin": "SknBtntxtFoc032cea6153b2343",
        "height": "40dp",
        "id": "btnCreateAccount",
        "isVisible": false,
        "skin": "SknBtntxtNor0d3179da334ec4e",
        "text": "Don't have an account? Create one.",
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
    var btnTouchId = new kony.ui.Button({
        "bottom": "20%",
        "centerX": "50%",
        "focusSkin": "sknBtnTouchId074c3779ee13e46",
        "height": "60dp",
        "id": "btnTouchId",
        "isVisible": false,
        "skin": "sknBtnTouchId074c3779ee13e46",
        "text": "Button",
        "width": "60dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flxLoginform.add(flxUsername, flxPassword, btnLogin, btnForgotPassword, btnCreateAccount, btnTouchId);
    var imgLogo = new kony.ui.Image2({
        "centerX": "50.00%",
        "height": "50dp",
        "id": "imgLogo",
        "isVisible": true,
        "skin": "slImage0d98b31cfda894b",
        "src": "konylogo.png",
        "top": "2%",
        "width": "75dp",
        "zIndex": 2
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopybtnLogin0f85d682a4c0143 = new kony.ui.Button({
        "centerX": "49.91%",
        "focusSkin": "SknBtnFoc0dd6b6185061f40",
        "height": "40dp",
        "id": "CopybtnLogin0f85d682a4c0143",
        "isVisible": true,
        "left": "45dp",
        "onClick": AS_Button_fa3d24a334684d83877e55210ddad668,
        "skin": "SknBtnNor090d080db3e4142",
        "text": "Get Current Battery Level",
        "top": "18.55%",
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
    var FlexContainer06328d05fe26043 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "62dp",
        "id": "FlexContainer06328d05fe26043",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox02ab34d6bddfb46",
        "top": "225dp",
        "width": "70%",
        "zIndex": 2
    }, {}, {});
    FlexContainer06328d05fe26043.setDefaultUnit(kony.flex.DP);
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
    FlexContainer06328d05fe26043.add(flxBatteryInner, lblStatus, imgCharger);
    frmHome.add(flxLoginform, imgLogo, CopybtnLogin0f85d682a4c0143, FlexContainer06328d05fe26043);
    frmBatteryStatus.add(frmHome);
};

function frmBatteryStatusGlobals() {
    frmBatteryStatus = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmBatteryStatus,
        "enabledForIdleTimeout": false,
        "id": "frmBatteryStatus",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
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
    frmBatteryStatus.info = {
        "kuid": "83e1d7625c9f4709998cce9027d67b35"
    };
};