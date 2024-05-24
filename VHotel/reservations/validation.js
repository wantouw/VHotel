
var nameInput = document.getElementById("name") 
var emailInput = document.getElementById("email") 
var checkInInput = document.getElementById("checkIn") 
var checkOutInput = document.getElementById("checkOut")
var roomTypeInput= document.getElementById("roomType")
var form=document.getElementById("hotelForm")
var popUp=document.getElementById("done")

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
checkInInput.addEventListener("input", validateCheckIn);
checkOutInput.addEventListener("input", validateCheckOut);
roomTypeInput.addEventListener("input", validateRoom);

form.addEventListener("submit", function(event){
    event.preventDefault();
    var check1=validateCheckIn();
    var check2=validateCheckOut();
    var check3=validateEmail();
    var check4=validateName();
    var check5=validateRoom();
    if(check1==true&&check2==true&&check3==true&&check4==true&&check5==true){
        window.location.href = "../home/home.html"
        alert("Reservation made successfully! Kindly check your e-mail for further details")
        form.submit();
    }
});

function validateName(){
    var letters=0;
    for(let i=0;i<nameInput.value.length;i++){
        if((nameInput.value[i]>'z'||nameInput.value[i]<'a')&&(nameInput.value[i]>'Z'||nameInput.value[i]<'A')&&nameInput.value[i]!=' '){
            document.getElementById("errName").innerHTML="*Name can only contain letters or spaces"
            nameInput.classList.remove("active")
            return false;
        }
        if((nameInput.value[i]<='z'&&nameInput.value[i]>='a')||(nameInput.value[i]<='Z'&&nameInput.value[i]>='A')){
            letters++;
        }
    }
    if(nameInput.value==""){
        document.getElementById("errName").innerHTML="*Name cannot be empty"
        nameInput.classList.remove("active")
        return false;
    }
    else if(letters<=3){
        document.getElementById("errName").innerHTML="*Name must be at least 4 letters"
        nameInput.classList.remove("active")
        return false;
    }
    else{
       document.getElementById("errName").innerHTML=""
       nameInput.classList.add("active")
       return true;
    }
}

function validateEmail(){
    if(emailInput.value==""){
        document.getElementById("errEmail").innerHTML="*E-mail cannot be empty"
        return false;
    }
    var idx = -1;
    var count = 0;
    for(let i=0;i<emailInput.value.length;i++){
        if(emailInput.value[i]=='@'){
            idx=i;
            count++;
        }
    }
    if(idx==0){
        document.getElementById("errEmail").innerHTML="*E-mail cannot start with '@'"
        return false;
    }
    else if(count!=1){
        document.getElementById("errEmail").innerHTML="*E-mail must contain at least one '@'"
        return false;
    }
    else if(emailInput.value.endsWith(".com")==false&&emailInput.value.endsWith(".co.id")==false&&emailInput.value.endsWith(".ac.id")==false){
        document.getElementById("errEmail").innerHTML="*Invalid domain name"
        return false;
    }
    else if(emailInput.value.length-idx<=8){
        document.getElementById("errEmail").innerHTML="*Domain name too short"
        return false;
    }
    else{
        document.getElementById("errEmail").innerHTML=""
        emailInput.classList.add("active")
        return true
    }
}


function validateCheckIn(){
    if(checkInInput.value==""){
        document.getElementById("errCheckIn").innerHTML="*Please enter Check-In date"
        checkInInput.classList.remove("active")
        document.getElementById("req").innerHTML="Please fill out Check-In date first"
        document.getElementById("errCheckOut").innerHTML=""
        checkOutInput.disabled=true;
        checkOutInput.classList.remove("active")
        return false;
    }
    else if(new Date(checkInInput.value) <= new Date()){
        document.getElementById("errCheckIn").innerHTML="*Check-In date must be after today's date"
        checkInInput.classList.remove("active")
        document.getElementById("req").innerHTML="Please fill out Check-In date first"
        document.getElementById("errCheckOut").innerHTML=""
        checkOutInput.disabled=true;
        checkOutInput.classList.remove("active")
        return false;
    }
    else{
        checkOutInput.disabled=false;
        document.getElementById("req").innerHTML=""
        document.getElementById("errCheckIn").innerHTML=""
        checkInInput.classList.add("active")
        validateCheckOut();
        return true;
    }
}

function validateCheckOut(){
    if(new Date(checkOutInput.value) <= new Date(checkInInput.value)&&checkInInput.classList.contains("active")){
        document.getElementById("errCheckOut").innerHTML="*Check-Out date must be after Check-In's date"
        checkOutInput.classList.remove("active")
        return false;
    }
    else if(checkOutInput.value==""&&checkInInput.classList.contains("active")){
        document.getElementById("errCheckOut").innerHTML="*Please enter Check-Out Date"
        checkOutInput.classList.remove("active")
        return false;
    }
    else{
        document.getElementById("errCheckOut").innerHTML=""
        checkOutInput.classList.add("active")
        return true;
    }
}

function validateRoom(){
    if(roomTypeInput.value==""){
        roomTypeInput.classList.remove("active")
        document.getElementById("errRoomType").innerHTML="*Please choose a room type"
        return false;
    }
    else{
        roomTypeInput.classList.add("active")
        document.getElementById("errRoomType").innerHTML=""
        return true;
    }
}
