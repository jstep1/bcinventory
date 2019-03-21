var config = {
    apiKey: "AIzaSyAT9ZoPFYzrEXij9Oj_LPIiDbWvH_sWGuY",
    authDomain: "bc-inventory.firebaseapp.com",
    databaseURL: "https://bc-inventory.firebaseio.com",
    projectId: "bc-inventory",
    storageBucket: "bc-inventory.appspot.com",
    messagingSenderId: "677429783765"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
    
    var s5bin = ["S5A", "S5B", "S5C", "S5D", "S5E", "S5F", "S5G", "S5H", "S5I", "S5J", "S5K", "S5L", "S5M", "S5N"];
    var s8bin = ["S8A", "S8B", "S8C", "S8D", "S8E", "S8F", "S8G", "S8H", "S8I", "S8J", "S8K", "S8L", "S8M", "S8N"];
    var s14bin = ["S14A", "S14B", "S14C", "S14D", "S14E", "S14F", "S14G", "S14H", "S14I", "S14J", "S14K", "S14L", "S14M", "S14N"]; var t3bin = ["T03A", "T03B", "T03C", "T03D", "T03E", "T03F", "T03G", "T03H", "T03I", "T03J", "T03K", "T03L", "T03M", "T03N"]; var t5bin = ["T05A", "T05B", "T05C", "T05D", "T05E", "T05F", "T05G", "T05H", "T05I", "T05J", "T05K", "T05L", "T05M", "T05N"]; var t9bin = ["T09A", "T09B", "T09C", "T09D", "T09E", "T09F", "T09G", "T09H", "T09I", "T09J", "T09K", "T09L", "T09M", "T09N"];

    var allbins = [];

    var invtotals = [];
    var sil14total, sil5total, sil8total, tad3total, tad5total, tad9total;
    
    database.ref("/totals").once("value", function(inval) {
        inval.forEach(function (invnumb) {
            invtotals.push(invnumb.val());
        })}).then(function () {
            $(".sil5").text(invtotals[1]);
            $(".sil8").text(invtotals[2]);
            $(".sil14").text(invtotals[0]);
            $(".tad3").text(invtotals[3]);
            $(".tad5").text(invtotals[4]);
            $(".tad9").text(invtotals[5]);
        });

    database.ref("/bins").once("value", function(bnum){
        bnum.forEach(function (bnqty) {
            allbins.push(bnqty.val());
        })}).then(function () {
            var idnum = 0;
            for(i = 0; i < 6; i++) {
                for(j = 0; j < 14; j++) {
                $("#i" + idnum).text(allbins[i][Object.keys(allbins[i])[j]].quantity)
                idnum++;
                }
            }
        })


$(".scan").change(function() {
    var s5 = parseInt(localStorage.getItem("sil5"));
    var s8 = parseInt(localStorage.getItem("sil8"));
    var s14 = parseInt(localStorage.getItem("sil14"));
    var t3 = parseInt(localStorage.getItem("tad3"));
    var t5 = parseInt(localStorage.getItem("tad5"));
    var t9 = parseInt(localStorage.getItem("tad9"));

    var x = $(".scan").val();
    
    if (x.includes("S5")) {
        localStorage.setItem("sil5", S5total)
    }
    if (x.includes("S8")) {
        localStorage.setItem("sil8", S8total)
    }
    if (x.includes("S14")) {
        localStorage.setItem("sil14", S14total)
    }
    if (x.includes("T03")) {
        var t = parseInt(localStorage.getItem(x));
        localStorage.setItem(x, T03total + t)
    }
    if (x.includes("T05")) {
        var t = parseInt(localStorage.getItem(x));
        localStorage.setItem(x, T05total + t)
    }
    if (x.includes("T09")) {
        var t = parseInt(localStorage.getItem(x));
        localStorage.setItem(x, T09total + t)
    }
})

$(".invup").click(function () {
    alert("Inventory Updated Successfully!");
})

$(".sil5complete").click(function() {
    var snew = localStorage.getItem(this.id);
    localStorage.setItem(this.id, 0);
    localStorage.setItem("sil5", S5total - snew);
    
})

var a;

$(".sku").click(function() {
    $("#sel").text(this.text);
    a = $("#sel").text()
    console.log(a)
    $("#option").text(localStorage.getItem(a))
})
    
$("#reminv").click(function() {
    var y = $("#rem").val();
    var z = $("#option").text();
    console.log(y, z)
    if(y !== "" && z !== "") {
    var b = localStorage.getItem(a) - parseInt($("#rem").val());
    $("." + a).text(b);
    localStorage.setItem(a, b)
    }
    else {
        alert("Please enter a valid number.")
    }
    
})
    
   


// function timeSince(date) {
//   var seconds = Math.floor(new Date().getTime() / 1000 - date),
//   interval = Math.floor(seconds / 31536000);

// if (interval > 1) return interval + "y";

// interval = Math.floor(seconds / 2592000);
// if (interval > 1) return interval + "m";

// interval = Math.floor(seconds / 86400);
// if (interval >= 1) return interval + "d";

// interval = Math.floor(seconds / 3600);
// if (interval >= 1) return interval + "h";

// interval = Math.floor(seconds / 60);
// if (interval > 1) return interval + "m ";

// return Math.floor(seconds) + "s";
// }