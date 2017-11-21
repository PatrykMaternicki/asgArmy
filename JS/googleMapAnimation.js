document.getElementById('map-checker-button').addEventListener('click' , switchDisplayMap);
document.getElementById('map-checker-button--return').addEventListener('click',switchToAddress)

function switchDisplayMap(){
  var DOMmapContainer = $('#map-wraper');
  DOMmapContainer.css("visibility","visible");
  changeSizeMap(DOMmapContainer,"0%");
  transformAddressContainer(0);

}

function switchToAddress(){
  removeMap()
}

function changeSizeMap(element,percentWidth){
  let percentValue = Number.parseInt(splitValue(percentWidth,"%"));
    if (mapHad100Percent(percentValue)){
      $('#map').css("width","100%");
      return;
    }

  var newValue = increaseValue(percentValue) + "%";
  element.css("width",newValue);
  window.requestAnimationFrame(()=>{this.changeSizeMap(element,newValue);});
}

function splitValue(percentWidth,symbol){
  return percentWidth.split(symbol);
}

function increaseValue(value){
  return ++value;
}

function decreaseValue(transformValue){
  return --transformValue;
}

function mapHad100Percent(percentValue){
  return percentValue >= 100;
}

function transformAddressContainer(transformValue){
  if (transformIsEqual100(transformValue)){
    return;
  }
  let newValue = decreaseValue(transformValue);
  $('#address').css("transform","translateX(" + newValue + "%)");

  window.requestAnimationFrame(()=>{this.transformAddressContainer(newValue);})
}
function transformIsEqual100(transformValue){
  return transformValue <= -100;
}

function removeMap(){
  let element  = $('#map-wraper');
  let splitedValue  = Number.parseInt(splitValue(element[0].style.width,'%'));
  if (mapHadWidth0Percent(splitedValue)){
    $('#map-wraper').css("visibility","hidden");
    $('#map-checker-button--return').css("display","none");
    return;
  }
  let newValue  = decreaseValue(splitedValue);
  element.css('width',"" + newValue + "%");
  window.requestAnimationFrame(()=>{this.removeMap()})
}

function mapHadWidth0Percent(value){
  return value <= 0;
}
