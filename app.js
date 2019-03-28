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

    var bincollection = ["S5", "S8", "S14", "T03", "T05", "T09"];

    var allbins = [];

    var invtotals = [];

    var binquan = 0;

    var sil14total = 0;
    var sil5total = 0;
    var sil8total = 0;
    var tad3total = 0;
    var tad5total = 0;
    var tad9total = 0;
 
    database.ref("/bins").once("value", function(bnum) {
            allbins.push(bnum.val())}).then(function(invnums) {
                invnums.forEach(function (xyz) {
                    xyz.forEach(function (abc) {
                        var idnum = "#" + abc.val().id;
                        $(idnum).text(abc.val().qty)
                    
                        })})}).then(function() {
                            for(i=0; i<14; i++) {
                                sil14total += parseInt($("#i" + i).text());
                                $(".sil14").text(sil14total)
                            }
                            for(i=14; i < 28; i++ ) {
                                sil5total += parseInt($("#i" + i).text());
                                $(".sil5").text(sil5total)
                            }
                            for(i=28; i < 42; i++ ) {
                                sil8total += parseInt($("#i" + i).text());
                                $(".sil8").text(sil8total)
                            }
                            for(i=42; i < 56; i++ ) {
                                tad3total += parseInt($("#i" + i).text());
                                $(".tad3").text(tad3total)
                            }
                            for(i=56; i < 70; i++ ) {
                                tad5total += parseInt($("#i" + i).text());
                                $(".tad5").text(tad5total)
                            }
                            for(i=70; i < 84; i++ ) {
                                tad9total += parseInt($("#i" + i).text());
                                $(".tad9").text(tad9total)
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

// Check in bin functions

$('#checkin').submit(function () {
    event.preventDefault();
    var binid = $(".checkin").val()
    $('.binid').text(binid)
    $('#checkinbin').modal('show');
 });

 $('#checkout').submit(function () {
    event.preventDefault();
    var binid = $(".checkout").val()
    $('.binid').text(binid)
    $('#checkoutbin').modal('show');
 });
    
 $("#qtysubmit").click(function() {
     console.log(database.ref("/bins"))
     var bnumber = $("#binqty").val();
     if(bnumber > 0) {
        alert("Added " + bnumber + " pouches.")
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