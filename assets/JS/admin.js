var itemPlace = document.getElementById('item_place');
var productOpt = document.getElementById('product');
var accountOpt = document.getElementById('account');
var staticOpt = document.getElementById('statictic');
var addBtn = document.getElementById('add_btn');
var acceptRemoveItemBtn = document.getElementById('remove-item_modal_accept');
var acceptAddAccountBtn = document.getElementById('add-account_modal_done');
var acceptAddProductBtn = document.getElementById('add-product_modal_done');
var logOutBtn = document.getElementById('log-out');
var invoiceDetails = document.getElementById('manage_modal_container');
var editAccBtns = [];
var showOpt = 'product';
var addAccModalMode = 'add';
var addProductModalMode = 'add';
var temp = '';
const day = new Date();

var accountList = [
    {id: 0, name : 'Admin', userName: 'admin', password: '1', phone: '1133', email: 'admin@gmail.com', userType: 'admin'},
    {id: 1, name : 'test', userName: 'test', password: '1', phone: '1133', email: 'user@gmail.com', userType: 'user'}
];

function item(idItem, img, name, cost, quantity) {
    this.id = idItem;
    this.img = img;
    this.name = name;
    this.price = cost;
    this.quantity = quantity;
}

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
// upProductList();
var productList = [];

var invoiceList = [];
function updateInvoiceList() {
    if(localStorage.getItem('order') !== undefined) {
        invoiceList = JSON.parse(localStorage.getItem('order'));
    }
}

function upInvoiceList() {
    localStorage.setItem('order', JSON.stringify(invoiceList));
}


function upProductList() {
    localStorage.removeItem('foodList');
    localStorage.removeItem('drinkList');
    localStorage.setItem('foodList', JSON.stringify(item_foodArr));
    localStorage.setItem('drinkList', JSON.stringify(item_drinkArr));
}

function updateProductList() {
    if(localStorage.getItem('foodList') !== null) {
        item_foodArr = JSON.parse(localStorage.getItem('foodList'));
    }
    if(localStorage.getItem('drinkList') !== null) {
        item_drinkArr = JSON.parse(localStorage.getItem('drinkList'));
    }
    productList = [].concat(item_foodArr,item_drinkArr);
}

function upAccountList() {
    localStorage.removeItem('accountList');
    localStorage.setItem('accountList', JSON.stringify(accountList));
}
// upAccountList()

function updateAccountList() {
    if(localStorage.getItem('accountList') !== null) {
        accountList = JSON.parse(localStorage.getItem('accountList'));
    }
}

// upAccountList();
// upInvoiceList();
// upProductList();

window.onload = function() {
    updateAccountList();
    updateProductList();
    updateInvoiceList();
    upAccountList();
    upProductList();
    upInvoiceList();
    showList();
}

function showAccList() {
    updateAccountList();
    let show = '<table id="item_list">' +
                    '<tr class="item">' +
                        '<th class="font-bold name item-member">ID</th>' +
                        '<th class="font-bold name item-member">Tên</th>' +
                        '<th class="font-bold item-member">Tên tài khoản</th>' +
                        '<th class="font-bold item-member">Mật khẩu</th>' +
                        '<th class="font-bold item-member">Phone</th>' +
                        '<th class="font-bold item-member">Email</th>' +
                        '<th class="font-bold item-member">Loại tài khoản</th>' +
                    '</tr>';

    accountList.forEach(element => {
        show += '<tr class="item">'
        show += '<td class="item-member">'+ element.id +'</td>';
        show += '<td class="item-member">'+ element.name +'</td>';
        show += '<td class="item-member">'+ element.userName +'</td>';
        show += '<td class="item-member">'+ element.password +'</td>';
        show += '<td class="item-member">'+ element.phone +'</td>';
        show += '<td class="item-member">'+ element.email +'</td>';
        show += '<td class="item-member">'+ element.userType +'</td>';
        show += '<td><a href="#" data-value="'+ element.id +'" onclick="editAccountInfor(this)" class="edit_btn">Sửa</a></td>';
        show += '<td><a href="#" data-value="'+ element.id +'" onclick="showDelModal(this)" class="del_btn">X</a></td>';
        show += '</tr>';
    });
    show += '</table>';
    itemPlace.innerHTML = show;
}

