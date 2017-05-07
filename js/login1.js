
window.onload = function(){
    getCodeimg();
}
var student = {
    username: '',
    password: '',
    session: '',
    vercode: ''
};
function getCodeimg () {
    $.ajax({
        type : 'GET',
        dataType : 'jsonp',
        success : function(verCode){
            if(verCode.error == false){
                $("#codeImg").attr('src',verCode.result.verCode);
                student.session = verCode.result.session;
            }
            else{
                alert("验证码获取失败");
            }
        },
        url : "http://scoreapi.xiyoumobile.com/users/verCode"
    });
}
function signUp (){
    this.student.username = $('#username').val();
    this.student.password = $('#password').val();
    this.student.vercode = $('#vercode').val();
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        data: {
            username: this.student.username,
            password: this.student.password,
            session: this.student.session,
            verCode: this.student.vercode
        },
        success: function(result){
            console.log(result);
            if(result.error == true){
                alert("请检查你的输入！");
            }
            else{
                console.log(result);
                $.cookie('username',student.username);
                $.cookie('password',student.password);
                $.cookie('ASP.NET_SessionId',result.result.session);
                window.location.href = "search.html";
            }
        },
        url: "http://scoreapi.xiyoumobile.com/users/login"
    });
}

