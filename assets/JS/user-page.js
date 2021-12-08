var userInfo = JSON.parse(localStorage.getItem('userInfo'));
console.log(userInfo);
document.getElementById('name').value = userInfo.name;
document.getElementById('userName').value = userInfo.userName;
document.getElementById('password').value = userInfo.password;
document.getElementById('phone').value = userInfo.phone;
document.getElementById('email').value = userInfo.email;

function logout() {
    localStorage.removeItem('userInfo');
    location.href = './index.html';
}
//về trang chủ
document.getElementById('goIndex').onclick = function() {
    localStorage.setItem('userName', JSON.stringify(userInfo.name)); 
    location.href = './index.html';
}
//xem đơn hàng
var temp = [];
var orders = JSON.parse(localStorage.getItem('order'));
var orderList = [];
for (i = 0; i < orders.length; i++) 
    if (orders[i].idUser === userInfo.id)
        orderList.push(orders[i]);

function showOrder() {
    var count = 0;
    if (orderList.length === 0) {
        alert("Chưa có đơn hàng nào !!");
        return;
    }
    var s = '';
    for (i = 0; i < orderList.length; i++) {
        s += 
        '<div id="order">' +
            '<p>Đơn hàng '+ (i+1) +'</p>'+
            '<ul>'+
                '<li>Ngày mua: '+ orderList[i].invoiceDate + '</li>'+
                '<li>Tổng tiền: ' + orderList[i].totalPrice + '</li>'+
                '<li id ="view" onclick="viewOrder('+i+')"><button>Xem chi tiết</button></li>'+
            '</ul>'+
        '</div>';
    }
    s = 
    '<div id="order-wrap">' +
        '<div id="order-list">' +
            '<div id="close" onclick="closeOrderList()">'+
                '<i class="far fa-times-circle"></i>'+
            '</div>' + s +
        '</div>' +
    '</div>';
    document.getElementById('wrap').innerHTML +=s;
}
//close xem đơn hàng
function closeOrderList() {
    var ord =  document.getElementById('order-wrap');
    ord.remove('order-wrap');
 }
 //Xem chi tiết đơn hàng
 function viewOrder(i) {
     var s = '';
    temp = [];
    temp = orderList[i].arrayOfItem
    closeOrderList();
    for (j = 0; j < temp.length; j++)
        s += 
            '<div class="element">' +
                '<p>Tên: '+temp[j].name+'</p>' +
                '<p>Giá: '+temp[j].price+'</p>' +
                '<p>Số lượng: '+temp[j].quantity+'</p>'+
            '</div>';
    s =   
        '<div id="order-wrap">' +
            '<div id="view-order">' +
                '<div id="close-view-order" onclick="closeViewOrder()">' +
                    '<i class="far fa-times-circle"></i>' +
                '</div>' +
                '<div id="view-order-title">'+
                    '<p>CHI TIẾT ĐƠN HÀNG</p>'+
                '</div>'+s+
            '</div>'+
        '</div>';
    document.getElementById('wrap').innerHTML +=s;
 }
 //đóng xem chi tiết đơn hàng
function closeViewOrder() {
    var ord =  document.getElementById('order-wrap');
    ord.remove('order-wrap');
    showOrder();
}