function showProductList() {
    updateProductList();
    let show = '<table id="item_list">' +
                    '<tr class="item">' +
                        '<th class="font-bold name item-member">ID</th>' +
                        '<th class="font-bold item-member">Tên sản phẩm</th>' +
                        '<th class="font-bold item-member">Giá tiền</th>' +
                        '<th class="font-bold item-member">Ảnh</th>' +
                    '</tr>';
    productList.forEach(element => {
        show += '<tr class="item">'
        show += '<td class="item-member">'+ element.id +'</td>';
        show += '<td class="item-member">'+ element.name +'</td>';
        show += '<td class="item-member">'+ element.price +'</td>';
        show += '<td class="item-member"><img class="product-img" src="'+ element.img +'" alt="product image"></img></td>';
        show += '<td><a href="#" data-value="'+ element.id +'" onclick="editProductInfor(this)" class="edit_btn">Sửa</a></td>';
        show += '<td><a href="#" data-value="'+ element.id +'" onclick="showDelModal(this)" class="del_btn">X</a></td>';
        show += '</tr>';
    });
    show += '</table>';
    itemPlace.innerHTML = show;
}

function showBoughtItemList() {
    let show = '<table id="item_list">' +
                    '<tr class="item">' +
                        '<th class="font-bold name item-member">Mã hóa đơn</th>' +
                        '<th class="font-bold item-member">Mã khách hàng</th>' +
                        '<th class="font-bold item-member">Ngày thanh toán</th>' +
                        '<th class="font-bold item-member">Tổng tiền</th>' +
                        '<th class="font-bold item-member">Trạng thái</th>' +
                    '</tr>';
    invoiceList.forEach(element => {
        show += '<tr class="item">'
        show += '<td class="item-member">'+ element.invoiceId +'</td>';
        show += '<td class="item-member">'+ element.idUser +'</td>';
        show += '<td class="item-member">'+ element.invoiceDate +'</td>';
        show += '<td class="item-member">'+ element.totalPrice +'</td>';
        show += '<td class="item-member">'+ element.status +'</td>';
        show += '<td><a href="#" data-value="'+ element.invoiceId +'" onclick="showInvoice(this)" class="edit_btn">Xem</a></td>';
        show += '<td><a href="#" data-value="'+ element.invoiceId +'" onclick="showDelModal(this)" class="del_btn">Xóa</a></td>';
        show += '</tr>';
    });
    show += '</table>';
    itemPlace.innerHTML = show;
}

function showList() {
    productOpt.onclick = function() {
        showOpt = 'product';
        addBtn.style.display = 'block';
        showProductList();
    }
    accountOpt.onclick = function() {
        showOpt = 'account';
        addBtn.style.display = 'block';
        showAccList();
    }
    staticOpt.onclick = function() {
        showOpt = 'bought';
        addBtn.style.display = 'none';
        showBoughtItemList();
    }
    if(showOpt === 'account') {
        showAccList();
    } 
    else if(showOpt === 'product'){
        showProductList();
    }
    else {
        showBoughtItemList();
    }
}

function removeElement(element) {
    let opt = showOpt;
    let value = element.getAttribute('data-value');
    if(opt === 'product') {
        for(let i = 0; i < item_foodArr.length; i++) {
            if(item_foodArr[i].id === parseInt(value)) {
                item_foodArr.splice(i,1);
                item_drinkArr.forEach(element => {
                    element.id = element.id - 1;
                });
                break;
            }
        }
        for(let i = 0; i < item_drinkArr.length; i++) {
            if(item_drinkArr[i].id === parseInt(value)) {
                item_drinkArr.splice(i,1);
                break;
            }
        }
    }
    else if(opt === 'account') {
        for(let i = 0; i < accountList.length; i++) {
            if(accountList[i].id === parseInt(value)) {
                accountList.splice(i,1);
            }
        }
    }
    else if(opt === 'bought') {
        for(let i = 0; i < invoiceList.length; i++) {
            if(invoiceList[i].invoiceId === parseInt(value)) {
                invoiceList.splice(i,1);
            }
        }
    }
    upProductList();
    upAccountList();
    upInvoiceList();
    alert('Xóa thành công!');
    showList();
}
function acceptDelete(element) {
    acceptRemoveItemBtn.onclick = function() {
        removeElement(element);
        closeRemoveItemModal();
    }
}
function showDelModal(element) {
    document.getElementById('remove-item_modal_container').style.display = 'flex';
    acceptDelete(element);
}

