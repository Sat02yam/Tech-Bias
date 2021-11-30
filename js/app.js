// setInterval (function, 1000);
// window.onload = function() {
//     var nOne = document.getElementsByClassName("mem1");
//     var ntwo = document.getElementsByClassName("mem2");
//     var nthree = document.getElementsByClassName("mem3");
//     var nfour = document.getElementsByClassName("mem4");
//     var m = document.getElementById("size");
//     var sz = m.value;

//     console.log(sz);


// }

// setInterval (refresh, 1000);

// function refresh() {
//     var m = document.getElementById("size");
//     var sz = m.value;

//     console.log(sz);
// }

// window.onload = refresh() ;

setInterval (hello, 1000);

function hello() {
    var nOne = document.getElementsByClassName("mem1")[0];
    var ntwo = document.getElementsByClassName("mem2")[0];
    var nthree = document.getElementsByClassName("mem3")[0];
    var nfour = document.getElementsByClassName("mem4")[0];

    var a = document.getElementById("size");
    var size = a.value;

    if(size == 2) {
        nOne.style.display = "block";
    }

    else if(size == 3) {
        nOne.style.display = "block";
        ntwo.style.display = "block";
    }

    else if( size == 4) {
        nOne.style.display = "block";
        ntwo.style.display = "block";
        nthree.style.display = "block";
    }

    else if( size == 5) {
        nOne.style.display = "block";
        ntwo.style.display = "block";
        nthree.style.display = "block";
        nfour.style.display = "block" ;
    }

    // console.log(size);

}

window.onload = hello;

