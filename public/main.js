function run() {
  fetch("/api/members")
    .then((res) => res.json())
    .then((json) => {
      const tableSection = document.getElementById("table");
      tableSection.style.visibility = "visible";
      json.forEach(function(user) { 
        tableSection.getElementsByTagName("p")[0].innerText += user.name + '\n';
      });
    });
}

/* Verify all requirements met */
function verifyLogin() {
  var verified = false;
  query = "?email=" + document.getElementById('floatingInput').value + "&pass=" + document.getElementById('floatingPassword').value;
  fetch("api/accounts/" + query)
  .then((res) => res.json())
  .then((json) => {
    if(JSON.stringify(json) != "[]") {
      verified = true;
    }
  });
  if(!verified) {      document.getElementById("fail").innerHTML = "incorrect email address or password";}
  return verified;
}

function verifyNewAccount() {
  return verifyUsername() && verifyPassword()
}

/* Verify Username Length
   - Length L must satisfy 5 < L < 24 */
   function verifyUsername() {
    var len = document.getElementById('floatingUsername').value.length;
    if( len < 6 ) {
        alert('username must be at least 6 characters long');
        return false;
    }
    else if( len > 24 ) {
        alert('username must be less than 24 characters long');
        return false;
    }
    return true;
}

/* Verify Password Match
   - Password and Confirm Password Inputs must match */
function verifyPassword() {
    if(document.getElementById('floatingPassword').value != document.getElementById('floatingConfirmPassword').value) {
        alert('ensure passwords match');
        return false;
    }
    return true;
}