$("#AdminSideBar").load("/common/sidebar.html")
$("#AdminNavBar").load("/common/admin-navbar.html")

//Admin toggle btn 
let count=0
function adminSideNav(){
    if(count%2==0){
        $(".admin-side-b-wrapper").addClass("admin-sidenav-left")
        $(".admin-overlay-btn").removeClass("popup-i-display-none")
        count++
    }else{
        $(".admin-side-b-wrapper").removeClass("admin-sidenav-left")
        $(".admin-overlay-btn").addClass("popup-i-display-none")
        count++
    }
    
}
let sidecount=0
function adminpaddleft(){
    if(sidecount%2==0){
        $(".admin-side-b-wrapper").addClass("admin-side-left-b")
        $("#adminPaddingLeft").removeClass("admin-padding-left")
        sidecount++
    }else{
        $(".admin-side-b-wrapper").removeClass("admin-side-left-b")
        $("#adminPaddingLeft").addClass("admin-padding-left")
        sidecount++
    }
}

// PopUp 
function popUpShow(id) {
    $(id).removeClass(" popup-i-display-none");
}
function popupRemove(id) {
    $(id).addClass(" popup-i-display-none");
}

//
$(document).ready(function () {
    $(".ind-f-label").change(function () {
        if ($("#chkMinute").is(":checked")) {
            $(".first-dnone").show();
        } else {
            $(".first-dnone").hide();
        }
        if ($("#chkGame").is(":checked")) {
            $(".second-dnone").show();
        } else {
            $(".second-dnone").hide();
        }
    });
});

$("#CheckInS").click(function () {
    $(this).hide();
    $("#snookertableS").show();
});
$(".chenge-input .default-icon .default-icon-btn").click(function () {
    var parent = $(this).parent();
    if (parent.find("i").attr("class") === "fa fa-pencil") {
        $(parent.parent().children()[0]).addClass("d-none");
        $(parent.parent().children()[1]).removeClass("d-none");
    } else {
        $(parent.parent().children()[0]).removeClass("d-none");
        $(parent.parent().children()[1]).addClass("d-none");
    }
});