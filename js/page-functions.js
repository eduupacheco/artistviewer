var TOTALPAGES = 9;
var ACTUALPAGE = 1;

$('#pad-right').click(function (e) { 
    e.preventDefault();
    (ACTUALPAGE+1 > TOTALPAGES)? ACTUALPAGE=1 : ACTUALPAGE++;
    setPage(ACTUALPAGE);
});

$('#pad-left').click(function (e) { 
    e.preventDefault();
    (ACTUALPAGE-1 < 1)? ACTUALPAGE=TOTALPAGES : ACTUALPAGE--;
    setPage(ACTUALPAGE);
    console.log(ACTUALPAGE);
});

function setPage(n){
    $('#cover').html(`<img class="my-auto" src="./img/designs/${n}.jpg">`);
}