/**
 * Created by 张锦 on 2017/5/5.
 */
window.onload=function(){
  getUser();
}
function getCookie(){

}
function getUser(){
    var username = $.cookie('username');
    var password = $.cookie('password');
    var session = $.cookie('ASP.NET_SessionId');
    $.ajax({
        type:'GET',
        dataType:'jsonp',
        data:{
            username:username,
            password:password,
            session:session
        },
        success: function (data) {
            console.log(data);
        },
        url:"http://scoreapi.xiyoumobile.com/users/info"
    });
    $.ajax({
        type:'GET',
        dataType:'jsonp',
        data:{
            username:username,
            password:password,
            session:session
        },
        success: function (data) {
            console.log(data);
        },
        url:"http://scoreapi.xiyoumobile.com/score/year"
    });
}