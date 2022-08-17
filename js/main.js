// function validate() {
//   var firstName = document.getElementById("firstName").value;
//   var lastName = document.getElementById("lastName").value;
//   // var phoneNumber = document.getElementById("phoneNumber").value;
//   var emailAddress = document.getElementById("emailAddress").value;
//   var pass = document.getElementById("pass").value;
//   var pass2 = document.getElementById("pass2").value;

//   var patt1 = /[^a-zA-Z" "]/;
//   var patt2 =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   var patt3 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//   var patt4 = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@/#$%^&]{6,16}$/;

//   if (((!patt1.test(firstName)) && (!patt1.test(lastName))) && ((patt2.test(emailAddress)) &&  ((patt4.test(pass)) &&  (pass == pass))) {
//     window.open("./home.html");
//   }

//   if (patt1.test(firstName)) {
//     document.getElementById("firstName").style.borderColor = "red";
//     document.getElementById("firstName").style.borderWidth = "3px";
//   } else {
//     document.getElementById("firstName").style.borderColor = "#ced4da";
//     document.getElementById("firstName").style.borderWidth = "1px";
//   }

//   if (patt1.test(lastName)) {
//     document.getElementById("lastName").style.borderColor = "red";
//     document.getElementById("lastName").style.borderWidth = "3px";
//   } else {
//     document.getElementById("lastName").style.borderColor = "#ced4da";
//     document.getElementById("lastName").style.borderWidth = "1px";
//   }

//   if (!patt2.test(emailAddress)) {
//     document.getElementById("emailAddress").style.borderColor = "red";
//     document.getElementById("emailAddress").style.borderWidth = "3px";
//   } else {
//     document.getElementById("emailAddress").style.borderColor = "#ced4da";
//     document.getElementById("emailAddress").style.borderWidth = "1px";
//   }

//   if (!patt3.test(phoneNumber)) {
//     document.getElementById("phoneNumber").style.borderColor = "red";
//     document.getElementById("phoneNumber").style.borderWidth = "3px";
//   } else {
//     document.getElementById("phoneNumber").style.borderColor = "#ced4da";
//     document.getElementById("phoneNumber").style.borderWidth = "1px";
//   }

//   if (!patt4.test(pass)) {
//     document.getElementById("pass").style.borderColor = "red";
//     document.getElementById("pass").style.borderWidth = "3px";
//   } else {
//     document.getElementById("pass").style.borderColor = "#ced4da";
//     document.getElementById("pass").style.borderWidth = "1px";
//   }

//   if (!(pass == pass2)) {
//     document.getElementById("pass2").style.borderColor = "red";
//     document.getElementById("pass2").style.borderWidth = "3px";
//   } else {
//     document.getElementById("pass2").style.borderColor = "#ced4da";
//     document.getElementById("pass2").style.borderWidth = "1px";
//   }
// }

// function validate() {
//   var email = document.getElementById("form3Example3").value;
//   var password = document.getElementById("form3Example4").value;
//   var Enterpassword = document.getElementById("form3Example5").value;
//   var firstName = document.getElementById("form3Example1").value;
//   var lastName = document.getElementById("form3Example2").value;

//   if (
//     contlowerCaseLetters(firstName) == false &&
//     contnupperCaseLetters(firstName) == false
//   ) {
//     alert(" نام کاربر را به درستی وراد کنید ");
//     return false;
//   }

//   if (
//     contlowerCaseLetters(lastName) == false &&
//     contnupperCaseLetters(lastName) == false
//   ) {
//     alert("نام خانوادگی را به درستی وارد کنید ");
//     return false;
//   }

//   // if ((uservalidate(email) == false)) {
//   //   alert("ایمیل به درستی تعریف نشده است");
//   //   return false;
//   // }

//   if (contn(password) == false) {
//     alert("رمز به درستی تعریف نشده است");
//     return false;
//   }

//   if (contlowerCaseLetters(password) == false) {
//     alert(" رمز دارای حروف کوچک باشد ");
//     return false;
//   }

//   if (contnupperCaseLetters(password) == false) {
//     alert("رمز دارای حروف بزرگ باشد");
//     return false;
//   }

//   if(!(confpass == Enterpassword)){
//     alert(تکرار رمز اشتباه است )
//     return false;
//   }
// }

// // function contn(cont) {
// //   return /[0-9]/.test(cont);
// // }

// // function contlowerCaseLetters(contlowerCaseLetters) {
// //   return /[a-z]/.test(contlowerCaseLetters);
// // }

// // function contnupperCaseLetters(contupperCaseLetters) {
// //   return /[A-Z]/.test(contupperCaseLetters);
// // }

// // // function uservalidate(email) {
// // //   var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// // //   email.value = email.value.replace(regex, "");
// // // }

// // function passvalidate(pass) {
// //   var regex = /[^0-9A-Za-z#$&@^_*]/;
// //   pass.value = pass.value.replace(regex, "");
// // }

// // // function signUp() {
// // //   if (document.getElementById("form3Example4").value == document.getElementById("form3Example5").value) {
// // //     var users = new Object();
// // //     users.password = document.getElementById("form3Example4").value;
// // //     users.Enterpassword = document.getElementById("form3Example5").value;

// // //     var postUser = new XMLHttpRequest(); // new HttpRequest instance to send user details

// // //     postUser.open("POST", "/users", true); //Use the HTTP POST method to send data to server

// // //     postUser.setRequestHeader("Content-Type", "application/json");

// // //     // Convert the data in "users" object to JSON format before sending to the server.
// // //     postUser.send(JSON.stringify(users));
// // // }
// // // else {
// // //     alert("Password column and Confirm Password column doesn't match!")
// // // }

// // // function CheckPassword(inputtxt)
// // // {
// // // var passw =! password;
// // // if(inputtxt.value.match(passw))
// // // {
// // // // alert('Correct, try another...')
// // // // return true;
// // // // }
// // // // else
// // // // {
// // // alert('Wrong...!')
// // // return false;
// // // }
// // // }
