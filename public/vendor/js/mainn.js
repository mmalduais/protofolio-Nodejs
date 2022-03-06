function checkName(name)
{
  if(name.length>3 && name.length<10)
    {
      
        return true;
    }
    else
    alert("incorrect name");
     return false;
} 
function checkPhone(phone)
 {
   console.log("checkPhone");
    if(phone.length ==9 && phone.charAt(0)==7 && phone.charAt(1)==7 && phone.charAt(2))
   
    {
         return true;
    }
   else
   alert("incorrect number");
      return false;   
      
 }   
           
function checkEmail(name)
{   console.log("checkEmail");
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(name).search (filter) != -1;
}  
function checkMessage(message)
{    console.log("checkMessage");
    if(message.length>20)
     return true;
     else
     return false;
}


function validation( )
{
    var name= document.getElementById("name");

    var email= document.getElementById("email");
   
   var phone= document.getElementById("phone");

    var message= document.getElementById("message");
  
  if(checkName(name.value))
     {
        name.className += " valid-class ";
     }
     else
     {
      name.className += " invalid-class ";
     }

    
     if( checkPhone(phone.value))
     {
      phone.className += " valid-class ";
     }
     else
     {
      phone.className += " invalid-class ";
     }

     if(checkEmail(email.value))
     {
      email.className += " valid-class ";
     }
     else
     {
      email.className += " invalid-class ";
     }
     if(checkMessage(message.value))
     {
      message.className += " valid-class ";
     }
     else
     {
      message.className += " invalid-class ";
     } 
     
}
function Themming(){
    var myBtn = document.getElementById('btnThem');
    if (myBtn.innerText=="Black")
    {
        document.body.style.backgroundColor ="black";
        myBtn.innerText="White";
        myBtn.style.backgroundColor="white";
        myBtn.style.color = "black";
    }
    else if (myBtn.innerText=="White")
    {
        document.body.style.backgroundColor ="white";
        myBtn.innerText="Black";
        myBtn.style.backgroundColor="black";
        myBtn.style.color = "white";
    }
    
}

// function White(){
//     document.body.style.backgroundColor="white";
// }

/***************************/ 

