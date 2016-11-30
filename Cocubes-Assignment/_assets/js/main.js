
/* Binding Click to show progress Modal on click of Generate Report */
$(".generateReport").off().on("click", function() {
    $(".progress-modal").removeClass("hide");
    $("body,html").css("overflow", "hidden");
    $(".cancel").off().on("click", function() {
        $(".progress-modal").addClass("hide");
        $("body,html").css("overflow", "auto");
    })
})
/* Binding Click Events on Aside nav tabs to show active tab */
$("aside li").off().on("click", function() {
    $(".active").removeClass("active");
    $(this).addClass("active")
});

/* Binding Click Events on Excel and Login Form */

$(".settings aside li").off().on("click", function() {
	$(".active").removeClass("active");
    $(this).addClass("active")
    if ($(this).hasClass("excel-settings")) {
        $("#excel-form").removeClass("hide");
        $("#login-form").addClass("hide")
    }
    if ($(this).hasClass("login")) {
        $("#excel-form").addClass("hide");
        $("#login-form").removeClass("hide")
    }
})

/* Binding Click to refresh configuration */
$("span.refresh").off().on("click",function(){
	$("#login-form input").val("")
})