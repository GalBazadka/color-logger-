//---------------------------------------------
//            Spread challenge
//---------------------------------------------
//  To enable the CSS animation, write a script
//  that will wrap each letter of the h2 element with a <span></span>
//  Use the spread operator, .map() and .querySelector()


// const wordsDiv = document.querySelector(".jump");
// wordsDiv.innerHTML = wordsDiv.innerHTML.split('').map(addSpan).join('')

// function addSpan(el) {
//     el = '<span>'+ el +'</span>'
//     return el
// }

const words = document.querySelector(".jump").outerText.split('');
const wordsDiv = document.querySelector(".jump");
wordsDiv.innerHTML = ""
words.map((el) => {
    wordsDiv.innerHTML += `<span>${el}</span>`;
})

 
