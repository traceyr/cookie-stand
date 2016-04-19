var hoursOfOpp = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
var locationAry = [];

var pikePlace = {
  cookiesPerHourAry: [],
  minCust: 17,
  maxCust: 88,
  aveCookiePerSale: 5.2,
  locationName: 'Pikes Place Market',
  custPerHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    // total cookies per hour
    for(var i = 0; i < hoursOfOpp.length; i++) {
      var cookiesHour = Math.floor(this.custPerHour() * this.aveCookiePerSale);
      this.cookiesPerHourAry.push([hoursOfOpp[i], cookiesHour]);
    }
    return this.cookiesPerHourAry;
  },
  cookiesPerDay: function() {
    var totalCookies = 0;
    this.cookiesPerHourAry = this.cookiesPerHour();
    for(var i = 0; i < this.cookiesPerHourAry.length; i++) {
      totalCookies += this.cookiesPerHourAry[i][1];
    }
    // console.log(totalCookies)
    this.cookiesPerHourAry.push(['Total:', totalCookies]);
  // taking the multidemenional array and concatenating to make one array
    for (var i = 0; i < this.cookiesPerHourAry.length; i++) {
      this.cookiesPerHourAry[i] = this.cookiesPerHourAry[i][0] + ' ' + this.cookiesPerHourAry[i][1] + ' cookies';
    }
    // console.log(this.cookiesPerHourAry);
    return this.cookiesPerHourAry;
  },
};

var seaTac = {
  cookiesPerHourAry: [],
  minCust: 6,
  maxCust: 24,
  aveCookiePerSale: 1.2,
  locationName: 'SeaTac Airport',
  custPerHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    // total cookies per hour
    for(var i = 0; i < hoursOfOpp.length; i++) {
      var cookiesHour = Math.floor(this.custPerHour() * this.aveCookiePerSale);
      this.cookiesPerHourAry.push([hoursOfOpp[i], cookiesHour]);
    }
    return this.cookiesPerHourAry;
  },
  cookiesPerDay: function() {
    var totalCookies = 0;
    this.cookiesPerHourAry = this.cookiesPerHour();
    for(var i = 0; i < this.cookiesPerHourAry.length; i++) {
      totalCookies += this.cookiesPerHourAry[i][1];
    }
    // console.log(totalCookies)
    this.cookiesPerHourAry.push(['Total:', totalCookies]);
  // taking the multidemenional array and concatenating to make one array
    for (var i = 0; i < this.cookiesPerHourAry.length; i++) {
      this.cookiesPerHourAry[i] = this.cookiesPerHourAry[i][0] + ' ' + this.cookiesPerHourAry[i][1] + ' cookies';
    }
    // console.log(this.cookiesPerHourAry);
    return this.cookiesPerHourAry;
  },
};

var southcenter = {
  cookiesPerHourAry: [],
  minCust: 11,
  maxCust: 38,
  aveCookiePerSale: 1.9,
  locationName: 'Southcenter',
  custPerHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    // total cookies per hour
    for(var i = 0; i < hoursOfOpp.length; i++) {
      var cookiesHour = Math.floor(this.custPerHour() * this.aveCookiePerSale);
      this.cookiesPerHourAry.push([hoursOfOpp[i], cookiesHour]);
    }
    return this.cookiesPerHourAry;
  },
  cookiesPerDay: function() {
    var totalCookies = 0;
    this.cookiesPerHourAry = this.cookiesPerHour();
    for(var i = 0; i < this.cookiesPerHourAry.length; i++) {
      totalCookies += this.cookiesPerHourAry[i][1];
    }
    // console.log(totalCookies)
    this.cookiesPerHourAry.push(['Total:', totalCookies]);
  // taking the multidemenional array and concatenating to make one array
    for (var i = 0; i < this.cookiesPerHourAry.length; i++) {
      this.cookiesPerHourAry[i] = this.cookiesPerHourAry[i][0] + ' ' + this.cookiesPerHourAry[i][1] + ' cookies';
    }
    // console.log(this.cookiesPerHourAry);
    return this.cookiesPerHourAry;
  },
};

var bellevueSquare = {
  cookiesPerHourAry: [],
  minCust: 20,
  maxCust: 48,
  aveCookiePerSale: 3.3,
  locationName: 'Bellevue Square',
  custPerHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    // total cookies per hour
    for(var i = 0; i < hoursOfOpp.length; i++) {
      var cookiesHour = Math.floor(this.custPerHour() * this.aveCookiePerSale);
      this.cookiesPerHourAry.push([hoursOfOpp[i], cookiesHour]);
    }
    return this.cookiesPerHourAry;
  },
  cookiesPerDay: function() {
    var totalCookies = 0;
    this.cookiesPerHourAry = this.cookiesPerHour();
    for(var i = 0; i < this.cookiesPerHourAry.length; i++) {
      totalCookies += this.cookiesPerHourAry[i][1];
    }
    // console.log(totalCookies)
    this.cookiesPerHourAry.push(['Total:', totalCookies]);
  // taking the multidemenional array and concatenating to make one array
    for (var i = 0; i < this.cookiesPerHourAry.length; i++) {
      this.cookiesPerHourAry[i] = this.cookiesPerHourAry[i][0] + ' ' + this.cookiesPerHourAry[i][1] + ' cookies';
    }
    // console.log(this.cookiesPerHourAry);
    return this.cookiesPerHourAry;
  },
};

var alki = {
  cookiesPerHourAry: [],
  minCust: 3,
  maxCust: 24,
  aveCookiePerSale: 2.6,
  locationName: 'Alki',
  custPerHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesPerHour: function() {
    // total cookies per hour
    for(var i = 0; i < hoursOfOpp.length; i++) {
      var cookiesHour = Math.floor(this.custPerHour() * this.aveCookiePerSale);
      this.cookiesPerHourAry.push([hoursOfOpp[i], cookiesHour]);
    }
    return this.cookiesPerHourAry;
  },
  cookiesPerDay: function() {
    var totalCookies = 0;
    this.cookiesPerHourAry = this.cookiesPerHour();
    for(var i = 0; i < this.cookiesPerHourAry.length; i++) {
      totalCookies += this.cookiesPerHourAry[i][1];
    }
    // console.log(totalCookies)
    this.cookiesPerHourAry.push(['Total:', totalCookies]);
  // taking the multidemenional array and concatenating to make one array
    for (var i = 0; i < this.cookiesPerHourAry.length; i++) {
      this.cookiesPerHourAry[i] = this.cookiesPerHourAry[i][0] + ' ' + this.cookiesPerHourAry[i][1] + ' cookies';
    }
    // console.log(this.cookiesPerHourAry);
    return this.cookiesPerHourAry;
  },
};

locationAry.push(pikePlace);
locationAry.push(seaTac);
locationAry.push(southcenter);
locationAry.push(bellevueSquare);
locationAry.push(alki);

for (var i = 0; i < locationAry.length; i++) {
  console.log(i);
  var elName = document.getElementsByClassName('location-name')[i];
  console.log(elName);
  console.log(locationAry[i].locationName);
  elName.textContent = locationAry[i].locationName;

  var elData = document.getElementsByClassName('location-data')[i];
  var callingArray = locationAry[i].cookiesPerDay();
  for(var j = 0; j < callingArray.length; j++) {
    var newEl = document.createElement('li');
    var newEltwo = elData.appendChild(newEl);
    newEltwo.textContent = callingArray[j];
  }
}
