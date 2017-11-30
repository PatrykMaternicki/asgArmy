document.getElementById('map-checker-button').addEventListener('click' , switchDisplayMap);
document.getElementById('map-checker-button--return').addEventListener('click',switchToAddress)

function switchDisplayMap(){
  var DOMmapContainer = $('#map-wraper');
  DOMmapContainer.css("visibility","visible");
  changeSizeMap(DOMmapContainer,"1%");
  transformAddressContainer(1);

}

function switchToAddress(){
  removeMap();
  backAddress();
}

function changeSizeMap(element,percentWidth){
  let percentValue = Number.parseInt(splitValue(percentWidth,"%"));
    if (mapHad50Percent()){
      $('#map-checker-button--return').css("display","block");
    }
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
  return value+10;
}

function decreaseValue(transformValue){
  return transformValue-10;
}

function mapHad100Percent(percentValue){
  return percentValue >= 100;
}
function mapHad50Percent(percentValue){
  return percentValue => 50;
}

function transformIsEqual0(value){
   return value >= 0;
}

function transformAddressContainer(transformValue){
  if (transformIsEqual100(transformValue)){
    return;
  }
  let newValue = decreaseValue(transformValue);
  $('#address').data("transform",newValue);
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

function backAddress(){
  console.log('HALO');
  let element = $('#address');
  console.log(element.data());
  if (transformIsEqual0(element.data("transform"))){
    return;
  }
  let newValue = increaseValue(element.data("transform"));
  element.css("transform","translateX(" + newValue + "%)");
  element.data("transform",newValue);
  window.requestAnimationFrame(()=>this.backAddress())
}
