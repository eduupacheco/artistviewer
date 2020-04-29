
var menuopened = true

$('#menu-header').click(function (e) { 
    if(menuopened){
        menuopened = false
        $('#menu').attr('class', 'col-1 m-0 p-0');
        $('#menu-header').html('<a id="aaa" class="fas fa-bars text-white d-flex justify-content-center m-4" style="font-size: 36px; cursor: pointer"></a>');
        $('#menu-main').hide();
        console.log('Cerrado')
    } else {
        menuopened = true
        $('#menu').attr('class', 'col-4 m-0 p-0');
        $('#menu-header').html('<img id="btn-switch-menu" src="img/logo.png" style="cursor: pointer; width: 100%">');
        $('#menu-main').show();
        console.log('Abierto')
    } 
});

