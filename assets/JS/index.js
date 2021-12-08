function buyItemInfo(idUser, buyArr) {
    this.idUser = idUser;
    this.buyArr = buyArr;
}
var userID;

//scroll
window.onscroll = function() {
    // console.info(document.documentElement.scrollTop);
    var header = document.getElementById('header');
    var contact = document.getElementById('contact');
    if (document.documentElement.scrollTop > 145 || document.body.scrollTop > 145) {
        header.style.position = "fixed";
        header.style.justifyContent = "space-between";
        // header.style.width = "100%";
        header.style.left = 0;
        header.style.right = 0;
        header.style.marginLeft = 0;
        header.style.marginRight = 0;
        header.style.backgroundColor = "rgba(116, 192, 35, 0.7)";
        header.style.zIndex = 9;
        contact.style.display = "flex";
    }
    else {
        header.style.position = "relative";
        header.style.justifyContent = "center";
        header.style.marginLeft = "10%";
        header.style.marginRight = "10%";
        header.style.backgroundColor = "#a2cd5a";
        contact.style.display = "none";
    }
}



// show slide 
var index = 0;
var arr_slider = [
    "./assets/IMG/IndexIMG/slider/slider1.png",
    "./assets/IMG/IndexIMG/slider/slider2.png",
    "./assets/IMG/IndexIMG/slider/slider3.png",
    "./assets/IMG/IndexIMG/slider/slider4.png",
]
var slider_show=document.getElementById('slider-item');
next = function() {
    index++;
    if (index >= arr_slider.length) index = 0;
    slider_show.src=arr_slider[index];
}
prev = function() {
    index--;
    if (index < 0) index = arr_slider.length - 1;
    slider_show.src=arr_slider[index];
}
setInterval(next,3000);

