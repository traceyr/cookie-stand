//this is where the js will be
var hoursOfOpp = ['10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:'];
var locationAry = [];
var cookiesPerHourAry = [];

var pikePlace = {
  minCust: 17,
  maxCust: 88,
  aveCookiePerSale: 5.2,
  locationName: 'Pikes Place Market',
  custPerHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHourAndDay: function() {
    var totalCookies = 0;
    // total cookies per hour
    for(var i = 0; i < hoursOfOpp.length; i++) {
      var cookiesHour = Math.floor(this.custPerHour() * this.aveCookiePerSale);
      cookiesPerHourAry.push([hoursOfOpp[i], cookiesHour]);
    }
    // total cookies per day
    for(var i = 0; i < cookiesPerHourAry.length; i++) {
      totalCookies += cookiesPerHourAry[i][1];
    }
    cookiesPerHourAry.push(['Total:', totalCookies]);
  // taking the multidemenional array and concatenating to make one array
    for (var i = 0; i < cookiesPerHourAry.length; i++) {
      cookiesPerHourAry[i] = cookiesPerHourAry[i][0] + ' ' + cookiesPerHourAry[i][1];
    }
    // console.log(this.cookiesPerHourAry);
    return cookiesPerHourAry;
  },
};

locationAry.push(pikePlace);

var pikeName = document.getElementById('pike-place');
pikeName.textContent = pikePlace.locationName;
var pikeData = document.getElementById('pike-place-info');
pikeData.textContent = pikePlace.cookiesPerHourAndDay();
console.log(cookiesPerHourAry);
for (var i = 0; i < cookiesPerHourAry.length; i++) {
  var newEl = document.createElement('li');
  var newEltwo = pikeData.appendChild(newEl);
  newEltwo.textContent = pikePlace.cookiesPerHourAndDay;
}

// for (var i = 0; i < locationAry.length; i++) {
//   var elName = document.getElementsByClassName('location-name');
//   elName.textContent = locationAry[i].locationName;
// }
