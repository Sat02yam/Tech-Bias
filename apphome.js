setInterval (hey, 1000);

function hey() {
    var a = document.getElementById("proceed");
    var b = document.getElementById("submit");

    var c = document.getElementById("halua");
    var size = c.value;

    if(size == 1) {
        a.style.display = "block";
        b.style.display = "none";
    }

    else if(size == 2) {
        a.style.display = "none";
        b.style.display = "block";
    }

    console.log(size);

}

window.onload = hey;