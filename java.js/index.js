var apt = new Array;
apt = [3.5,5,6.30,8.7];

var main = new Array;
main =[4,6.3,8.4,7.8];

var dsrt = new Array;
dsrt = [5,6,3,5.5]

var bvrgs = new Array;
bvrgs = [1.5,2,7.5,9.3]

function Appetizer(a,b,c,d) {
    return a*apt[0] + b*apt[1] + c*apt[2] + d*apt[3]
};

function haupt (a,b,c,d){
    return a*main[0] + b*main[1] + c*main[2] + d*main[3]
};

function dessert (a,b,c,d) {
    return a*dsrt[0] + b*dsrt[1] + c*dsrt[2] + d*dsrt[3]
};

function drinks (a,b,c,d){
    return a*bvrgs[0] + b*bvrgs[1] + c*bvrgs[2] + d*bvrgs[3]
};


function calculateInvoice (starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    let invoice1 = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    console.table("Receide Calculation ="+invoice1.toFixed(2)+"€");
    
};

var starterPrice = Appetizer(0,0,0,1)

var maindishPrice = haupt(0,0,1,0)

var dessertPrice = dessert(0,0,0,1)

var beveragePrice= drinks(0,0,0,1)

calculateInvoice (starterPrice,maindishPrice,dessertPrice,beveragePrice);

/* this function below calculates the student (tabel) order */
function calculatorstu (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let studentbill = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    let discount = studentbill - (0.1)*studentbill + dessertPrice;
    console.table("Receide after 10% Uni-Discount=" + discount.toFixed(2) + "€");
    return discount;
};

var starterPrice = Appetizer(1,2,0,0)

var maindishPrice = haupt(0,3,0,0)

var dessertPrice = dessert(0,0,0,0)

var beveragePrice = drinks(2,0,1,0)

calculatorstu (starterPrice, maindishPrice, dessertPrice, beveragePrice);

/* in this calulation my uncle came to visit my store with the fam. :) */
function viporder (starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    let jafer = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    console.table("Receide ="+jafer.toFixed(2)+"€");
    
};

var starterPrice = Appetizer(4,0,0,2)

var maindishPrice = haupt(1,3,2,0)

var dessertPrice = dessert(2,2,1,1)

var beveragePrice= drinks(0,2,0,4)

viporder (starterPrice,maindishPrice,dessertPrice,beveragePrice);


/* one more calculation for a imaginary drive in */
function ToGo (starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    let driveIn = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    console.table("To go, receide ="+driveIn.toFixed(2)+"€");
    
};

var starterPrice = Appetizer(1,0,1,0)

var maindishPrice = haupt(0,0,1,0)

var dessertPrice = dessert(1,0,1,0)

var beveragePrice= drinks(1,2,0,1)

ToGo (starterPrice,maindishPrice,dessertPrice,beveragePrice);


