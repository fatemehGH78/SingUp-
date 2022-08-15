
function validate() {
    var email = document.getElementById("form3Example3").value;
    var password = document.getElementById("form3Example4").value;
  
    if (contn(password) == false) {
      alert("رمز به درستی تعریف نشده است");
      return false;
    }
  
    if (contlowerCaseLetters(password) == false) {
      alert(" رمز دارای حروف کوچک باشد ");
      return false;
    }
  
    if (contupperCaseLetters(password) == false) {
      alert("رمز دارای حروف بزرگ باشد");
      return false;
    }
  }
  function contn(cont) {
    return /[0-9]/.test(cont);
  }
  
  function uservalidate(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email.value = email.value.replace(regex, "");
  }q

  
  
  function passvalidate(pass) {
    var regex = /[^0-9A-Za-z#$&@^_*]/;
    pass.value = pass.value.replace(regex, "");
  }
  
  function contlowerCaseLetters(contlowerCaseLetters) {
    return /[a-z]/.test(contlowerCaseLetters);
  }
  
  function contnupperCaseLetters(contupperCaseLetters) {
    return /[A-Z]/.test(contupperCaseLetters);
  }
  







