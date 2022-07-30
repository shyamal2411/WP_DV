var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount Percentage is: " + discountPercentage);

displaydiscountPercentage = Math.round(discountPercentage);

console.log("Discount Percentage is: " + displaydiscountPercentage);

var result = listingPrice > sellingPrice;

console.log(typeof result);