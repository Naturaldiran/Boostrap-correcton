// data types 

// var nam = 'adewale'
// string
//number
//boolean
//object and arrays
//function
//null
//symbol
var firstName = 'Adewale '
var age = 16


var isOnline = false
var brain = null
var $brain =''

var number = "false"
var school

console.log(typeof(school ))

// strings methods

console.log(firstName.length)
console.log(firstName[0]);

console.log(firstName.charAt(0));
var newFirstname=firstName.trim()
console.log(newFirstname.length)

// index

console.log(firstName.lastIndexOf('e'));
let sentence = 'Welcome to appclick'

console.log(sentence.indexOf('APPclick'.toLowerCase()));
console.log(sentence.toUpperCase())
// toLoweCase()

var ModifiedSentence = sentence.replace('Welcome', 'Go')
console.log(ModifiedSentence);

// string concatination 
console.log('my "name " is ' + firstName + " and i am \n" +age +" year's old")
//string interpolation

console.log(`my name is ${firstName} and i am ${age} year's old`)

// fav food fav car location use all to form a meaningful sensence 
//using string interpolation

var fav_food ='Amala'
var fav_car ='Benz'
var current_Location ='Ibadan'
console.log(`my favorite food is: ${fav_food} \n and i drive
     a ${fav_car} currently based in ${current_Location}`);

let password ='winner' 



// operators 
// arithmetic operators
// + addition
//  - subtraction
//  * multiplication
//  / division
// % floor division
//  ** exponential


var numberOne = 10
var numberTwo = 5
console.log(numberOne ** numberTwo)

var number3 =  5 
number3 = number3 +5

console.log(number3+=5)


var newNumber = 2
newNumber /= 2
// newNumber = newNumber+1
console.log(newNumber)


// comparison operators 
//===
console.log('5' === '5')


var number_one =2
var number_two = 3

// console.log(number_one || number_two === '3' )

console.log(!(number_two > number_one))
console.log(!true)

console.log(number_two++)

var age = 18.63728910

// age >= 18 ? console.log('You are eligible '):console.log('not eligible') 

console.log(Math.round(age))
console.log(age.toLocaleString())

console.log(Math.floor(3.142))


console.log(Math.random() *10)
console.log(Math.round(Math.random() *100))
console.log(Math.max(4,2,64));
console.log(Math.log10(30));
console.log(Math.pow(2,3));

console.log(Math.E)




// 64,32,40,25

// var Name =prompt('please enter your name !')
// alert("welcome "+ Name)

// 
var food = ['rice','Amala','Beans','plantain']
// console.log(food[1])
// console.log(food.length)
food.push('Salad')
console.log(food)

food.pop()
console.log(food)
// food.find('Amala',1)

food.shift()
console.log(food)
food.unshift('Spaghetti')
console.log(food)

var drinks =['coke','fanta','sprite','Baileys','Gulder','Azul','origin Beer']

// var addedData =food + drinks
// console.log(addedData)
// var addedData=food.concat(drinks)
console.log(drinks.slice(1,4))

// drinks.splice(2,1,'Guiness')
// drinks.splice(5,1)
drinks.splice(1,3,['pepper'])
console.log(drinks)

var goodFootballers =['Rashford','palmer',['Pirlo','Cafu',['Ronaldo','Messi']]]

console.log(goodFootballers[2][2][1]);
// goodFootballers.reverse()
// console.log(goodFootballers)


// console.log(goodFootballers.sort())
console.log(goodFootballers)


var arrays = ['a','b','f','Z','d','A']
console.log(arrays.sort())

// object is not indexed key and values

var array = []
var objects = {
     name: 'Ali',
     occupation: 'Developer',
     age: 18,
     isOnline: true,
     hobbies:['playing ball', 'cooking']
}

console.log(objects.hobbies[1],objects.age)

const date = new Date()

console.log(date.getMinutes())

var Seconds = date.getSeconds()
var Minutes = date.getMinutes()
var Hours = date.getHours()

console.log(`${Hours} : ${Minutes} : ${Seconds}`)
// console.log(Hours + ':' + Minutes + ':' + Seconds)

// conditionals
// if and else,switch operator
var age = 10
if(age > 18){
     console.log('you are eligible')

}else{
     console.log('you are not eligible')
}
// false '' 0 null undefined nan

