var OPENMENU = true;

$('#btn-toggle').click(function (e) { 
    e.preventDefault();

    if(OPENMENU){
        OPENMENU = false
        $(this).removeClass('fas fa-times');
        $(this).addClass('fas fa-bars');
        $('#menu').removeClass('col-md-4');
        $('#menu').addClass('col-md-1');
        $('#username-div').removeClass('d-md-flex');
        $('#powered').removeClass('d-md-flex');
    } else {
        OPENMENU = true
        $(this).removeClass('fas fa-bars');
        $(this).addClass('fas fa-times');
        $('#menu').removeClass('col-md-1');
        $('#menu').addClass('col-md-4');
        $('#username-div').addClass('d-md-flex');
        $('#powered').addClass('d-md-flex');
    }
});