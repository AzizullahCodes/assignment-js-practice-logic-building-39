/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________
 Reverse Countdown from 10 to 1
Question:
Use a for loop to print numbers from 10 to 1.
*/
/*________________________ Answer ____________________________________ */
// function looping(){let result = '';
//     for(let i = 10; i>=1 ; i--){result = result + i + '<br>'}
//     document.getElementById('myDiv').innerHTML = result;
// }

/*_______________________________  Question no 2 ____________________________________
 Print Each Character of a String
Question:
Use a for loop to print each character in the string "JavaScript".
*/
/*________________________ Answer ____________________________________ */
// function looping(){let result = '';
//     let str = 'JavaScript';
//     for(let i = 0; i <str.length ; i++){result = result + str[i] + '<br>'}
//     document.getElementById('myDiv').innerHTML = result;
// }

/*_______________________________  Question no 3 ____________________________________
Print a Square of Stars
Question: Use nested for loops to print a 4x4 square of stars.

✅ Expected Output:

* * * *
* * * *
* * * *
* * * *
/*________________________ Answer ____________________________________ */
// function looping(){let pattern = '';
//     for(let i = 1 ; i <=4; i++){
//         for ( let j = 1 ; j <=4; j++){console.log(pattern = pattern + '*')}
//     pattern = pattern + '<br>'}
// }
// function looping() {
//   let output = "";

//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       output += "* ";
//     }
//     output += "<br>"; // new line after each row
//   }

//   document.getElementById("myDiv").innerHTML = output;
// }

/*_______________________________  Question no 4 ____________________________________
print a Right-Angled Triangle of Stars
Question: Use nested loops to print a triangle with 5 rows.

✅ Expected Output:

*
* *
* * *
* * * *
* * * * *
*/
/*________________________ Answer ____________________________________ */
// function looping(){let pattern = '';
//     for(let i = 0 ; i <= 5; i++){for(let j = 0 ; j <i; j++)
//     {pattern = pattern + '*';}
//     pattern = pattern +  '<br>';

//     }
//     document.getElementById('myDiv').innerHTML = pattern;
// }

/*_______________________________  Question no 5 ____________________________________
Multiplication Table (1 to 5)
Question: Print multiplication tables from 1 to 5 using nested loops.

✅ Expected Output (sample):

1 x 1 = 1
1 x 2 = 2
...
5 x 10 = 50
*/
/*________________________ Answer ____________________________________ */
// function looping(){let table = '';
//     for(let i = 1; i <=5; i++){
//         for(let j = 1; j <= 10; j++){table = table + i+ '*' + j + '='+ i * j + '<br>'}
//         table = table + '<br>'
//     }
//     document.getElementById('myDiv').innerHTML = table;
// }
/*_______________________________  Question no 6 ____________________________________
 Create a Simple Object
Question:
Create an object named student with properties:
name: "Ali"
age: 20
class: "10th"

Expected Output:
Print the object. Output should look like:

{name: "Ali", age: 20, class: "10th"}
*/
/*________________________ Answer ____________________________________ */
// let student = {name : 'Ali',
//     age : 20,
//     class: '10th',
// }
// console.log(student)
/*_______________________________  Question no 7 ____________________________________
 Access Object Properties
Question:
Use the object student from Task 1 and print only the student's name and class.

Expected Output:

Ali  
10th

*/
/*________________________ Answer ____________________________________ */
// let student = {name : 'ali',
//     age : 20,
//     class : '10th'
// }
// console.log(student.name);
// console.log(student.class);

/*_______________________________  Question no 8 ____________________________________
Add a New Property
Question:
Add a new property to the student object:
city: "Lahore"
Then print the updated object.

Expected Output:

{name: "Ali", age: 20, class: "10th", city: "Lahore"}
*/
/*________________________ Answer ____________________________________ */
// let student = {name : 'aziz',
//     age : 20,
//     class : '10th',

// }
// console.log(student);
// // student.city = 'Lahore';
// // console.log(student);
// // student.age = 21;
// // console.log(student);
// // let check = student.hasOwnProperty('namer')
// // console.log(check)
// for(let keyu in student){console.log(keyu+ ': ' + student[keyu])}

/*_______________________________  Question no 9 ____________________________________
array in object
________________________ Answer ____________________________________ */
// let carDetail = {model : 'Gli',
//     year : 2023,
//     color : 'red', 
//     qualities : ['speedy','protected','attractive']
// }
// console.log(carDetail);
// console.log(carDetail.qualities[1] )

/*_______________________________  Question no 10 ____________________________________
another object inside an object
/*________________________ Answer ____________________________________ */
// let countryDetail = {name : 'Pakistan',
//     founderName : 'Quaid',
//     provinces : 4,
//     punjab : {disricts : 40, 
//         tehsils : 160,
//         division : 20,
//     }
// }
// console.log(countryDetail.punjab.division)

