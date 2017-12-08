
function Record(){
	this.city = "";
	this.street = "";
	this.attendUser = "";
	this.link = "";
	this.startTime = "";
	this.eventName = "";
}
window.fbAsyncInit = function() {
		    FB.init({
		      appId      : '380395362390758',
		      xfbml      : true,
		      version    : 'v2.5'
		    });
		    FB.getLoginStatus(function(response) {
		    	runFBApi();
		    });
		};
		(function(d, s, id){
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) {return;}
		    js = d.createElement(s); js.id = id;
		    js.src = "//connect.facebook.net/pl_PL/sdk.js";
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

    function runFBApi(){
      FB.api(
    "polskojaponska/events?fields=name,place,description,event_times,start_time,declined_count,attending_count,interested_countstart_time",
		"GET",
		{access_token:"380395362390758|079XWJHzxQwYQX9Kg1TfIDBJS4s"},
    function (response) {
      if (response && !response.error) {
        for (var i = 0; i < response.data.length; i++){
					var record = new Record();
					record.city = response.data[i].place.location.city;
				  record.street  = response.data[i].place.location.street;
					record.attendUser  = response.data[i].attending_count;
					record.link = "https://www.facebook.com/events/" + response.data[i].id;
					record.startTime = changeToObjectDate(response.data[i].start_time);
					record.eventName = response.data[i].name;
          dataComponent.recordArray.push(record);
        }
					combinetToView();

      }
    }
  );
    }

		// getting basic user info
		function getInfo() {
      pageInfo();
      getEventTimes();
		}
		function changeToObjectDate(stringDate){
			var date = new Date(stringDate);
			return date.toLocaleString("pl-PL", {month: "long", day:"numeric"});
		}
