var hoursOfOpp = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:', 'Totals'];
var locationAry = [];
var appendRows = document.getElementById('storeData');
var appendHead = document.getElementById('storeHours');

var storeLocation = function(locationName, minCust, maxCust, aveCookiePerSale){
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookiePerSale = aveCookiePerSale;
  this.cookiesPerHourAry = [];
  this.totalCookies = 0;
  this.custPerHour = function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.cookiesPerHour = function() {
    // total cookies per hour
    for(var i = 0; i < hoursOfOpp.length; i++) {
      var cookiesHour = Math.floor(this.custPerHour() * this.aveCookiePerSale);
      this.cookiesPerHourAry.push(cookiesHour);
    }
    return this.cookiesPerHourAry;
  };
  this.cookiesPerDay = function() {
    this.cookiesPerHourAry = this.cookiesPerHour();
    for(var i = 0; i < this.cookiesPerHourAry.length; i++) {
      this.totalCookies += this.cookiesPerHourAry[i];
    }
    return this.cookiesPerHourAry;
  };
};

locationAry.push(new storeLocation('Pike Place Market', 17, 88, 5.2));
locationAry.push(new storeLocation('SeaTac Airport', 6, 24, 1,2));
locationAry.push(new storeLocation('Southcenter', 11, 38, 1.9));
locationAry.push(new storeLocation('Bellevue Square', 20, 48, 3.3));
locationAry.push(new storeLocation('Alki', 3, 24, 2.6));
console.log(locationAry);

function makeHeader (array){
  var tr = document.createElement('tr');
  var blankCell = document.createElement('th');
  tr.appendChild(blankCell);
  for (var i = 0; i < array.length; i++) {
    var th = document.createElement('th');
    th.textContent = array[i];
    tr.appendChild(th);}
  appendHead.appendChild(tr);
};

makeHeader(hoursOfOpp);

function makeStoreRows (store){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = store.locationName;
  tr.appendChild(th);
  for(var i = 0; i < store.cookiesPerHourAry.length - 1; i++){
    var td = document.createElement('td');
    td.textContent = store.cookiesPerHourAry[i];
    tr.appendChild(td);
  }
  var totalCell = document.createElement('td');
  totalCell.textContent = store.totalCookies;
  tr.appendChild(totalCell);
  appendRows.appendChild(tr);
}

function makeItWork(){
  for (var i = 0; i < locationAry.length; i++){
    locationAry[i].cookiesPerDay();
    makeStoreRows(locationAry[i]);
  }
}
makeItWork();
