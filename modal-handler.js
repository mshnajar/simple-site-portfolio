function toggleSpectrumImageModal() {
    var spectrumModal = $('#spectrumModal');
    
    if (spectrumModal.hasClass('show')) {
        spectrumModal.modal('hide');
    } else {
        spectrumModal.modal('show');
    }
    
    spectrumModal.on('hidden.bs.modal', 
        function () {
            document.body.focus();
        }
    );
}

function toggleDashboardImageModal() {
    var dashboardModal = $('#dashboardModal');
    
    if (dashboardModal.hasClass('show')) {
        dashboardModal.modal('hide');
    } else {
        dashboardModal.modal('show');
    }
    
    dashboardModal.on('hidden.bs.modal', 
        function () {
            document.body.focus();
        }
    );
}