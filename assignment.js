
// https://github.com/rashed-ctrl/assignment.js

// Kilometer To Meter start
function kilometerToMeter(kiloMeter){
    var Meter = kiloMeter*1000;
    return Meter;
}
var myKilometer = 10;
var myMeter = kilometerToMeter(myKilometer);
console.log(myMeter);
//kilometer to Meter end


//Budget Catculate Start
function budgetCalculator (watch, phone, laptop){
    var watch = (watch)* 50;
    var phone = (phone)* 100;
    var laptop = (laptop)* 500;
    var total = watch + phone + laptop;
    return total;
}
var budgetTotal = budgetCalculator(4, 2,1);
console.log(budgetTotal);
//Budget Catculate end



// Hotel Cost Start
function hotelCost(days){
var totalCost =0;
if(days<=10){
    totalCost = days * 100; 
}
else if (days <=20){
    firstTenDays = 10 * 100;
    var remaining = days - 10;
    var secondTenDays = remaining * 80; 
    totalCost = firstTenDays + secondTenDays;
}
else{
    var firstTenDays = 10*100;
    var secondTenDays= 10*80;
    var remaining = days - 20;
    var afterdays = remaining * 50;
    totalCost = firstTenDays + secondTenDays + afterdays;
}
return totalCost;
}
var result = hotelCost(19);
console.log(result);
//Hotel Cost End 




// Mega Friend Start
var megaFriend = ["Ayatullah", "Ashraf", "Arafat","AlAminHabib", "ImtiazRyan", "Rakibul"];
var lenght = 0;
var largest;
for (var i = 0; i < megaFriend.length; i++) {
  if (megaFriend[i].length > lenght) {
    var lenght = megaFriend[i].length;
    largest = megaFriend[i];
  }
}

console.log(largest);
//Mega Friend End