/*_______________________________  Question no 11 ____________________________________
 Age & Qualification Check
Question:
Ask the user for their age and qualification.
If age is 18 or above, then check if qualification is "matric" or higher.
If both are true, show "Eligible", otherwise "Not eligible".

Expected Input & Output:

age = 20
qualification = matric
Output: Eligible

/*________________________ Answer ____________________________________ */

// function checking() {
//     let getAge = document.getElementById('it1').value;
//     let getQualification = document.getElementById('it2').value; // fixed here

//     if (getAge >= 18) {
//         if (getQualification === 'matric') {
//             document.getElementById('p1').innerHTML = 'eligible';
//         } else {
//             document.getElementById('p1').innerHTML = 'not eligible';
//         }
//     } else {
//         document.getElementById('p1').innerHTML = 'not eligible';
//     }
// }


/*_______________________________  Question no 12 ____________________________________

Weather Suggestion
Question:
Ask the user to enter the temperature and whether it’s raining (yes/no).
If the temperature is below 20, then check if it's raining.
If both are true, suggest "Take an umbrella and wear warm clothes".
Expected Output (example):
temperature = 15
raining = yes
Output: Take an umbrella and wear warm clothes
/*________________________ Answer ____________________________________ */
// function checking(){let getTemperature = document.getElementById('it1').value;
//     let getWeather = document.getElementById('it2').value;
//     getWeather = getWeather.toLowerCase();
//     if(getTemperature < 20){if(getWeather === 'yes'){document.getElementById('p1').innerHTML = 'Take an umberella and wear warm clothes'}
// else{document.getElementById('it is not raining weather is good')}}
//     else{document.getElementById('p1').innerHTML = 'weather condition is good'}

// }

/*_______________________________  Question no 13 ____________________________________

City & Gender Based Greeting
Question:
Ask the user for city name and gender.
If city is "karachi" then:

if gender is "male" → "Welcome Sir"

if gender is "female" → "Welcome Ma'am"
Else show "Only for Karachi citizens".
Expected Output:
city = karachi, gender = female → Welcome Ma'am  
city = lahore → Only for Karachi citizens
/*________________________ Answer ____________________________________ */
// function greeting(){let getCityName = document.getElementById('it1').value;
//     let getGender = document.getElementById('it2').value;

//     if(getCityName.toLowerCase() === 'karachi'){if(getGender.toLowerCase() === 'male'){document.getElementById('p1').innerHTML = 'welcome sir'}

// else if(getGender.toLowerCase() === 'female'){document.getElementById('p1').innerHTML = 'welcome mem'}

// else{document.getElementById('p1').innerHTML = 'input correct gender'}}

//     else{document.getElementById('p1').innerHTML = 'only for karachi citizens'}
// }


/*_______________________________  Question no 14 ____________________________________
Ask the user to enter their age using prompt().
If age is 18 or more, output true. Otherwise, output false.
Expected Output:
If user enters 20 → true
If user enters 16 → false
/*________________________ Answer ____________________________________ */
// let age = prompt('enter your age');
// let flage = true;
// if(age >= 18){flage = true;
//     console.log('true')
// }
// else{console.log('false')}

/*_______________________________  Question no 15 ____________________________________

boolean 
/*________________________ Answer ____________________________________ */
// let age = prompt('enter your age');
// age = Number(age);
// let isAdult = age >= 18;
// if(isAdult){console.log('you are an adult')}
// else{console.log('you are not an adult')}
/*_______________________________  Question no 16 ____________________________________
Check if user is adult
🔸 Question:
Ask the user to enter their age using prompt().
Then check if the age is 18 or older.
Print true if yes, otherwise print false.
🔸 Example:
If user enters 20 → Output should be:
true
If user enters 16 → Output should be:
false
*/
/*________________________ Answer ____________________________________ */
// let age = prompt('enter your age');
// let isRequired = age >= 18;
// if(isRequired){console.log('true')}
// else{console.log('false')}

/*_______________________________  Question no 17 ____________________________________
Login check
Question:
Let username = "admin" and password = "1234"
Ask the user to enter a username and password.
Check if both match, and return true or false.

Expected Output:
If input is correct → true
Otherwise → false

/*________________________ Answer ____________________________________ */
// function bool(){let getUserName = document.getElementById('it1').value;
    
//     let getPassword = document.getElementById('it2').value;
//     let isTrue = getUserName.toLowerCase() === 'admin';
//     let isPassword = getPassword === '1234';
//     if(isTrue){if(isPassword){document.getElementById('p1').innerHTML = 'true'}
// else{document.getElementById('p1').innerHTML = 'passwored false'}}
//     else{document.getElementById('p1').innerHTML = 'false'}
// }


/*_______________________________  Question no 18 ____________________________________

push data to array by function by input dom
/*________________________ Answer ____________________________________ */
// let array = [];
// function addData(){let get = document.getElementById('it').value;
//     if(get){array.push(get);
//         document.getElementById('result').innerHTML = array.join(', ');
//         document.getElementById('it').value = '';
//     }
// }
/*_______________________________  Question no 19 ____________________________________

data push to array by function
/*________________________ Answer ____________________________________ */
// let array = [];
// function addData(){let getData = document.getElementById('it').value;
//     if(getData){array.push(getData);
//         document.getElementById('result').innerHTML = array.join(', ');
//         document.getElementById('it').value = '';
//         document.getElementById('it').focus();
//     }
// }

