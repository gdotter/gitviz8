function addWidgetsfrmOverlay() {
    frmOverlay.setDefaultUnit(kony.flex.DP);
    var imgOverlay = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50dp",
        "id": "imgOverlay",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "header.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmOverlay.add(imgOverlay);
};

function frmOverlayGlobals() {
    frmOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmOverlay,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmOverlay",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "frmtrans"
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};