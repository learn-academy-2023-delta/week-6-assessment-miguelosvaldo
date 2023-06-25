// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("arrayWithSentence", () => {
  it("returns an array with a sentence about each person with their name capitalized.", () => {
    
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(arrayWithSentence(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
      //FIRST TEST = ReferenceError: arrayWithSentence is not defined
      //SECOND TEST = 

      const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

const arrayWithSentence = (parameter) => {
  const firstLastNameCapital = parameter.map(value => {
    [firstName, lastName] = value.name.split(" ")
  const firstNameUpperCase = firstName.charAt(0).toUpperCase() + firstName.substring(1)
  const lastNameUpperCase = lastName.charAt(0).toUpperCase() + lastName.substring(1)
  const addOcuppation = value.occupation
  return `${firstNameUpperCase} ${lastNameUpperCase} is ${addOcuppation}.`
  })
  return firstLastNameCapital
}


// Pseudo code:
    //create function called arrayWithSentence that takes in one paramenter
    //create a variable called firstLastNameCapital that will have the parameter mapped over
    //going to iterate over array of objects 
    //going to destructure array bu using a destructuring assignment in order to obtain first and last name seperately, will do so by using split(' ')which will seperate the first name and last name from the property
    //going to declare a variable called lastNameUpperCase which will store the first letter of the first name  by accessing with charAt(0), and concat the rest of the substring from character 1. Going to repeat process for lastname.
    //declare a varibale called addOcupation which will have the value of ocupation
    //going to string intorpolate in order to receive a sentence and return that
    //lastly return firstLastNameCapital array from the function


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("mixedDataArray", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
   expect(mixedDataArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
   const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
   // Expected output: [ 2, 1, -1 ]
   expect(mixedDataArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

const mixedDataArray = (param) => {
  return param.filter(value => typeof value  === "number" )
  .map(value => value % 3)
}

// Pseudo code:
      //going to create function called mixedDataArray that will take one parameter
      //going to filter over the parameter by using .filter() to return a new array of filtered values
      //going to identify numbers only by using typeof operator 
      //going to use .map() to iterate through the numbers and return the remainders by using the modulo operator when divided by 3


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("arrOfNum", () => {
  it("returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
   expect(arrOfNum(cubeAndSum1)).toEqual(99)
   const cubeAndSum2 = [0, 5, 10]
   // Expected output: 1125
   expect(arrOfNum(cubeAndSum2)).toEqual(1125)
  })
})

        // ReferenceError: arrOfNum is not defined

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

const arrOfNum = (param) => {
  let initialValue = 0
  let cubedOfNums = param.map(value => value **3)
  return cubedOfNums.reduce((acc, currentValue) =>
    acc + currentValue, initialValue
  )
}

// Pseudo code:

        //going to crate function called arrOfNum that takes one parameter
        //goint to declare a variable called initialValue and set it to 0 which will be the initial value
        //going go use .map() to iterate over param which is an array, select each value and cube each element, then the cubed elements will be assigned to cubedOfNum array
        //going to use .reduce() to iterate over each element of the new array, and accumulate them into the acc argument, then we add the accumulated elements to the current element and return that. 