addBtn.onclick = function() {
    if(showOpt === 'product') {
        document.getElementById('add-products_modal_container').style.display = 'flex';
        document.getElementById('product-type').style.display = 'flex';
        document.getElementById('product_name').value = '';
        document.getElementById('product_price').value = '';
        document.getElementById('product_img').value = '';
    }
    else {
        document.getElementById('add-account_modal_container').style.display = 'flex';
        document.getElementById('account_name').value = '';
        document.getElementById('account_user-name').value = '';
        document.getElementById('account_password').value = '';
        document.getElementById('account_phone').value = '';
        document.getElementById('account_email').value = '';
    }
};

//------------------- Remover Item -------------------
var removeItemModalCloseBtns = [
    document.getElementById('modal_remover_out'),
    document.getElementById('remove-element_modal_cancel')
];

function closeRemoveItemModal() {
    document.getElementById('remove-item_modal_container').style.display = 'none';
}

removeItemModalCloseBtns.forEach(element => {
    element.addEventListener('click',closeRemoveItemModal)
});
//----------------------------------------------------

// ------------------- Edit product -------------------
function editProductInfor(element) {
    addProductModalMode = 'edit';
    document.getElementById('product-type').style.display = 'none';
    showAddProductModal(element);
}
// ----------------------------------------------------

// ------------------- Edit account -------------------
function editAccountInfor(element) {
    addAccModalMode = 'edit';
    showAddAccountModal(element);
}
// ----------------------------------------------------

//------------------ Add Product Item ------------------
var addItemModalCloseBtns = [
    document.getElementById('modal_add-product_out'),
    document.getElementById('add-product_modal_cancel')
];

function closeAddProductModal() {
    document.getElementById('add-products_modal_container').style.display = 'none';
}

function showAddProductModal(element) {
    document.getElementById('add-products_modal_container').style.display = 'flex';
    temp = element.getAttribute('data-value');
    productList.forEach(element => {
        if(element.id === parseInt(temp)) {
            document.getElementById('product_name').value = element.name;
            document.getElementById('product_price').value = element.price;
            document.getElementById('product_img').value = element.img;
        }
    })
}

addItemModalCloseBtns.forEach(element => {
    element.addEventListener('click',closeAddProductModal);
});

function alertEmpty(element) {
    if(element.name === 'product_name') {
        alert('Chưa nhập tên sản phẩm');
    }
    if(element.name === 'product_price') {
        alert('Chưa nhập giá tiền');
    }
    if(element.name === 'product_quantity') {
        alert('Chưa nhập số lượng');
    }
    if(element.name === 'product_img') {
        alert('Chưa truyền đường dẫn ảnh');
    }
}

acceptAddProductBtn.onclick = function() {
    let inputArray = document.querySelectorAll('#product-input .input_item > input');
    let type = document.querySelector('input[name="product-type"]:checked');
    let productType = document.getElementById('product-type');
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].value === '') {
            inputArray[i].focus();
            alertEmpty(inputArray[i]);
            return false;
        }
    }
    if(addProductModalMode === 'add') {
        if(type.value === 'food') {
            let i = item_foodArr.length;
            item_foodArr.push({id: i, name: inputArray[0].value, price: inputArray[1].value, img: inputArray[2].value});
            item_drinkArr.forEach(element => {
                element.id++;
            })
            upProductList();
        } else {
            let i = item_drinkArr.length;
            item_drinkArr.push({id: i, name: inputArray[0].value, price: inputArray[1].value, img: inputArray[2].value});
            item_foodArr.forEach(element => {
                element.id++;
            })
            upProductList();
        }
        // let obj = {id: i, name: inputArray[0].value, price: inputArray[1].value, img: inputArray[2].value};
        alert('Thêm sản phẩm thành công!');
    } 
    if(addProductModalMode === 'edit') {
        productList.forEach(element => {
            if(element.id === parseInt(temp)) {
                element.name = inputArray[0].value;
                element.price = inputArray[1].value;
                element.img = inputArray[2].value;
            }
        });
        alert('Sửa thành công!');
    }
    upProductList();
    closeAddProductModal();
    showList();
    addProductModalMode = 'add';
}

//----------------------------------------------------

