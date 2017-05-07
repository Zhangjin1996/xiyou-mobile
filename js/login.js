// /**
//  * Created by 张锦 on 2017/5/5.
//  */
// window.onload=function(){
//     getCodeimg();
//     signUp();
// }
// var student={
//     username:'',
//     password:'',
//     session:'',
//     vercode:''
// };
//
//
// //调用验证码的接口
// function getCodeimg(){
//     $.ajax({
//         type:'GET',
//         dataType:'jsonp',
//         success:function(verCode){
//             if(verCode.error==false){
//                 $("#codeImg").attr('src',verCode.result.verCode);
//                 student.session=verCode.result.session;
//             }
//             else{
//                 alert("验证码获取失败");
//             }
//         },
//         url:"http://scoreapi.xiyoumobile.com/users/verCode"
//     });
// }
//
//
//
// //调用登录的接口
// function signUp(){
//     this.student.username=$('#username').val();
//     this.student.password=$('#password').val();
//     this.student.vercode=$('#vercode').val();
//     $.ajax({
//         type:'GET',
//         dataType:'jsonp',
//         data:{
//             username:this.student.username,
//             password:this.student.password,
//             session:this.student.session,
//             vercode:this.student.vercode
//         },
//         success:function(result){
//             if(result.error==false){
//                 console.log(result);
//                 $.cookie('username',student.username);
//                 $.cookie('password',student.password);
//                 $.cookie('ASP.NET_SessionId',result,result.session)
//                 window.location.href="search.html";
//             }
//             else{
//                alert("输入错误，请重新输入")
//             }
//         },
//         url: "http://scoreapi.xiyoumobile.com/users/login"
//     });
// }
//
//
