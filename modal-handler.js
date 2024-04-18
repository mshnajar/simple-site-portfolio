function toggleSpectrumImageModal() {
    var spectrumModal = $('#spectrumModal');
    
    if (spectrumModal.hasClass('show')) {
        spectrumModal.modal('hide');
    } else {
        spectrumModal.modal('show');
    }
}

function toggleDashboardImageModal() {
    var dashboardModal = $('#dashboardModal');
    
    if (dashboardModal.hasClass('show')) {
        dashboardModal.modal('hide');
    } else {
        dashboardModal.modal('show');
    }
}