//  admission score 180 and 18
// var scoree = prompt('enter your score')
// var age = prompt ('enter your age')

// if (score >= 180 && age >=18){
//      alert('you are eligible for admission')
// }
// else if(score >= 150 && age >16){
//      alert('privat school admission')
// }
// else if(age > 18 || score >180){
//      alert('colleg of education')
// }
// else{
//      alert('you are not eligible')
// }

// quiz app
// what is the capital of oyo state
// longest river in the world Nile

// var quiz1 = prompt ('what is the capital of oyo state')
// var quiz2= prompt ('longets river in the world')

// if(quiz1 == 'Ibadan'){
//      alert('3 makrs')
// }
// else if(quiz1==)

// const question_one = prompt('what is the capital of oyo state? ')
// var mark = 0
// if(question_one.toLowerCase() ==='ibadan'){
//      mark+=2
//      alert(`correct you have ${mark} marks`)
// }
// else{
//      alert('wrong answer')
// }
// const question_two = prompt('longest river in the world')
// if(question_two.toLowerCase()== 'nile'){
//      mark+=2
//      alert(`correct you have ${mark} marks`)
// }
// else{
//      alert('wrong answer')
// } 

// var temperature = prompt('temperature is below 0')

// if(temperature < 0 ){
//      alert('it is freezing')

//      var temperature = prompt('temperature between 0 and 15')
     
//      if (temperature <= 15 ){
          
//           alert('it is cold')
//      }

//      var temperature = prompt('temperature between 16 and 25')

//      if (temperature <=  25 ){
          
//           alert('it is warm')
//      }
//      var temperature = prompt('temperature is above 25')

//      if (temperature >= 25){
//           alert('it is hot')
//      }
// }


// var userName = 'Admin'
// var passWord = 'password123'

// console.log(`my username is ${userName} and password is ${passWord}`)


// var userName = prompt('userName')
// var passWord = prompt('passWord')


// if (userName == 'Admin' && passWord == 'password123'){
     
//      alert('Login successful')
     
// }
// else{
//      alert('invalid credentials')
// }



// var userName = prompt('Username')

// if (userName == userName && passWord){
     
//      alert('Login failed')
// }




// Write a block of code that defines a variable temperature and assigns it a numeric value. Use if and else statements to print:

// "It's freezing!" if the temperature is below 0°C.
// "It's cold!" if the temperature is between 0°C and 15°C.
// "It's warm!" if the temperature is between 16°C and 25°C.
// "It's hot!" if the temperature is above 25°C.



// Define a variable number and check whether it is even or odd using if and else. Print:

// "Even" if the number is even.
// "Odd" if the number is odd.


// Create a block of code that defines username and password variables. Use conditionals to check if the username is "admin" and the password is "password123" and print:

// "Login successful!" if both are correct.
// "Login failed! Invalid credentials." otherwise.


// var  temperature =prompt('what is the current temperature ?')

// if(temperature < 0){
//      alert("It's freezing!")
// }
// else if(temperature >= 0 && temperature <= 15){
//      alert("It's cold!")
// }
// else if(temperature>= 16 && temperature<=25){
//      alert("It's warm!" )
// }
// else{
//      alert("It's hot!")
// }



// var number = prompt('enter a number ')

// // console.log(3%2)

// if(number % 2 == 0){
//      alert('this is even')
// }
// else{
//      alert('number is odd')
// }


// var userName = 'appclick'
// var passkey ='admin123'

// var inputUserName = prompt('what is the username? ')
// var inputPasskey = prompt('enter passkey?')



// if(inputUserName.trim().toLowerCase() == userName && inputPasskey.trim().toLowerCase() == passkey ){
//      alert('Login successful')
// }
// else{
//      alert('invalid credential ')
// }

// password must be 8 and above must have @


var passkey = prompt('enter password')

// password validation
// if(passkey.length <= 8){
//      alert('password must be more than 8 characters')
// }
// else if (!passkey.includes('@') ){
// alert('passkey must have @')
// }

// regex
// Minimum eight characters, at least one letter, one number and one special character:
const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

if(!regex.test(passkey)){
     alert('passkey must have Minimum eight characters, at least one letter, one number and one special character')
}
else{
     alert('successful')
}

// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a



