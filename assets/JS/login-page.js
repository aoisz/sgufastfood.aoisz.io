// chuyển đăng nhập <--> đăng ký
var login = document.querySelector('.login-form');
var signup = document.querySelector('.signup-form');
signup.style.display = 'none';

function switchForm() {
    if (signup.style.display === 'none') {
        signup.style.display = 'flex';
        login.style.display = 'none';
    }
    else {
        signup.style.display = 'none';
        login.style.display = 'flex';
    }
}

var userArr = [];
// window.onload = function() {
//     if(localStorage.getItem('accountList') !== null) {
//         userArr = JSON.parse(localStorage.getItem('accountList'))
//     }
// }
function updateAccountList() {
    localStorage.removeItem('accountList');
    localStorage.setItem('accountList', JSON.stringify(userArr));
}
// dùng localStorage để tạo tài khoản và lưu trữ
var id = 0;

//đăng kí
function saveData() {
    //let name, pass, cche// phone, email; //tạo biến
    var userName = document.getElementById("userName"); 
    var name = document.getElementById("name"); 
    var pass = document.getElementById("passWord"); 
    var checkPass = document.getElementById('checkPass');
    var phone = document.getElementById("phoneNumber"); 
    var email = document.getElementById("Mail"); 
    //kiểm tra
    var flag = 0;
    if (name.value === '') {
        alert("Nhập tên đăng nhập !!!");
        document.getElementById('userName').focus();
        flag = 1;
    }
    if (userName.value === '') {
        alert("Nhập tên đăng nhập !!!");
        document.getElementById('userName').focus();
        flag = 1;
    }
    if (pass.value === '') {
        alert("Nhập mật khẩu !!!");
        document.getElementById('passWord').focus();
        flag = 1;
    } 
    else if (checkPass.value === '') {
            alert("Nhập mật lại khẩu !!!");
            document.getElementById('checkPass').focus();
            flag = 1;
    } 
    if (phone.value === '') {
        alert("Nhập số điện thoại !!!");
        document.getElementById('phoneNumber').focus();
        flag = 1;
    } 
    if (email.value === '') {
        alert("Nhập địa chỉ email !!!");
        document.getElementById('Mail').focus();
        flag = 1;
    } 
    if (pass.value !== checkPass.value && pass.value !== '' && checkPass.value !== '') {
        alert("Nhập mật khẩu không trùng khớp !!!");
        document.getElementById('passWord').value = '';
        document.getElementById('checkPass').value = '';
        document.getElementById('passWord').focus();
        flag = 1;
    } 
    if (flag === 1) return;
    // lấy ds tài khoản từ localStorage và kiểm tra tài khoản tồn tại chưa
 
    if(localStorage.getItem('accountList') !== null) {
        var temp = JSON.parse(localStorage.getItem('accountList'));
        userArr = userArr.concat(temp);
    }
    for (var index = 0; index < userArr.length; index++) {
        if (userArr[index].userName === userName.value) {
            alert("Tên đăng nhập đã tồn tại, vui lòng chọn tên khác !!!");
                document.getElementById('userName').value ='';
                document.getElementById('userName').focus();
                return false;
        }
        if (userArr[index].idUser > id) 
            id = userArr[index].idUser;
    }
    alert("Đăng ký thành công !!");
    // id += 1;
    var temp1 = {id: userArr.length, name: name.value, userName: userName.value, password: pass.value, phone: phone.value, email: email.value};    
    userArr.push({id: userArr.length, name: name.value, userName: userName.value, password: pass.value, phone: phone.value, email: email.value, userType: 'user'});
    console.log(userArr)
    localStorage.setItem('accountList', JSON.stringify(userArr));
    //đẩy user infor lên localStorage cho trang user
    localStorage.setItem('userInfo', JSON.stringify(temp1));

    //chuyển qua trang index
    // location.href = './index.html';
    switchForm();
}

//đăng nhập

function checkLogin() {
    var name = document.getElementById('checkIpname');
    var pass = document.getElementById('checkIppass');
    if(localStorage.getItem('accountList') !== null) {
        var temp = JSON.parse(localStorage.getItem('accountList'));
        userArr = userArr.concat(temp);
        console.log(userArr)
    }
    var index = 0
    for (; index < userArr.length; index++)
        if (userArr[index].userName === name.value)
            if (userArr[index].password === pass.value) {
                //đẩy user infor lên localStorage cho trang user
                localStorage.setItem('userInfo', JSON.stringify(userArr[index])); 
                //chuyển qua trang index
                if(userArr[index].userType == 'admin') {
                    alert("Bạn đã đăng nhập tài khoản admin, mời bạn qua trang quản lí");
                    location.href = './admin.html';
                    return;
                }
                location.href = './index.html';
                return;
            }
            else {
                alert("Nhập sai mật khẩu !!!");
                document.getElementById('checkIppass').value = '';
                document.getElementById('checkIppass').focus;
                return;
            }
    alert("Tài khoản không tồn tại !!!");
    document.getElementById('checkIppass').value = '';
    document.getElementById('checkIpname').value = '';
}

//về trang chủ 
document.getElementById('goIndex').onclick = function() {
    location.href = './index.html';
}

