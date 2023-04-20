function calculate() {
    var amount = document.getElementById("amount-input").value;
    var tip = document.getElementById("tip-select").value;
    var people = document.getElementById("people-input").value;
    var ds = document.getElementById("ds")

    var total = (amount * tip) / people ;
    total = Math.round(total * 1000000) / 1000000
    total = total.toFixed(2);

    document.getElementById("end-amount").innerHTML = total;

    if (amount === "") {
        document.getElementById("end-amount").innerHTML = "Please provide amount!"
        ds.style.display = "none";
    } else if (tip ==="") {
        document.getElementById("end-amount").innerHTML = "Please provide the tip amount!"
        ds.style.display = "none";
    } else if (people === "") {
        document.getElementById("end-amount").innerHTML = "Are you sharing the bill?"
        ds.style.display = "none";
    } else {
        ds.style.display = "block"
    }

    if (/[^0-9]/.test(amount)) {
        document.getElementById("end-amount").innerHTML = "Please provide a valid amount!"
        return;
    }
}