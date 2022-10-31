// function wih parameter


function average(x, y) {
    return (x + y)
  }
  const a = average(10, -4)     // 3
  const b = average(2.5, 8)     // 5.25
  console.log(a)
  console.log(b)

// function triple example me ham ek value ko return me teen war likh kar uske output batayenge

function triple(x){
    return(x + x + x )
}
const aa = triple(2)
console.log(aa)
const bb = triple("i m ")
console.log(bb)


//even or odd ham isme modulus ka use kar ke even or add bta rahe hai
function even(x){
    return (x % 2 == 0)
}
const cc = even(8)
console.log(cc)
// ye agar even hai to true ayega nhi to false even mtlab 2 se multipe number se ex (2,4 ,6 ,8,10)

//odd
function odd(x){
    return (x % 2 != 0)
}
const dd = odd(3)
console.log(dd)
//ye agar odd hai to true ayega nhi to false odd ka matlab1 se multiple number ex (1 , 3 ,5, 7 ,9 ,11)



//loops

//while loop 
//rule -> init - (condition - increment or decremenrt)

var ee = 1
while(ee <= 10){
 console.log("this is while loop" + "<br>")

 ee++
}

//do-while loop
//rule -> (init - increment or decrement - condition)
var ff = 1 
do{
    console.log("this is do-while loop")
 ff++
}while(ff <= 10)

//for-loop
//rules -> (these are in one line like this (init - condition - increment or decrement))

for(var gg = 1 ; gg <= 10 ; gg++ ){
    console.log("this is foor loop")
}



//create a value thar take two value and retrn their sum into another variable and then cheak wheater number is odd or even 

function task(val_1,val_2){
    return val_1 +val_2
}
const aaa = task(2, 1)

if(aaa % 2 == 0){
    console.log("this is even")
}else{
    console.log("this is odd")
}