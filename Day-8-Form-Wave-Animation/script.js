// Create a variable to bring labels
const labels = document.querySelectorAll(".form-control label");

// Separate each label letter and place each letter in a "span" tag
// 1- split() will seperate label letters into an array
// 2- map() will create the array with the letters placed in the span tag
// 3- join() will turn array back into a string
labels.forEach(label => {
  label.innerHTML = label.innerText
    .split("")
    .map((eachLetter) => `<span>${eachLetter}</span>`)
    .join("");
})