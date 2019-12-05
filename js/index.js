// Iteration 1: Names and Input

let hacker1 = "Bobby";
let hacker2 = "Joey";

console.log("The driver's name is ", hacker1);
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
printMessage(hacker1, hacker2);

function printMessage(hacker1, hacker2) {
  if (hacker1.length === hacker2.length) {
    console.log(
      "Wow, you both have equally long names,",
      hacker1.length,
      " characters!"
    );
  } else if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name, it has ",
      hacker1.length,
      " characters"
    );
  } else {
    console.log(
      "It seems that the navigator has the longest name, it has",
      hacker2.length,
      "characters"
    );
  }
}

// Iteration 3: Loops

spelling(hacker1);
reverseString(hacker1);
lexicalOrder(hacker1, hacker2);

function spelling(word) {
  let letters = [];
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i].toUpperCase());
  }
  let newWord = letters.join(" ");
  console.log(newWord);
}

function reverseString(name) {
  return console.log(
    name
      .split("")
      .reverse()
      .join("")
  );
}

function lexicalOrder(word1, word2) {
  let comparedValue = word1.localeCompare(word2);
  if (comparedValue === 0) {
    console.log("What?! You both have the same name?");
  } else if (comparedValue < 0) {
    console.log("The driver's name goes first");
  } else {
    console.log("Yo, the navigator goes first definitely");
  }
}

//BONUS

let lorem = String;
let lookingForWord = 'et';
lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo nec nunc egestas consequat. Ut suscipit eu nisi et imperdiet. Quisque vel mi ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sit amet arcu vitae lacus pretium feugiat. Sed auctor viverra tortor, eget maximus orci. Fusce pellentesque suscipit sapien. Etiam tincidunt diam sed leo scelerisque, vel auctor eros lobortis. Nullam in dapibus eros. Vivamus placerat quis tortor quis consequat. Vivamus id augue ante. Phasellus nec nulla quam. In fermentum quam at lorem ultrices, in fringilla erat rhoncus. Cras eget magna rhoncus, commodo orci id, placerat sem. Ut elementum dapibus nunc, eu dapibus neque vestibulum a. Etiam tincidunt libero mi, eget vestibulum nunc facilisis in. Proin eu malesuada ligula. Aenean tempus velit at nibh commodo, vel vestibulum massa sollicitudin. Sed ut aliquam tortor. Vivamus vulputate sollicitudin dignissim. Suspendisse dolor elit, tincidunt eget blandit eget, vehicula ut libero. Vivamus ultrices dolor mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra leo non pretium elementum. Integer ac ante massa. In ac ullamcorper tortor, a consequat lectus. Nam nec sollicitudin tellus. Nulla facilisi. Etiam dolor ex, tristique vitae volutpat ut, elementum nec ante. Morbi at orci sed mauris vulputate consectetur ut quis arcu. Donec nec consectetur leo, non ornare libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum nibh sed elementum malesuada. Nulla aliquet tellus in tincidunt rhoncus. Nam a odio tincidunt, ullamcorper purus eget, facilisis mi. Proin ac ultricies risus. Suspendisse potenti. Sed suscipit pharetra mauris in tincidunt.";

countWords(lorem);
// findWord(lorem, lookingForWord);
findWordFor(lorem, lookingForWord);

function countWords(textString) {
  let totalWords = Number;
  totalWords = textString.trim().split(/\s+/).length;
  return console.log("The string has:", totalWords, "words.");
}

// function findWord(textString, wordToFind) {
//   let timesRepeated = Number;
//   timesRepeated = textString.trim().split(wordToFind).length;
//   return console.log(
//     "The word",
//     wordToFind,
//     "appears",
//     timesRepeated,
//     "times."
//   );
// }

function findWordFor(text, word) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (
        text[i + 1] === word[0] &&
        text[i + 2] === word[1] &&
        text[i + 3] === " "
      ) {
        count++;
      }
    }
  }
  console.log("La palabra", word, "aparece", count, "veces.");
}

// function findWordFor(text, word) {
//   let count = 0;
//   let j = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//       while (text[i])
//         for (let j = 0; (i = word.length); j++) {
//           text[i] === word[j];
//         }

//       if (text[i + 1] === "e" && text[i + 2] === "t" && text[i + 3] === " ") {
//         count++;
//       }
//     }
//   }
//   console.log("La palabra", word, "aparece", count, "veces.")
// }
