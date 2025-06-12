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
        return false;
    }
    if(b.value.trim() === ""){
        alert("Enter last name");
        return false;
    }
    if(a.value === b.value){
        alert("First name and last name are the same!");
        return false;
    }
    if(t.value.trim() === ""){
        alert("Enter telephone number");
        return false;
    }
    if(isNaN(t.value)){
        alert("Please enter a number in Telephone number");
        return false;
    }
    if(Province.value.trim() !== "Davao del Norte"){
        alert("Select Davao del Norte in Province"); 
        return false;
    }
    if(City.value.trim() !== "Tagum City"){
        alert("Select Tagum City in City");
        return false;
    }
    if(Barangay.value.trim() !== "Mankilam"){
        alert("Select Mankilam Barangay"); 
        return false;
    }
    if(Organization.value.trim() === ""){  
        alert("Enter Organization"); 
        return false;
    }
    if(Street.value.trim() === ""){
        alert("Enter Street");
        return false;
    }
    if(Email.value.trim() === ""){
        alert("Enter Email"); 
        return false;
    }
    if(Message.value.length < 10){
        alert("Message too short");
        return false;
    }
    
    alert("Submitted Successfully");
    return true;
}