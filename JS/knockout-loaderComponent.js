

var dataComponent = {
  recordArray: []
}


function AppViewModel(){
  this.events  = ko.observableArray(dataComponent.recordArray)
}
function combinetToView(){
  ko.applyBindings(new AppViewModel());
}
