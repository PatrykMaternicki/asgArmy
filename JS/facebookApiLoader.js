window.fbAsyncInit = function() {
  FB.init({
    appId            : '380395362390758',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.11'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementById("fbscript");
   console.log(fjs);
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

console.log(FB);
