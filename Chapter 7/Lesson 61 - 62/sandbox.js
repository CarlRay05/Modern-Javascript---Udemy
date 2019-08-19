// const form = document.querySelector('.signup-form');
// // const username = document.querySelector('#username');

// form.addEventListener('submit' , e => {
//   e.preventDefault();
//   console.log(form.username.value); 
// });

// // ! testing RegExp
// // * Expressions are trapped between forward slashes (^ to the begginging) ($ to the end)
// //? Option 1

// const username = 'dsvsdvshaunpdvsdvsd';
// // const pattern = /^[a-z]{6,}$/;
// const pattern = /[a-z]{6,}/;

// // let result = pattern.test(username);
// // console.log(result); 
// // if (result) {
// //   console.log('regex test passed ;)');
// // } else  {
// //   console.log('regex test failed. :(');
// // };

// // ? Option 2
// let result = username.search(pattern);
// console.log(result);


const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit' , e => {
  e.preventDefault();

  //validation
  const username = form.username.value;

  if(usernamePattern.test(username)){
    // Good Info Feedback
    feedback.textContent = 'that username is valid!';
  } else {
    // Help info feedback
    feedback.textContent = 'username must contain letters only & be between 6 to 12 charaters long';
  }
});

// live events
form.username.addEventListener('keyup', e =>{
  console.log(e);
  
  // console.log(e.target.value, form.username.value);
  if(usernamePattern.test(e.target.value)){
    // console.log('passed');   
    form.username.setAttribute('class', 'success');
  } else {
    // console.log('failed');
    form.username.setAttribute('class', 'error');
  }
});













