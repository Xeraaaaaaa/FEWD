function getPrice(){
    var date1 = document.getElementById('pud').value;
    var date2 = document.getElementById('rtd').value;
    var diff = Math.floor((Date.parse(date2) - Date.parse(date1)) / 86400000) + 1;
    var selectedCar = document.getElementById("selectedCar").value;
    var bmwPrice = 74.00;
    var konaPrice = 64.00;
    var yPrice = 82.00;
    //alert(selectedCar);

    if(selectedCar === "i4"){
        var totalPrice = bmwPrice * diff;
                var inclTax = totalPrice * 1.08;
                document.getElementById('grandTotal').innerHTML='S$'+parseFloat(inclTax).toFixed(2);
    }else{
        if(selectedCar === "kona"){
            var totalPrice = konaPrice * diff;
            var inclTax = totalPrice * 1.08;
            document.getElementById('grandTotal').innerHTML='S$'+parseFloat(inclTax).toFixed(2);
        }else{
            if(selectedCar === "y"){
                var totalPrice = yPrice * diff;
                var inclTax = totalPrice * 1.08;
                document.getElementById('grandTotal').innerHTML='S$'+parseFloat(inclTax).toFixed(2);
            }
        }
    }
    
}

function bookNotif(){
    alert("Booking Has Been Placed!");
    document.location.href="home.html";
}

function book(){
    document.location.href="book.html";
}

function login(){
    document.location.href="login.html";
}