/*_______________________________  Question no 20 ____________________________________

object inside an array
/*________________________ Answer ____________________________________ */
// let details = [
// {id : 1,
//     name : 'aziz',
//     age : 23
// },

// {id : 2,
//     name : 'Hbib',
//     age : 33
// },

// {id : 3,
//     name : 'Rsheed',
//     age : 43
// },

// {id : 4,
//     name : 'jamshaid',
//     age : 54
// }

// ]
// console.log(details);
// for(let i = 0; i<details.length; i++){console.log(details[i].name)}

/*_______________________________  Question no 21 ____________________________________
function in an object
/*________________________ Answer ____________________________________ */
// var employee = {designation : 'Graphic Designer',
//   gender : 'male',
//   skills :['adobe','photoshop'],
//   intro : function(){console.log('my name is john and i am working in codeAlpha company')}

// }
// console.log(employee)
// employee.intro()




/*_______________________________  Question no 22 ____________________________________

Anonymous function
/*________________________ Answer ____________________________________ */

// let greet = function(){console.log('Hello! in javascript')}
// greet()
/*_______________________________  Question no 23 ____________________________________

 Create and Print an Object
Question:
Create an object called student with the following properties:

name (string)

age (number)

grade (string)
/*________________________ Answer ____________________________________ */
// let student = {name : 'Aziz',
//   age : 23,
//   grade : 'A'
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.grade)

/*_______________________________  Question no 24 ____________________________________
Add New Property to Object
Question:
Create an object car with brand and model. Then add a new property color and assign a value.

Expected Output:
Show the full object before and after adding the new property.

Before: { brand: "Toyota", model: "Corolla" }  
After: { brand: "Toyota", model: "Corolla", color: "White" }
/*________________________ Answer ____________________________________ */
// let car = {brand : 'Toyota',
//   model : 2024
// }
// car.color = 'black';
// console.log(car)

/*_______________________________  Question no 25 ____________________________________
Change a Value in Object
Question:
Create an object book with title, author, and year. Then change the year value.

Expected Output:
Before: year = old value
After: year = new value
/*________________________ Answer ____________________________________ */
// let book = {title : 'Islam',
//   author : 'Iqbal',
//   year : 2023
// }
// console.log(book);
// book.year = '1990'
// console.log(book)


/*_______________________________  Question no 26 ____________________________________
 Object with Array Value
Question:
Create an object person with a property hobbies that is an array with 3 values.
Expected Output:
Access and print the second hobby.
Example:
Second Hobby: Reading
/*________________________ Answer ____________________________________ */
// let person = {hobbies:['reading','playing','driving']}
// console.log(person.hobbies[1])

/*_______________________________  Question no 27 ____________________________________
 Object Inside Array
Question:
Create an array of 2 objects. Each object should represent a product with name and price.
Expected Output:
Print the name and price of each product.

Product 1: Apple - 100  
Product 2: Banana - 40

/*________________________ Answer ____________________________________ */
let objectInsideArray = [{name : 'Apple',
  price : 200
},
  {name :'Banana',
    price : 200
  }
]

for(let i = 0; i< objectInsideArray.length; i++){console.log(objectInsideArray[i].name + ': ' + objectInsideArray[i].price)}
/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/


/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/


/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/


/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/


/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/


/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/


/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/


/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/




/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/



/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */


/*___________________________________________________________________________________*/


/*===========================================================================*/
/*_______________________________  Question no 1 ____________________________________

*/
/*________________________ Answer ____________________________________ */
// var bykeObj = { vehicleName : 'bike',
//     cc : 70,
//     model : 2023,
//     vehiclePrice : 50000,

// }
// console.log(bykeObj);
// console.log(typeof bykeObj);

// var employee = {name : 'aziz',
//     company : 'abc pvt ltd',
//     designation : 'graphic designer',
//     gender : 'malie',
//     skill: ['adobe','photoshop'],
//     intro : function(){console.log('my name is aziz and i work in pivate company')}
// }
// let check = 'name' in employee;
// console.log(check)
// var user1 = {id: 1,
//     userName : 'john'
// }
// var user2 = user1;
// user2.city = 'karachi'
// console.log(user1)
// console.log(user2)


// var userList = [{id : 1,
//     userName : 'john'
// },
// {id : 2,
//     userName :'smith'
// },
// {id : 3,
//     userName : 'andrew'
// },
// {id : 4,
//     userName : 'mark'
// }

// ]
// function adder(){let get = document.getElementById('it').value;
//     console.log(get);
//     userList.push({id : 5, userName : get,})
// }
// console.log(userList);
// for(let i = 0; i<userList.length; i++){console.log(userList[i].id)}

/*___________________________________________________________________________________*/