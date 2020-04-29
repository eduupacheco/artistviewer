var totalpages = 4
var actualpage = 1

$('.next-page').click(function (e) { 
    e.preventDefault();
    console.log('NEXT')
    if(actualpage+1 > 4){

    } else {
        actualpage = actualpage+1
        setPage(actualpage)
    }
});

$('.back-page').click(function (e) { 
    e.preventDefault();
    console.log('BACK')
    if(actualpage-1 < 1){

    } else {
        actualpage = actualpage-1
        setPage(actualpage)
    }
});


function setPage(n){
    $('#comic').attr('style', `background-image: url(./img/comic/${n}.jpg); background-size: cover; width: 100%; height: 100%`);
}