// //assign
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);
// console.log(target);
// // output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget);
// // output: Object { a: 1, b: 4, c: 5 }

const person = {
    isHuman: false,
    printIntro: function (){console.log(`my name is ${this.name} Am I human? ${this.isHuman}`)}
    
};

const me= Object.create(person);
me.name ='Akshatha';
me.isHuman=true;

me.printIntro();
// console.log(me)

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten
  
//   me.printIntroduction();
//   // expected output: "My name is Matthew. Am I human? true"

  