// mảng các item
function item(idItem, img, name, cost, quantity) {
    this.idItem = idItem;
    this.img = img;
    this.name = name;
    this.price = cost;
    this.quantity = quantity;
}
if(localStorage.getItem('foodList') !== []) {
    var item_foodArr = JSON.parse(localStorage.getItem('foodList'));

}
else 
var item_foodArr = [
    new item (1,'./assets/IMG/IndexIMG/food/img1.jpg',"Bánh tráng trộn", 35000,1),
    new item (2,'./assets/IMG/IndexIMG/food/img2.jpg',"Cút lộn xào me", 20000,1),
    new item (3,'./assets/IMG/IndexIMG/food/img3.jpg',"Trứng gà nướng", 5000,1),
    new item (4,'./assets/IMG/IndexIMG/food/img4.jpg',"Bánh tráng cuộn", 25000,1),
    new item (5,'./assets/IMG/IndexIMG/food/img5.jpg',"Tokbokki", 40000,1),
    new item (6,'./assets/IMG/IndexIMG/food/img6.jpg',"Hot dog", 25000,1),
    new item (7,'./assets/IMG/IndexIMG/food/img7.jpg',"Khoai tây chiên", 25000,1),
    new item (8,'./assets/IMG/IndexIMG/food/img8.jpg',"Xiên thập cẩm", 30000,1),
    new item (9,'./assets/IMG/IndexIMG/food/img9.jpg',"Xoài mắm ruốc", 30000,1),
    new item (10,'./assets/IMG/IndexIMG/food/img10.jpg',"Kimbap", 35000,1),
    new item (11,'./assets/IMG/IndexIMG/food/img11.jpg',"Kimbap chiên xù", 40000,1),
    new item (12,'./assets/IMG/IndexIMG/food/img12.jpg',"Xoài lắc", 35000,1),
    new item (13,'./assets/IMG/IndexIMG/food/img13.jpg',"Gà rán", 45000,1),
    new item (14,'./assets/IMG/IndexIMG/food/img14.jpg',"Gà rán sốt cay", 50000,1),
    new item (15,'./assets/IMG/IndexIMG/food/img15.jpg',"Pizza phô mai", 50000,1),
    new item (16,'./assets/IMG/IndexIMG/food/img16.jpg',"Pizza hải sản", 50000,1),
    new item (17,'./assets/IMG/IndexIMG/food/img17.jpg',"Bánh tráng lụi chấm me", 30000,1),
    new item (18,'./assets/IMG/IndexIMG/food/img18.jpg',"Bắp xào", 25000,1),
    new item (19,'./assets/IMG/IndexIMG/food/img19.jpg',"Bắp nướng mỡ hành", 7000,1),
    new item (20,'./assets/IMG/IndexIMG/food/img20.jpg',"Bánh mì bơ tỏi phô mai", 35000,1),
    new item (21,'./assets/IMG/IndexIMG/food/img21.jpg',"Bánh tráng nướng", 20000,1),
    new item (22,'./assets/IMG/IndexIMG/food/img22.jpg',"Cóc lắc", 35000,1),
    new item (23,'./assets/IMG/IndexIMG/food/img23.jpg',"Bạch tuộc xào cay", 40000,1),
    new item (24,'./assets/IMG/IndexIMG/food/img24.jpg',"Bánh mì trứng", 35000,1),
    new item (25,'./assets/IMG/IndexIMG/food/img25.jpg',"Râu bạch tuộc nướng", 40000,1),
    new item (26,'./assets/IMG/IndexIMG/food/img26.jpg',"Bánh xèo", 10000,1),
    new item (27,'./assets/IMG/IndexIMG/food/img27.jpg',"Bánh bao chiên", 15000,1),
    new item (28,'./assets/IMG/IndexIMG/food/img28.jpg',"Khoai tây lốc xoáy", 20000,1),
    new item (29,'./assets/IMG/IndexIMG/food/img29.jpg',"Cơm cháy chà bông", 30000,1),
    new item (30,'./assets/IMG/IndexIMG/food/img30.jpg',"Bánh tráng nướng Đà Lạt", 40000,1)
]; 
if(localStorage.getItem('drinkList') !== []) {
    var item_drinkArr = JSON.parse(localStorage.getItem('drinkList'));

}
else  
var item_drinkArr = [
    new item (31,'./assets/IMG/IndexIMG/drink/img1.jpg',"Pepsi", 10000,1),
    new item (32,'./assets/IMG/IndexIMG/drink/img2.jpg',"Coca Cola", 10000,1),
    new item (33,'./assets/IMG/IndexIMG/drink/img3.jpg',"Sprite", 10000,1),
    new item (34,'./assets/IMG/IndexIMG/drink/img4.jpg',"Trà tắc", 10000,1),
    new item (35,'./assets/IMG/IndexIMG/drink/img5.jpg',"Trà đào", 15000,1),
    new item (36,'./assets/IMG/IndexIMG/drink/img6.jpg',"Sữa tươi trân châu đường đen", 25000,1),
    new item (37,'./assets/IMG/IndexIMG/drink/img7.jpg',"Trà dâu", 25000,1),
    new item (38,'./assets/IMG/IndexIMG/drink/img8.jpg',"Nước ép lựu", 25000,1),
    new item (39,'./assets/IMG/IndexIMG/drink/img9.jpg',"Cà phê sữa", 20000,1),
    new item (40,'./assets/IMG/IndexIMG/drink/img10.jpg',"Đen đá không đường", 20000,1),
    new item (41,'./assets/IMG/IndexIMG/drink/img11.jpg',"Bạc xỉu", 25000,1),
    new item (42,'./assets/IMG/IndexIMG/drink/img12.jpg',"Matcha đá xay", 30000,1),
    new item (43,'./assets/IMG/IndexIMG/drink/img13.jpg',"Milo dầm", 35000,1),
    new item (44,'./assets/IMG/IndexIMG/drink/img14.jpg',"Sữa chua dầm hoa quả", 35000,1),
    new item (45,'./assets/IMG/IndexIMG/drink/img15.jpg',"Cam ép", 35000,1),
    new item (46,'./assets/IMG/IndexIMG/drink/img16.jpg',"Ổi ép", 35000,1),
    new item (47,'./assets/IMG/IndexIMG/drink/img17.jpg',"Bia Sài Gòn", 20000,1),
    new item (48,'./assets/IMG/IndexIMG/drink/img18.jpg',"Trà chanh", 15000,1),
    new item (49,'./assets/IMG/IndexIMG/drink/img19.jpg',"Sâm bổ lượng", 40000,1),
    new item (50,'./assets/IMG/IndexIMG/drink/img20.jpg',"Nước xanh", 40000,1),

];

