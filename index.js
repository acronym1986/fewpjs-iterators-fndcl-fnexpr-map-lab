const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
 // return tutorials
//}
/*
 const titleCased = function (word) {
  const sepWord = word.split(' ');
     
    
      return sepWord.map(function(letter){
        return letter[0].toUpperCase() + letter.slice(1);
  }).join(' ');
}
 
tutorials.map(titleCased);  */

const titleCased = (sentence) => {
  
  return tutorials.map(word => {
  const sepWord = word.split(' ');
  const capLetter = sepWord.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1)).join(' ');
   return capLetter;
   
})                       
} 
 
 

