$(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
        $(this)
            .parent()
            .hasClass("active")
    ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
            .parent()
            .removeClass("active");
    } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
        $(this)
            .parent()
            .addClass("active");
    }
});

$("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
});
const heightHeader = $('.header-seller').innerHeight();

$('#sidebar.sidebar-wrapper').css({
    marginTop: heightHeader,
    height: `calc(100% - ${heightHeader}px)`
});
$('#show-sidebar').css({ top: heightHeader });
$('.page-content.page-content-shop').css({marginTop: heightHeader, height: `calc(100% - ${heightHeader}px)`});

/*Table checkbox*/
$(document).ready(function() {
    $(".checkAll").on("click", function() {
        $(this)
            .closest("table")
            .find("tbody :checkbox")
            .prop("checked", this.checked)
            .closest("tr")
            .toggleClass("selected", this.checked);
    });

    $("tbody :checkbox").on("click", function() {
        // toggle selected class to the checkbox in a row
        $(this)
            .closest("tr")
            .toggleClass("selected", this.checked);

        // add selected class on check all
        $(this).closest("table")
            .find(".checkAll")
            .prop("checked",
                $(this)
                    .closest("table")
                    .find("tbody :checkbox:checked").length ==
                $(this)
                    .closest("table")
                    .find("tbody :checkbox").length
            );
    });
});

/*End table checkbox*/