// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*  global functions
    -------------------------------------------------- */
function makeActive(tabname) {
    $('li.active').removeClass('active'); // scrub all active classes from all tabs
    $(`#${tabname}`).addClass('active'); // make this tab active
}

$(document).ready(function () {
    /*  custom scrollbar stuff
    -------------------------------------------------- */
    $('#sidebar').mCustomScrollbar({
        theme: "minimal"
    });
    /*  sidenav stuff
    -------------------------------------------------- */
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
