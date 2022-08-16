function validate() {
  var email = document.getElementById("form3Example3").value;
  var password = document.getElementById("form3Example4").value;
  var Enterpassword = document.getElementById("form3Example5").value;
  var firstName = document.getElementById("form3Example1").value;
  var lastName = document.getElementById("form3Example2").value;

  if (
    contlowerCaseLetters(firstName) == false &&
    contnupperCaseLetters(firstName) == false
  ) {
    alert(" نام کاربر را به درستی وراد کنید ");
    return false;
  }

  if (
    contlowerCaseLetters(lastName) == false &&
    contnupperCaseLetters(lastName) == false
  ) {
    alert("نام خانوادگی را به درستی وارد کنید ");
    return false;
  }

  // if ((uservalidate(email) == false)) {
  //   alert("ایمیل به درستی تعریف نشده است");
  //   return false;
  // }

  if (contn(password) == false) {
    alert("رمز به درستی تعریف نشده است");
    return false;
  }

  if (contlowerCaseLetters(password) == false) {
    alert(" رمز دارای حروف کوچک باشد ");
    return false;
  }

  if (contnupperCaseLetters(password) == false) {
    alert("رمز دارای حروف بزرگ باشد");
    return false;
  }

  // if(!(password==Enterpassword)){
  //   alert(تکرار رمز اشتباه  است )
  //   return false;
  // }
}

function contn(cont) {
  return /[0-9]/.test(cont);
}

function contlowerCaseLetters(contlowerCaseLetters) {
  return /[a-z]/.test(contlowerCaseLetters);
}

function contnupperCaseLetters(contupperCaseLetters) {
  return /[A-Z]/.test(contupperCaseLetters);
}

// function uservalidate(email) {
//   var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   email.value = email.value.replace(regex, "");
// }

function passvalidate(pass) {
  var regex = /[^0-9A-Za-z#$&@^_*]/;
  pass.value = pass.value.replace(regex, "");
}

function confpassword(confpassword) {
  var password = $("#form3Example4").val();
  var Enterpassword = $("#form3Example5").val();
}
