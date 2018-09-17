// Factorial Function
// 6! = 6*5*4*3*2*1
// Doing it Recurisve-Terniary is the way to do it if you want to show off.
// Can also be done in a foor loop or while loop.
function fact(n){
	return n == 1? n: n*fact(n-1);
}


// What are the outputs of the below statements?

console.log(1<2<3); // True


console.log(3>2>1); 
// 3>2 will return true
// true > 1 will automatically false


console.log(2.0 == "2" == new Boolean(true) == 1);  // True, true = 1, and false = 0, in this case true is being evaluated with 1.

console.log(2.0 === "2" === new Boolean(true) === 1); // false, The === is checking if its the same type, none of theses are of the same type.


