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
const message = document.getElementById("msgbox").value;
var gmail = document.getElementById("GMAIL");
var hotmail = document.getElementById("HOTMAIL");
var sms = document.getElementById("SMS");
var whatsapp = document.getElementById("WHATSAPP");

  var data = "Here's what was received:" + "\n";
  data += "Name: " + name.charAt(0).toUpperCase() + name.slice(1, name.indexOf(" ")) + " " + name.charAt(name.indexOf(" ") + 1).toUpperCase() + name.slice(name.indexOf(" ") + 2) + "\n";
  data += "Email: " + email + "\n";
  data += "Message: " + message.charAt(0).toUpperCase() + message.slice(1) + "\n";

  if(!name.includes(" ")){
    window.alert("Please enter your full name.")
  }
  else if(!email.includes(".")){
    window.alert("Please follow the given email format: Xyz@abc.com")
  }
  else if(gmail.checked){
    data += "Contact method : Gmail"
    window.alert(data)
    form.style.display = "none";
    name = "";
    email = "";
    message = "";
    gmail.checked = false;
    hotmail.checked = false;
    sms.checked = false;
    whatsapp.checked = false;
  }
  else if(hotmail.checked){
    data += "Contact method : Hotmail"
    window.alert(data)
    form.style.display = "none";
    name = "";
    email = "";
    message = "";
    gmail.checked = false;
    hotmail.checked = false;
    sms.checked = false;
    whatsapp.checked = false;
  }
  else if(sms.checked){
    data += "Contact method : SMS"
    window.alert(data)
    form.style.display = "none";
    name = "";
    email = "";
    message = "";
    gmail.checked = false;
    hotmail.checked = false;
    sms.checked = false;
    whatsapp.checked = false;
  }
  else if(whatsapp.checked){
    data += "Contact method : Whatsapp"
    window.alert(data)
    form.style.display = "none";
    name = "";
    email = "";
    message = "";
    gmail.checked = false;
    hotmail.checked = false;
    sms.checked = false;
    whatsapp.checked = false;
  }
  else if(!gmail.checked && !hotmail.checked && !sms.checked && !whatsapp.checked){
    window.alert("Please choose a contact method.")
  }
  else{
    window.alert(data)
    form.style.display = "none";
    name = "";
    email = "";
    message = "";
    gmail.checked = false;
    hotmail.checked = false;
    sms.checked = false;
    whatsapp.checked = false;
  }
  event.preventDefault();
}

