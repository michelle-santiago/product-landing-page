//Hamburger
function toggle_nav() {
  var x = document.getElementById("hidden-navlist");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}
//slides
var reviewIndex = 1;
showreviews(reviewIndex);

function plusreviews(n) {
showreviews(reviewIndex += n);
}

function currentreview(n) {
showreviews(reviewIndex = n);
}

function showreviews(n) {
var i;
var reviews = document.getElementsByClassName("myreviews");
var dots = document.getElementsByClassName("dot");
if (n > reviews.length) {reviewIndex = 1}    
if (n < 1) {reviewIndex = reviews.length}
for (i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
reviews[reviewIndex-1].style.display = "block";  
dots[reviewIndex-1].className += " active";
}
//form validation
const name1 = document.querySelector('input[name="name"]');
const email1 = document.querySelector('input[name="email"]');
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let result=emailRegExp.test(email1.value);

function checkform()
{
  result=emailRegExp.test(email1.value);
  if(name1.value===""){
  name1.style.borderColor="red";
  document.getElementById("validation-name").innerHTML = "Please tell us how we should address you.";
  return false;
  }
  if(email1.value===""){
    email1.style.borderColor="red";
    document.getElementById("validation-email").innerHTML = "Please input your email";
    return false;
  }
  if(result===false&email1.value!==""){
    email1.style.borderColor="red";
    document.getElementById("validation-email").innerHTML = "Must be a valid email";
    return false;
  }
    return true;
}
function nameCheck(){
  document.getElementById("validation-name").innerHTML = "";
  if(name1.value===""){
    document.getElementById("validation-name").innerHTML = "Please tell us how we should address you.";
    name1.style.borderColor="red";
   }
   else{
    document.getElementById("validation-name").innerHTML = "";
    name1.style.borderColor="green";
   }
}
function emailCheck(){
  document.getElementById("validation-email").innerHTML = "";
  result=emailRegExp.test(email1.value);
  if(email1.value===""){
    document.getElementById("validation-email").innerHTML = "Please input your email";
    email1.style.borderColor="red";
  }
  if(result===false&email1.value!==""){
    document.getElementById("validation-email").innerHTML = "Must be a valid email";
    email1.style.borderColor="red";
  }
  else{
      document.getElementById("validation-email").innerHTML = "";
      email1.style.borderColor="green";
  }     
}
