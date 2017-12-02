document.getElementById("hamburger-menu").addEventListener("click",activeMobileMenu);


function activeMobileMenu(){
  console.log("AHHHHH" + menuIsClose() + " " + mobileMenuIsOpen());

  if (menuIsClose() && !mobileMenuIsOpen()){
    openMenu();
    setDataMobileMenuIsOpen($("#mobile-menu"),true)
    return;
  }

  if (menuIsClose() && !mobileMenuIsOpen() ||
  mobileMenuIsOpen() == undefined || menuIsClose() == undefined
|| !menuIsClose() && !mobileMenuIsOpen()){
    transformLeft($("#mobile-event-wraper"),1);
    transformLeft($("#button-to-transformMobileAside"),1);
    rotateArrow(0);
    openMenu();
    setDataMobileMenuIsOpen($("#mobile-menu"),true);
    return;
  }
  if (mobileMenuIsOpen()){
    console.log("LOLOL");
    closeMenu();
    setDataMobileMenuIsOpen($("#mobile-menu"),false);
    return;
  }
}

function changeToMobileMenu(){
  resizeComponent($("#hamburger-menu"),{
    float: "inherit"
  });
  $("#mobile-menu").toggleClass("nav-list");
  $("#mobile-menu").toggleClass("nav-list--mobileMenu");
  $("#nav").toggleClass("nav");
  $("#nav").toggleClass("nav--fullWidth");
}

function openMenu(){
  resizeComponent($("#hamburger-menu"),{
    float: "inherit"
  });
  $("#nav").addClass("nav-fullWidth");
  $("#nav").removeClass("nav");
  $("#mobile-menu").addClass("nav-list--mobileMenu");
  $("#mobile-menu").removeClass("nav-list");
}

function closeMenu(){
  $("#nav").addClass("nav");
  $("#nav").removeClass("nav-fullWidth");
  $("#mobile-menu").addClass("nav-list");
  $("#mobile-menu").removeClass("nav-list--mobileMenu");
}
function resizeComponent(element,properties){
  setProperties(element,properties);
}

function setProperties (element,properties){
  for (const prop in properties){
    let fieldProperties = prop;
    let valueProperties = properties[prop];
    element.css(fieldProperties,valueProperties);
  }
}

function setDataMobileMenuIsOpen(element,boolean){
  element.data("mobile-menu-is-open",boolean);
}

function mobileMenuIsOpen(){
  return $("#mobile-menu").data("mobile-menu-is-open");
}
