// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const cPassword = document.getElementById("confirmed-password");
// const phone = document.getElementById("phone");
// const age = document.getElementById("age");
// const url = document.getElementById("url");
// const message = document.getElementById("message");
const error = document.getElementById("error");
const sumbit = document.getElementById("submit");
sumbit.addEventListener("click", validate);

function validate() {
  event.preventDefault();
  let needsError = false;
  // ----------------------- name validation -----------------------
  const name = document.getElementById("name").value;
  if ((name.length < 3 && name.length > 0) || name.length > 10) {
    error.innerText =
      "Your name must be more than 3 charachters and more less 10";
  } else if (name.length == 0) {
    error.innerText = "Enter Your Name Please";
    needsError = true;
  } else {
    error.innerText = "";
  }

  // ----------------------- email validation -----------------------
  const email = document.getElementById("email").value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern) && email.length != 0) error.innerText += "";
  else {
    needsError = true;
    error.innerText += "\nemail is not valid\n";
  }

  // ----------------------- password validation -----------------------
  const password = document.getElementById("password").value;
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
  let isValid = false;
  if (password.match(validPassword) && password.length != 0) {
    error.innerText += "";
    isValid = true;
  } else {
    error.innerText += "password is required";
    needsError = true;
  }
  // ----------------------- confirmed password vaidation -----------------------
  const cPassword = document.getElementById("confirmedPassword").value;
  console.log("is valid " + isValid);
  console.log("equality " + (password === cPassword));
  if (!isValid || cPassword !== password) {
    needsError = true;
    error.innerText += "\npassword doesn't match \n";
  }

  // --------------------- phone validation -----------------------
  const phone = document.getElementById("phone").value;

  if (phone.length == 0) {
    error.innerText += "\nPhone number is required\n";
    needsError = true;
  } else if (!phone.startsWith("777") || phone.length != 9) {
    {
      error.innerText +=
        " \nPhone number must start with 777 and be 9 numbers long\n";
      needsError = true;
    }
  } else {
    error.innerText += "";
  }
  // ----------------------- age vaildation -----------------------
  const age = document.getElementById("age").value;
  if (parseInt(age) < 18) {
    error.innerText += " \nYou must be 18years old at least\n";
    needsError = true;
  } else if (age.length == 0) {
    error.innerText += "\nEnter Your age Please\n";
    needsError = true;
  } else {
    error.innerText += "";
  }

  // ----------------------- url validation -----------------------
  const url = document.getElementById("url").value;
  const validUrl =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  console.log(url);
  if (!url.match(validUrl)) {
    needsError = true;
    error.innerText += "\nurl is not valid\n";
  }

  // ----------------------- message validation -----------------------
  const messageLength = document.getElementById("message").value.length;
  console.log(messageLength);
  if (messageLength == 0) {
    error.innerText += "The message is neccessary";
    needsError = true;
  } else if (messageLength < 20 && messageLength > 0) {
    error.innerText += "The message must be more than 20 charachters";
    needsError = true;
  } else {
    error.innerText += "";
  }
  if (needsError) error.classList.add("error");
  else {
    error.classList.remove("error");
    error.innerText = "form is validated";
    error.classList.add("validated");
  }
}

// ------------------------ button switch ---------------------------
const switchButton = document.querySelector(".switch-btn");
const heading = document.getElementById("heading");
const inputs = document.querySelectorAll(".input");

switchButton.addEventListener("click", function () {
  if (switchButton.classList.contains("slide")) {
    switchButton.classList.remove("slide");

    // make it light
    console.log("light");
    document.body.classList.remove("night-body");
    heading.classList.remove("night-text");
    error.classList.remove("night-text");
    error.classList.remove("night-body");
    inputs.forEach(function(input){
        console.log(input);
        input.classList.remove("night-input");
    })
  } else {
    // make it night
    document.body.classList.add("night-body");
    heading.classList.add("night-text");
    error.classList.add("night-body");
    error.classList.add("night-text");
    inputs.forEach(function(input){
        console.log(input);
        input.classList.add("night-input");
    })
    switchButton.classList.add("slide");
  }
});
