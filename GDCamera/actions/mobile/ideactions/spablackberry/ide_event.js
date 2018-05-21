function frmCamAccessMode_cameraPublicMode_onCapture_seq0(eventobject) {
    onCapturePublicMode.call(this, eventobject);
};

function frmCamAccessMode_cameraPrivateMode_onCapture_seq0(eventobject) {
    onCapturePrivateMode.call(this, eventobject);
};

function frmCamAccessMode_cameraInMemoryMode_onCapture_seq0(eventobject) {
    onCaptureInMemoryMode.call(this, eventobject);
};

function frmCamBasic_cameraBasic_onCapture_seq0(eventobject) {
    onCapture.call(this, eventobject);
};

function frmCamOptions_btnBasicCam_onClick_seq0(eventobject) {
    frmCamBasic.show();
};

function frmCamOptions_btnOverlay_onClick_seq0(eventobject) {
    frmCamOverlay.show();
};

function frmCamOptions_btnAccMode_onClick_seq0(eventobject) {
    frmCamAccessMode.show();
};

function frmCamOptions_btnOrientation_onClick_seq0(eventobject) {
    frmCamOrientation.show();
};

function frmCamOrientation_camPortrait_onCapture_seq0(eventobject) {
    onCapturePortOrientaion.call(this, eventobject);
};

function frmCamOrientation_camLandscape_onCapture_seq0(eventobject) {
    onCaptureLandOrientaion.call(this, eventobject);
};

function frmCamOverlay_cameraOverlay_onCapture_seq0(eventobject) {
    onCaptureFrmOverLay.call(this, eventobject);
};

function frmIntro_btnContinue_onClick_seq0(eventobject) {
    frmCamOptions.show();
};