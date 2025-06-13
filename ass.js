let a = document.getElementById("Firstname");
let b = document.getElementById("Lastname");
let t = document.getElementById("number");
let Province = document.getElementById("Province");
let City = document.getElementById("City");
let Barangay = document.getElementById("Barangay");
let Message = document.getElementById("Message");
let Organization = document.getElementById("Organization");
let Street = document.getElementById("Street");
let Email = document.getElementById("Email");



function submitclick() {  


    if(a.value.trim() === ""){
        alert("Enter first name");
        a.style.boxShadow = " 0px 0px 10px 5px red"
        return false;
    }
    else{
        a.style.boxShadow = ""
    }
    if(b.value.trim() === ""){
        alert("Enter last name");
        b.style.boxShadow = " 0px 0px 10px 5px red"
        return false;
    }
    else{
        b.style.boxShadow = ""
    }
    if(a.value === b.value){
        alert("First name and last name are the same!");
        a.style.boxShadow = " 0px 0px 10px 5px red"
        b.style.boxShadow = " 0px 0px 10px 5px red"
        return false;
    }
    else{
        a.style.boxShadow = ""
        b.style.boxShadow = ""                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        
    }
    if(t.value.trim() === ""){
        alert("Enter telephone number");
        t.style.boxShadow = " 0px 0px 10px 5px red"
        return false;
    }
    else{
        t.style.boxShadow = ""
    }
    if(isNaN(t.value)){
        alert("Please enter a number in Telephone number");
        t.style.boxShadow = " 0px 0px 10px 5px red"
        return false;
    }
    else{
        t.style.boxShadow = ""
    }
    if(Email.value.trim() === ""){
        alert("Enter Email"); 
        Email.style.boxShadow = " 0px 0px 10px 5px red" 
        return false;
    }
    else{
        Email.style.boxShadow = "" 
    }
    if(Organization.value.trim() === ""){  
        alert("Enter Organization"); 
        Organization.style.boxShadow = " 0px 0px 10px 5px red" 
        return false;
    }
    else{
        Organization.style.boxShadow = "" 
    }
    if(Province.value.trim() !== "Davao del Norte"){
        alert("Select Davao del Norte in Province");
        Province.style.boxShadow = " 0px 0px 10px 5px red" 
        return false;
    }
    else{
        Province.style.boxShadow = ""
    }
    if(City.value.trim() !== "Tagum City"){
        alert("Select Tagum City in City");
        City.style.boxShadow = " 0px 0px 10px 5px red" 
        return false;
    }
    else{
        City.style.boxShadow = ""
    }
    if(Barangay.value.trim() !== "Mankilam"){
        alert("Select Mankilam Barangay"); 
        Barangay.style.boxShadow = " 0px 0px 10px 5px red" 
        return false;
    }
    else{
        Barangay.style.boxShadow = ""
    }
    
    
    if(Street.value.trim() === ""){
        alert("Enter Street");
        Street.style.boxShadow = " 0px 0px 10px 5px red" 
        return false;
    }
    else{
        Street.style.boxShadow = ""
    }
    if(Message.value.trim() === ""){
        alert("fill message");
        Message.style.boxShadow = " 0px 0px 10px 5px red" 
        return false;
    }
    else{
        Message.style.boxShadow = ""
    }
    if(Message.value.length < 10){
        alert("Message too shorts");
        Message.style.boxShadow = " 0px 0px 10px 5px red" 
        return false;
    }
    else{
        Message.style.boxShadow = ""
    }
    alert("Submitted Successfully");
    return true;
}
