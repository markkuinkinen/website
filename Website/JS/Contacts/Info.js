function check(form)
{
  var firstname = form.fname.value;
  var lastname = form.lname.value;
  var gender = form.gender;
  let age = document.getElementById("age").value;
  var email = form.email.value;
  var info = form.info.value;

//lots of things to input information into and conditions that have to be met

if(firstname.length == " ")
  {
    alert("you didn't tell me your name");
  }
  if(firstname.length > 25)
  {
    alert("your name is too long");

    form.fname.focus();
    return false;
  }

if(lastname.length == " ")
  {
    alert("you didn't tell me your lastname");
  }
  if(lastname.length > 25)
  {
    alert("your lastname is too long");

    form.lname.focus();		//focuses on last name text box and error checks it
    return false;
  }

{
  var e = document.getElementById("gender");
  var strUser = e.options[e.selectedIndex].value;
    if(strUser==0)
      {
        alert("you didn't tell me your gender");
        return false;
      }
}

if(age.length == "")
{
 alert("you didn't tell me your age.")
}
if(age < 18 || age > 100 || isNaN(age))
 {
   alert("not a proper age");

   form.age.focus();
   return false;
}

var must = /\S+@\S+/;
if(!must.test(email))
  {
    alert("give me a proper email");
    form.email.focus();
    return false;
  }

  if(info.length > 255)
  {
    alert("your feedback is too long");
    form.info.focus();
    return false;
  }

  else {
    alert("Thank you for filling out the application :)");
  }
}
