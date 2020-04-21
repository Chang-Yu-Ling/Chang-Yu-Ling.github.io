$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()
//====== ajax打包資料 ====================================================================================================
$.get('./step5', {                   //notice the link from html `fName` to server `fname` (`fName` in `./dist/exercise.html` vs. `fname` in `./ser.js`)
  fname: $('input[name="fName"]').val(),
  lname: $('input[name="lName"]').val(),
//fname: $("fName").val(),lname: $("lName").val(),
})

//====== ajax資料回顯 ====================================================================================================
$.get('./step5', {
  fname: $('#ajax-form input[name=fName]').val(),
  lname: $('#ajax-form input[name=lName]').val(),
}, (data) => {
$('#ajax-output').html('<font color="#ffffff">'+ data+ '</font>');                  //回傳歡迎詞
$('#out_1').css( "display", "none" );
$('#out_2').css( "display", "block" );
$('#out').css( "display", "block" );

setTimeout(() => {    //update `div#ajax-output` first                                          //回傳信用卡頁
$('#out').css( "display", "none" );
$('#out_3').css( "display", "block" );
$('#out_sub').css( "display", "block" );
$('#bottom').css( "display", "block" );
$('#Header').html(document.getElementById("ajax-output").textContent.substring(14,document.getElementById("ajax-output").textContent.indexOf("!")
));

}, 1500)
})

//====== ajax同步等待loading ====================================================================
setTimeout(() => {    //update `div#ajax-output` first
 $('#ajax-output').html('loading')
}, 0)
  })
});
