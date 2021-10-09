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

function calculator (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
   
    
};

var starterPrice = Appetizer(1,2)

var maindishPrice = haupt(0,3)

var dessertPrice = dessert(0,0)

var beveragePrice = drinks(0,0)

calculator(starterPrice, maindishPrice, dessertPrice, beveragePrice);

function StuOrder(
    starterPrice, maindishPrice, dessertPrice, beveragePrice
) {

let studentbill = starterPrice + maindishPrice + dessertPrice + beveragePrice;
let discount = studentbill + (0.9)*studentbill + dessertPrice;
console.table("Receid after Stu.Discount="+studentbill.toFixed+"€")
return studentbill;
};