var itemArr = [].concat(item_foodArr, item_drinkArr);
var arr= [].concat(itemArr);

//show list item
function showListItem(arr) {
    var temp='';
    var s='';
    for (index = 0; index < arr.length; index++ ) {
        temp = 
        '<div class="content-section">'+
            '<img src='+arr[index].img + ' class="content-section-img">'+
            '<h3 class="content-section-name">'+arr[index].name+'</h3>' +
            '<p class="content-section-cost"> Giá: '+arr[index].price+'đ </p>'+
            // '<button class="buy-btn" onClick="buySuccessful('+index+')">Thêm vào giỏ hàng</button>'+
            '<button class="buy-btn" onClick="showModal('+index+')">Thêm vào giỏ hàng</button>'+
        '</div>';
        s += temp;
        temp='';
    }
    document.getElementById("content").innerHTML=s;
}
//show modal 
function showModal(index) {
    s = 
    '<div class="modal" onclick="">'+
        '<div class="modal-container">'+
            '<div class="modal-close" onclick="closeModal()">'+
                '<i class="far fa-times-circle"></i>'+
            '</div>'+
            '<header class="modal-header">'+arr[index].name+
            '</header>'+
            '<div class="modal-body">'+
                '<div class="modal-img">'+
                    '<img src="'+arr[index].img+'">'+
                '</div>'+
                '<div class="modal-cost">'+
                    '<p>Giá: '+arr[index].price+'đ</p>'+
                    '<label for="quantity">Số lượng</label>'+
                    '<select name="quantity" id="modal-quantity">'+
                        '<option value="1">1</option>'+
                        '<option value="2">2</option>'+
                        '<option value="3">3</option>'+
                        '<option value="4">4</option>'+
                        '<option value="5">5</option>'+
                        '<option value="6">6</option>'+
                        '<option value="7">7</option>'+
                        '<option value="8">8</option>'+
                        '<option value="9">9</option>'+
                        '<option value="10">10</option>'+
                    '</select>'+
                '</div>'+
            '</div>'+
            '<div class="modal-add-cart-btn">'+
                '<button onclick="buySuccessful('+index+')">Thêm vào giỏ hàng</button>'+
            '</div>'+
        '</div>'+
    '</div>';
    document.getElementById("content").innerHTML+=s;
}

//close modal 
function closeModal() {
   var modal =  document.querySelector('.modal');
   modal.remove('modal');
}

//thêm vào giỏ hàng
var buyItemArr = [];
if(localStorage.getItem('buyItems') !== null) {
    let temp = JSON.parse(localStorage.getItem('buyItems'));
    temp.forEach(element => {
        buyItemArr.push(new item(element.idItem, element.img, element.name, element.price, element.quantity));
    });
}

function buySuccessful(index) {
    var flag = 0;
    alert("Đã thêm vào giỏ hàng");
    var quantity = document.getElementById('modal-quantity').value;
    for (var i = 0; i < buyItemArr.length; i++) 
        if (arr[index].idItem === buyItemArr[i].idItem ) {
            buyItemArr[i].quantity += parseInt(quantity);
            flag = 1;
            break;
        }
    if (flag === 0) {
        arr[index].quantity = parseInt(quantity);
        buyItemArr.push(arr[index]);
    }
    console.log(buyItemArr);
    closeModal();
}

