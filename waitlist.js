const button = document.getElementById("contactbutton");
const closebutton = document.getElementById("close");
const form = document.getElementById("form");

button.addEventListener("click", function(){
  form.style.display = "block";
  button.style.display = "none";
})
closebutton.addEventListener("click", function(){
  form.style.display = "none";
  button.style.display = "block";
})

function displayAlert(event) {
  const name = document.getElementById("namebox").value;
  const email = document.getElementById("emailbox").value;
  const yes = document.getElementById("button1");
  const no = document.getElementById("button2");

  var data = "Here's what was received:" + "\n";
  data += "Name: " + name.charAt(0).toUpperCase() + name.slice(1, name.indexOf(" ")) + " " + name.charAt(name.indexOf(" ") + 1).toUpperCase() + name.slice(name.indexOf(" ") + 2) + "\n";
  data += "Email: " + email + "\n";
  if(!name.includes(" ")){
    window.alert("Please enter your full name.")
  }
  else if(!email.includes(".")){
    window.alert("Please follow the given email format: Xyz@abc.com")
  }
  else if(yes.checked){
    data += "Notifications: Yes"
    window.alert(data)
    form.style.display = "none";
    button.style.display = "none";
    document.getElementById("thanks").style.display = "block";
  }
  else if(no.checked){
    data += "Notifications: No"
    window.alert(data)
    form.style.display = "none";
    button.style.display = "none";
    document.getElementById("thanks").style.display = "block";
  }
  else if(!yes.checked && !no.checked){
    window.alert("Please select whether you would like to receive notifications or not.")
  }
  else{
    window.alert(data)
    form.style.display = "none";
    button.style.display = "none";
    document.getElementById("thanks").style.display = "block";
  }
  event.preventDefault();
}

