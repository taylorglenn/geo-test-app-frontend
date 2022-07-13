var dashboardViewModel;

function dashboardItemModel () {
    let self = this;

    self.sampleId = ko.observable();
    self.date = ko.observable();
    self.sentBy = ko.observable();
    self.projectName = ko.observable();
    self.projectNumber = ko.observable();
    self.poNumber = ko.observable();
    self.contactName = ko.observable();
    self.contactEmail = ko.observable();
    self.type = ko.observable();
    self.proctor = ko.observable();
    self.testingInstructions = ko.observable();
    self.notes = ko.observable();
    self.rush = ko.observable();
    self.status = ko.observable();
    self.action = ko.observable();
}

function dashboardModel() {
    let self = this;

    self.dashboardItems = ko.observableArray([]);
}

function loadAndBindDashboardViewModel() {
    dashboardViewModel = new dashboardModel();

    ko.applyBindings(dashboardViewModel, $('#dashboard-content-wrapper')[0]);
}

function initDashboardViewModel() {
    $.ajax({
        type: 'POST',
        url: '/Dashboard/InitDashboardViewModel',
        data: '',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (response) {
            if (response.items !== null) {
                response.items.forEach(function (item) {
                    let newItemModel = new dashboardItemModel();
                    newItemModel.sampleId(item.sampleId);
                    newItemModel.date((new Date(item.date)).toDateString());
                    newItemModel.sentBy(item.sentBy);
                    newItemModel.projectName(item.projectName);
                    newItemModel.projectNumber(item.projectNumber);
                    newItemModel.poNumber(item.poNumber);
                    newItemModel.contactName(item.contactName);
                    newItemModel.contactEmail(item.contactEmail);
                    newItemModel.type(item.type);
                    newItemModel.proctor(item.proctor || 'n/a');
                    newItemModel.testingInstructions(item.testingInstructions || 'n/a');
                    newItemModel.notes(item.notes);
                    newItemModel.rush(item.rush);
                    newItemModel.status(item.status);
                    newItemModel.action(item.action);

                    dashboardViewModel.dashboardItems.push(newItemModel);
                });
            }
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        },
        complete: function (response) {

        }
    });
}

$(document).ready(function () {
    loadAndBindDashboardViewModel();
    initDashboardViewModel();
});