document.getElementById("hamburger-menu").addEventListener("click",activeMobileMenu);


function activeMobileMenu(){
  resizeComponent($("#hamburger-menu"),{
    float: "inherit"
  });
  resizeComponent($("#mobile-menu"), {
    width: "100%",
    margin: "auto",
    display: "block",
    padding: "0"
  });
  resizeComponent($("#nav"),{
    width: "100%"
  })
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
