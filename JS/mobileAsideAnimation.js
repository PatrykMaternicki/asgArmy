document.getElementById('button-to-transformMobileAside').addEventListener ('click',(e)=>{this.animateAside(e);})

function animateAside(e){
  console.log($("#aside-container").data());
  if (menuIsClose()){
    transformRight($("#mobile-event-wraper"));
    transformRight($("#button-to-transformMobileAside"));
    recoveryArrow();
  }
  else{
    transformLeft($("#mobile-event-wraper"),1);
    transformLeft($("#button-to-transformMobileAside"),1);
    rotateArrow(0);
  }

}

function recoveryArrow(){
  let rotateValue  = $("#arrow").data("rotate-value") - 10;
  $("#arrow").data("rotate-value",rotateValue);
  $("#arrow").css("transform","rotate(" + rotateValue + "deg)");
  if (isEqual0(rotateValue)){
    return;
  }
  window.requestAnimationFrame(()=>{this.recoveryArrow()})
}

function rotateArrow(value){
  let newValue = value + 10;
    $("#arrow").css("transform","rotate(" + newValue + "deg" + ")");
  if (newValue >= 180){
    $("#arrow").data("rotate-value",newValue);
    return;
  }

  window.requestAnimationFrame(()=>{this.rotateArrow(newValue)});

}

function transformRight(element){
  if (elementHaveId(element,"button-to-transformMobileAside") && !animationFrameWasVisisted(element)){
    returnToStateCloseMenu(element);
  }
 let value = element.data("transform-value");
 console.log(value);
 let newValue = decreaseValue(value);
 element.data("transform-value",newValue);
 element.css("transform","translateX(" + newValue  + "%" +")");
 console.log(element[0]);
 if (isEqual0(newValue)){
   element.css("transform","translateX(" + 0  + "%" +")");
   recoverySizeProperties();
   return;
 }
 window.requestAnimationFrame(()=>{this.transformRight(element)});
}


function transformLeft(element,value){
value = value+10;
element.css("transform","translateX(" + value  + "%" +")");
  if (value >= 100){
    element.data("transform-value",value);
     if (elementHaveId(element,"button-to-transformMobileAside")){
       console.log("Hello");
       fixPosition(element);
       removeSizeProperties();
       return;
     }
    return;
  }
  window.requestAnimationFrame(()=>{this.transformLeft(element,value)});
}


function recoverySizeProperties(){
  $("#aside-container").css("width","");
  $("#aside-container").css("height","");
  $("#aside-container").data("menu-close",false);
}
function removeSizeProperties(){
  $("#aside-container").css("width","auto");
  $("#aside-container").css("height","0");
  $("#aside-container").data("menu-close",true);
}
function returnToStateCloseMenu (element){
  console.log("CHYBA NIE WCHODZI");
  element.removeAttr("style");
  element.data("is-visited",true);
  let setValue = element.data("transform-value");
  console.log(element.data("transform-value"));
  element.css("transform","translateX(" +  setValue + "%" +")");
  $("#text-button").css("display","");
}
function fixPosition(element){
  element.data("is-visited",false);
  element.css("position","fixed");
  element.css("top","0");
  element.css("right","0");
  element.css("transform","translateX(" + 0  + "%" +")");
  $("#text-button").css("display","none");
}
function isEqual100(value){
  return value => 100;
}

function isEqual0(newValue){
  return newValue <= 0;
}

function menuIsClose(){
  return $("#aside-container").data("menu-close");
}

function decreaseValue(value){
  return value - 10;
}
function elementHaveId(element,exceptedId){
  return element.attr("id") == exceptedId;
}

function animationFrameWasVisisted(element){
  return element.data("is-visisted") == true;
}
