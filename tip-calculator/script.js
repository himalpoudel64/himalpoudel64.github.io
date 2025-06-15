function calculateTip(){

    const billAmt = parseFloat(document.getElementById('amount').value);
    const tip = parseFloat(document.getElementById('tip').value);

    if (billAmt=="" || billAmt<1 || billAmt>100000){
        document.getElementById('billerror').innerText="Invalid Value!";
        return false;
    }

    if (tip=="" || tip<0 || tip>100){
        document.getElementById('tiperror').innerText="Invalid Value!";
        return false;
    }

    else{
        document.getElementById('billerror').innerText="";
        document.getElementById('tiperror').innerText="";

    }

    const tipAmt = billAmt * (tip/100);
    const totalAmt = tipAmt + billAmt;

    document.getElementById('tipvalue').innerHTML = "Tip amount: "+tipAmt;
    document.getElementById('total').innerHTML = "Total amount: "+totalAmt;
}