$(".sil5").text(localStorage.getItem("sil5"));
$(".sil8").text(localStorage.getItem("sil8"));
$(".sil14").text(localStorage.getItem("sil14"));
$(".tad3").text(localStorage.getItem("tad3"));
$(".tad5").text(localStorage.getItem("tad5"));
$(".tad8").text(localStorage.getItem("tad8"));

$(".sil5add").click(function() {
    var s = parseInt($(".sil5").text());
    $(".sil5").text(s+1);
    var z = $(".sil5").text();
    localStorage.setItem("sil5", z);
}); 

$(".sil5sub").click(function() {
    var s = parseInt($(".sil5").text());
    $(".sil5").text(s-1);
    var z = $(".sil5").text();
    localStorage.setItem("sil5", z);
}); 

$(".sil8add").click(function() {
    var s = parseInt($(".sil8").text());
    $(".sil8").text(s+1);
    var z = $(".sil8").text();
    localStorage.setItem("sil8", z);
});

$(".sil8sub").click(function() {
    var s = parseInt($(".sil8").text());
    $(".sil8").text(s-1);
    var z = $(".sil8").text();
    localStorage.setItem("sil8", z);
}); 

$(".sil14add").click(function() {
    var s = parseInt($(".sil14").text());
    $(".sil14").text(s+1);
    var z = $(".sil14").text();
    localStorage.setItem("sil14", z);
});

$(".sil14sub").click(function() {
    var s = parseInt($(".sil14").text());
    $(".sil14").text(s-1);
    var z = $(".sil14").text();
    localStorage.setItem("sil14", z);
}); 

$(".tad3add").click(function() {
    var s = parseInt($(".tad3").text());
    $(".tad3").text(s+1);
    var z = $(".tad3").text();
    localStorage.setItem("tad3", z);
}); 

$(".tad3sub").click(function() {
    var s = parseInt($(".tad3").text());
    $(".tad3").text(s-1);
    var z = $(".tad3").text();
    localStorage.setItem("tad3", z);
}); 

$(".tad5add").click(function() {
    var s = parseInt($(".tad5").text());
    $(".tad5").text(s+1);
    var z = $(".tad5").text();
    localStorage.setItem("tad5", z);
}); 

$(".tad5sub").click(function() {
    var s = parseInt($(".tad5").text());
    $(".tad5").text(s-1);
    var z = $(".tad5").text();
    localStorage.setItem("tad5", z);
}); 

$(".tad8add").click(function() {
    var s = parseInt($(".tad8").text());
    $(".tad8").text(s+1);
    var z = $(".tad8").text();
    localStorage.setItem("tad8", z);
}); 

$(".tad8sub").click(function() {
    var s = parseInt($(".tad8").text());
    $(".tad8").text(s-1);
    var z = $(".tad8").text();
    localStorage.setItem("tad8", z);
}); 

/////////////

$(".s5up").click(function() {
    var x = parseInt($(".sil5up").val());
    $(".sil5").text(x);
    localStorage.setItem("sil5", x);
})

$(".s8up").click(function() {
    var x = parseInt($(".sil8up").val());
    $(".sil8").text(x);
    localStorage.setItem("sil8", x);
})

$(".s14up").click(function() {
    var x = parseInt($(".sil14up").val());
    $(".sil14").text(x);
    localStorage.setItem("sil14", x);
})

$(".t3up").click(function() {
    var x = parseInt($(".tad3up").val());
    $(".tad3").text(x);
    localStorage.setItem("tad3", x);
})

$(".t5up").click(function() {
    var x = $(".tad5up").val();
    $(".tad5").text(x);
    localStorage.setItem("tad5", x);
})

$(".t8up").click(function() {
    var x = parseInt($(".tad8up").val());
    $(".tad8").text(x);
    localStorage.setItem("tad8", x);
})