function pageone() {
    document.getElementById('page1').style.display = 'block';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'none';    
}


function pagetwo() {
    document.getElementById('page1').style.display = 'none';    
    document.getElementById('page2').style.display = 'block';
    document.getElementById('page3').style.display = 'none';   
}


function pagethree() {
    document.getElementById('page1').style.display = 'none';    
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';   
}



function templatefun(){
    document.getElementById('home').style.display = 'none';    
    document.getElementById('endpage').style.display = 'block';
    storedata();
    printdata();
}

function startapp(){
    document.getElementById('home').style.display = 'block';    
    document.getElementById('prehome').style.display = 'none';
}