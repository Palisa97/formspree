console.log (Submit)

function Submit(){
    let name= document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let age= document.getElementById("age").value
    let Studentnumber =document.getElementById("Student number").value
    let identitynumber=document.getElementById("Identity number").value
    let contactnumber =document.getElementById("Contact number").value
    let homecontact=document.getElementById("Home contact").value
    let email=document.getElementById("email adress").value
    let University=document.getElementById("University").value
    let yearofstudy=document.getElementById("year of study").value
    let study=document.getElementById("field of study").value
    let qualificationname=document.getElementById("qualification name").value

var form = {
    name: name,
    surname: surname,
    age: age,
    Studentnumber: Studentnumber,
    identitynumber: identitynumber,
    contactnumber: contactnumber,
    homecontact:homecontact,
    email:email,
    qualification:button1,
    University:University,
    yearofstudy:yearofstudy,
    study:study,
    qualificationname:qualificationname,
    
}
const url = "https://formspree.io/f/xvoezgra"
let send = JSON.stringify(form)
fetch(url, {method:"POST", body:send, headers:{"Content-Type" : "application/json"}}).catch(function(error){console.log(error)})
console.log(form)
}


var button1
function completed(value){
    button1 = value
}