var currentPage = 1; //page hiện tại
var perPage = 12; //Tổng số item trong page
var perPost = []; //item.slice(0,12); //mảng chưa perPage 
var totalPage;// = Math.ceil(arr.length / perPage);  //tổng số page
var array =[];
// phân trang 
function handlePage(key) {
    document.getElementById("content").innerHTML='';
    var currentPage;
    currentPage = key;
    //tách mảng item thành mảng 12 item slice(begin,end)
    var perPost = array.slice( (currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage);
    arr = [];
    arr = arr.concat(perPost);
    showListItem(arr);
}

function display(arr) {
    document.getElementById("content").innerHTML='';
    perPost = arr.slice(0,12); 
    array = [].concat(arr);
    totalPage = Math.ceil(arr.length / perPage);  
    //in số trang
    showListItem(perPost);
    document.getElementById("page").innerHTML = '';
    var s ='';
    for (i = 1; i <= totalPage; i++) 
        s+= '<button onclick="handlePage('+i+')"><a href="#content">'+i+'</a></button>';
    s = '<div class="page-list">'+s+'</div>';
    if (arr.length > perPage)  {
        document.getElementById("page").innerHTML = s;}

}
//chọn home/food/drink
function output(obj) {
    switch (obj.id) {
        case 'home' : {
            document.getElementById("content").innerHTML='';
            arr = [];
            arr = arr.concat(itemArr);
            display(arr);
            break;
        }
        case 'food': {
            document.getElementById("content").innerHTML='';
            arr = [];
            arr = arr.concat(item_foodArr);
            display(arr);
            break;
        }
        case 'drink' : {
            document.getElementById("content").innerHTML='';
            arr = [];
            arr = arr.concat(item_drinkArr);
            display(arr);
            break;
        }
    }
}
window.onload = display(itemArr);

// tìm kiếm trên thanh header
function search() {
    var isShow = document.getElementById('header-search').style.display;
    if (isShow === 'none') {
        document.getElementById('header-search').style.display = 'block';
        document.getElementById('search-icon').style.backgroundColor='#caff70';
        document.querySelector('#search-icon .search-icon').style.color='#000';
    }
    else {
        document.getElementById('header-search').style.display = 'none';
        document.getElementById('search-icon').style.backgroundColor='rgba(116, 192, 35, 0.3)';
        document.querySelector('#search-icon .search-icon').style.color='#fff';
    }
    document.getElementById('header-search').focus();
}

function searchData() {
    var valueSearch = document.getElementById('header-search').value;
    var dataFilter =[] ;
    for (index = 0; index < itemArr.length; index++) 
        if (itemArr[index].name.toUpperCase().includes(valueSearch.toUpperCase())) 
            dataFilter.push(itemArr[index]);
    document.getElementById('content').innerHTML = '';
    arr = [];
    arr = arr.concat(dataFilter);
    display(arr);
    if (dataFilter.length === 0)
        document.getElementById('content').innerHTML = 
        '<div class="error">'+
            '<p>Không tìm thấy sản phẩm nào :(</p>'+
            '<a href="#" onclick="display(itemArr)">Về trang chủ</a>'+
        '</div>';
    document.getElementById('header-search').style.display='none';
    document.getElementById('search-icon').style.backgroundColor='#a2cd5a';
    document.querySelector('#search-icon .search-icon').style.color='#fff';
    document.getElementById('header-search').value ='';
}
//tìm kiếm ở bandroll
function search1() {
    document.querySelector('.input-search').focus();
}

function searchData1() {
    var valueSearch = document.querySelector('.input-search').value;
    var dataFilter =[] ;
    for (index = 0; index < itemArr.length; index++) 
        if (itemArr[index].name.toUpperCase().includes(valueSearch.toUpperCase())) 
            dataFilter.push(itemArr[index]);
    document.getElementById('content').innerHTML = '';
    arr = [];
    arr = arr.concat(dataFilter);
    display(arr);
    if (dataFilter.length === 0)
        document.getElementById('content').innerHTML = 
        '<div class="error">'+
            '<p>Không tìm thấy sản phẩm nào :(</p>'+
            '<a href="#" onclick="display(itemArr)">Về trang chủ</a>'+
        '</div>';
    document.querySelector('.input-search').value ='';
}

//đưa buyItems localStorage
function upBuyItemsToLocalStorage() {
    localStorage.setItem('buyItems',JSON.stringify(buyItemArr));
    // qua trang cart
    location.href = './cart.html';
}

var flag = 1 // cờ để xem đăng nhập chưa
//inner tên user nếu đã đăng nhập
let userName = document.getElementById('user-name');
function innerUserName() {
    if (localStorage.getItem('userInfo') !== null) {
        let user = JSON.parse(localStorage.getItem('userInfo'))
        userName.innerHTML = user.userName;
        flag = 0;
    }
    else {
        userName.innerHTML = "Đăng nhập";
    }
}
window.onload = innerUserName();
//qua trang login nếu chưa đăng nhập, ngược lại hiện bảng menu
document.getElementById('user-name').onclick  = function() {
    if (flag === 1)
        location.href = './login.html';
    else {
        if (document.getElementById('user-menu').style.display === 'block')
            document.getElementById('user-menu').style.display = 'none'
        else
            document.getElementById('user-menu').style.display = 'block'
    }
}
// qua trang user
document.querySelector('.user-info').onclick = function() {
    location.href = './user.html';
}

// qua trang login/user bằng icon login ở header
document.querySelector('.login-icon').onclick = function() {
    if (flag === 1)
        location.href = './login.html';
    else 
        location.href = './user.html';
}
//logout
document.querySelector('.logout').onclick = function() {
    localStorage.removeItem('userInfo');
    location.href = './index.html';
}
//reponsive
document.getElementById('mobile-menu').onclick = function() {
    var mobileMenu = document.querySelector('.nav');
    if (mobileMenu.style.display === 'none')
        mobileMenu.style.display = 'block';
    else
        mobileMenu.style.display = 'none';
}

// Phân loại sản phẩm 
document.getElementById('select-title').onclick = function() {
    if (document.getElementById('select-body').style.display === 'none') {
        document.getElementById('select-body').style.display = 'block';
        document.getElementById('select-title').style.backgroundColor = '#79ac20';
        document.getElementById('select-title').style.color = '#fff';
    }
    else {
        document.getElementById('select-body').style.display = 'none';
        document.getElementById('select-title').style.color = '#79ac20';
        document.getElementById('select-title').style.backgroundColor = '#fff';
    }
}

function swap(array) {
    for( i = 0; i < array.length - 1; i++) 
        for (j = i + 1 ; j < array.length; j++) 
            if (array[i].price > array[j].price) {
                var price = array[i].price;
                array[i].price = array[j].price;
                array[j].price = price;
                var id = array[i].idItem;
                array[i].idItem = array[j].idItem;
                array[j].idItem = id;
                var name = array[i].name;
                array[i].name = array[j].name;
                array[j].name = name;
                var img1 = array[i].img;
                array[i].img = array[j].img;
                array[j].img = img1;
                var sl = array[i].quantity;
                array[i].quantity = array[j].quantity;
                array[j].quantity = sl;
            }
}
//thấp đến cao
document.getElementById('up').onclick = function() {
    document.getElementById('select-body').style.display = 'none';
    var array= [].concat(itemArr);
    swap(array);
    display(array);
}
//cao đến thấp 
document.getElementById('down').onclick = function() {
    document.getElementById('select-body').style.display = 'none';
    var array= [].concat(itemArr);
    swap(array);
    var array1 = [];
    for (i = array.length - 1; i >= 0; i--)
        array1.push(array[i]);
    display(array1);
}
//tùy chỉnh
document.querySelector('.go').onclick = function() {
    var begin = document.querySelector('.begin');
    var end = document.querySelector('.end');
    if (begin.value !== '' && end.value !== '')
        document.getElementById('select-body').style.display = 'none';
    var array= [].concat(itemArr);
    swap(array);
    var array2 = [];
    for (i = 0; i < array.length; i++)
        if (array[i].price >= parseInt(begin.value) && array[i].price <=  parseInt(end.value))
            array2.push(array[i]);
    display(array2);
    if (array2.length === 0)
        document.getElementById('content').innerHTML = "Không có sản phẩm nào :("
    begin.value = '';
    end.value = ''
}
