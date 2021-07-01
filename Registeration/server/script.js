function formValidation()
{
var passid = document.registration.passid;
var uname = document.registration.username;
var ufaculty = document.registration.faculty;
var uemail = document.registration.email;
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(facyltyselect(ufaculty))
{

if(ValidateEmail(uemail))
{
}
} 
}
} 
}
}
return false;
}
//Function for names
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
//function for password
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function countryselect(ufaculty)
{
if(ufaculty.value == "Default")
{
alert('Select your country from the list');
ufaculty.focus();
return false;
}
else
{
return true;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