// ----------------- Add Account Item -----------------
var addAccountModalCloseBtns = [
    document.getElementById('modal_add-account_out'),
    document.getElementById('add-account_modal_cancel'),
];

function closeAddAccountModal() {
    document.getElementById('add-account_modal_container').style.display = 'none';
}

function showAddAccountModal(element) {
    document.getElementById('add-account_modal_container').style.display = 'flex';
    temp = element.getAttribute('data-value');
    accountList.forEach(element => {
        if(element.userName === temp) {
            document.getElementById('account_name').value = element.name;
            document.getElementById('account_user-name').value = element.userName;
            document.getElementById('account_password').value = element.password;
            document.getElementById('account_phone').value = element.phone;
            document.getElementById('account_email').value = element.email;
        }
    })
}

addAccountModalCloseBtns.forEach(element => {
    element.addEventListener('click', closeAddAccountModal);
});

function alertEmptyValue(element) {
    if(element.name === 'account_name') {
        alert('Chưa nhập tên');
    }
    if(element.name === 'account_user-name') {
        alert('Chưa nhập tên tài khoản');
    }
    if(element.name === 'account_password') {
        alert('Chưa nhập mật khẩu');
    }
}

acceptAddAccountBtn.onclick = function() {
    let inputArray = document.querySelectorAll('#account-input .input_item > input');
    let type = document.querySelector('input[name="account_type"]:checked');
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].value === '') {
            inputArray[i].focus();
            alertEmptyValue(inputArray[i]);
            return false;
        }
    }
    if(type == null) {
        alert('Chưa chọn loại tài khoản');
        return false;
    }
    console.log(addAccModalMode)
    const i = accountList.length;
    if(addAccModalMode === 'add') {
        accountList.push({id: i, name: inputArray[0].value, userName: inputArray[1].value, password: inputArray[2].value, phone: inputArray[3].value, email: inputArray[4].value, userType: type.value});
        alert('Thêm tài khoản thành công');
    } 
    if(addAccModalMode === 'edit') {
        accountList.forEach(element => {
            if(element.userName === temp) {
                element.name = inputArray[0].value;
                element.userName = inputArray[1].value;
                element.password = inputArray[2].value;
                element.phone = inputArray[3].value;
                element.email = inputArray[4].value;
                element.userType = type.value;
            }
        });
        alert('Sửa thành công');
    }
    upAccountList();
    closeAddAccountModal();
    showList();
    addAccModalMode = 'add';
};
// ----------------------------------------------------

// ---------------------- Static ----------------------
function showInvoiceDetail(array) {
    let show = '<table id="item_list" style="padding-bottom: 36px">' +
                    '<tr class="item">' +
                    '<th class="font-bold name item-member">ID</th>' +
                    '<th class="font-bold item-member">Tên sản phẩm</th>' +
                    '<th class="font-bold item-member">Giá tiền</th>' +
                    '<th class="font-bold item-member">Số lượng</th>' +
                    '<th class="font-bold item-member">Tổng tiền</th>' +
                    '<th class="font-bold item-member">Ảnh</th>' +
                    '</tr>';
    
    array.forEach(element => {
        show += '<tr class="item">' +
        '<td class="item-member">'+ element.idItem +'</td>' +
        '<td class="item-member">'+ element.name +'</td>' +
        '<td class="item-member">'+ element.price +'</td>' +
        '<td class="item-member">'+ element.quantity +'</td>' +
        '<td class="item-member">'+ element.quantity * element.price +'</td>' +
        '<td class="item-member"><img class="product-img" src="'+ element.img +'" alt="product image"></img></td>' +
        '</tr>';
    });
    show += '</table>';
    document.getElementById('manager-content').innerHTML = show;
}

function showInvoice(element) {
    document.getElementById('manage_modal_container').style.display = 'flex';

    let id = element.getAttribute('data-value');
    invoiceList.forEach(element => {
        if(element.invoiceId === parseInt(id)) {
            showInvoiceDetail(element.arrayOfItem);
            console.log(element.arrayOfItem)
        }
    })
}

function closeManagerModal() {
    document.getElementById('manage_modal_container').style.display = 'none';
}
// ----------------------------------------------------

// ---------------------- Log Out ---------------------
logOutBtn.onclick = function() {
    localStorage.removeItem('userInfo');
    location.href = './index.html';
}
// ----------------------------------------------------