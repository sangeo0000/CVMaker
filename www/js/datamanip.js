var name,datobirth,address,phone,mailid;
var sscboard,sscmarks,hscfield,hscmarks,degreefield,degreemarks,sscyear,hscyear,degreeyear;
var domain,company,expyrs,workexp;
var hobby,exactivity,lang;

function storedata(){
name = document.getElementById("name").value;
address = document.getElementById("addr").value;
phone = document.getElementById("mob").value;
mailid = document.getElementById("email").value;
datobirth = document.getElementById("DOB").value;
    
sscboard = document.getElementById("sscboard").value;
sscmarks = document.getElementById("sscmarks").value;
sscyear = document.getElementById("sscyear").value;
hscfield = document.getElementById("hscfield").value;
hscmarks = document.getElementById("hscmarks").value;
hscyear = document.getElementById("hscyear").value;
degreefield = document.getElementById("degreefield").value;
degreemarks = document.getElementById("degreemarks").value;
degreeyear = document.getElementById("degreeyear").value;
    
hobby = document.getElementById("hobby").value;
exactivity = document.getElementById("extraact").value;
lang = document.getElementById("languages").value;
}

function printdata(){
    document.getElementById("temp1name").innerHTML=name;
    document.getElementById("temp1addr").innerHTML=address;
    document.getElementById("temp1DOB").innerHTML=datobirth;
    document.getElementById("temp1email").innerHTML=mailid;
    document.getElementById("temp1mobile").innerHTML=phone;
    
    document.getElementById("temp1sscboard").innerHTML=sscboard;
    document.getElementById("temp1sscmarks").innerHTML=sscmarks;
    document.getElementById("temp1sscyear").innerHTML=sscyear;
    document.getElementById("temp1hscboard").innerHTML=hscfield;
    document.getElementById("temp1hscmarks").innerHTML=hscmarks;
    document.getElementById("temp1hscyear").innerHTML=hscyear;
    document.getElementById("temp1degreeboard").innerHTML=degreefield;
    document.getElementById("temp1degreemarks").innerHTML=degreemarks;
    document.getElementById("temp1degreeyear").innerHTML=degreeyear;
    
    document.getElementById("temp1languages").innerHTML=lang;
    document.getElementById("temp1hobby").innerHTML=hobby;
    document.getElementById("temp1extraact").innerHTML=exactivity;
}