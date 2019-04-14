'use strict';

var phone = document.getElementById('phone');

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
	phone.innerHTML = phone.innerHTML + "The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". <br><br>" ;
};

Phone.prototype.printPriceInfo = function() {
	if (this.price > 1500) {
		console.log("The phone is expensive");
	} else {
		console.log("The phone is cheap");
	};	
};

Phone.prototype.printSystemInfo = function() {
	if (this.brand === 'Aple') {
		console.log("The phone has an iOS operating system");
	} else {
		console.log("The phone has an Android operating system");
	};
};

var iPhone6S = new Phone("Aple", 2250, "gold");
iPhone6S.printInfo();
iPhone6S.printPriceInfo();
iPhone6S.printSystemInfo();

var SamsungGalaxyS6 = new Phone("Samsung", 1300, "silver");
SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.printPriceInfo();
SamsungGalaxyS6.printSystemInfo();

var Oneplus5 = new Phone("Oneplus", 1600, "black");
Oneplus5.printInfo();
Oneplus5.printPriceInfo();
Oneplus5.printSystemInfo();

var Nokia640 = new Phone("Microsoft", 500, "orange");
Nokia640.printInfo();
Nokia640.printPriceInfo();
Nokia640.printSystemInfo();