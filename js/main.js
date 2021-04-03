$('.main button:nth-child(1)').click(function () {
    $('.main h1').text('This Scripting text');
});

$('.main button:last-child').click(function () {
    $(this).text('Friend Request Send');
});

$('.main button:last-child').click(function () {
    $(".test").append('<h3>This h3 text </h3>');
});

$('.main button:nth-child(1)').click(function () {
    $(".main h1").css({
        'color':'blue',
        'font-size':'50px',
        'letter-spacing':'10px'
     });
});

$(".sec button").click(function () {
    $(".sec").append('<input type="text">');
});

$(".aaa button").click(function () {
    $(".inner").slideToggle(500);
});



$(".aaa button").click(function () {
    $(".aaa button span .muhib").toggleClass('kkk');
});

/*$(".aaa button").click(function () {
    $(".aaa button span").toggleClass('fas fa-chevron-up');
});*/

$('.main button:last-child').click(function () {
    $(".test p").addClass('abc');
});

$('.main button:last-child').click(function () {
    $(".test h6").toggleClass('cbd');
});



