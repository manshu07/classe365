$(document).ready(function () {
    $('select').select2(); // initialized select2
    //onclick show tooltip
    $('.show').click(function () {
        $('.tooltip_alert').fadeToggle();
    });


});
// initialized tooltip
$('.tooltip-demo.well').tooltip({
    selector: "a[rel=tooltip]"
});


// onclick profile sidebar
$('.avtar').click(function () {
    $('body').addClass("overlay__active");
});
$('.close__btn').click(function () {
    $('body').removeClass("overlay__active");
});
// onclick searchbar
$('.search').click(function () {
    $('body').addClass("overlay__-active");
});
$('.close__btn').click(function () {
    $('body').removeClass("overlay__-active");
});


// DataTable Hover checkbox
$(".td-checkbox input[type=checkbox]").change(function () {
    //$(this).closest('tr').toggleClass('row-selected');
    //$('.dataTable tr').addClass('row-selected');
    $('.td-checkbox').addClass('row-checkbox-visiable');
});
