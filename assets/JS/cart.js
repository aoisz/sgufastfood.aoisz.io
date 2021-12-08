var innerPlace = document.getElementById('table');
var totalPricePlace = document.getElementById('total-price-number');
var backBtn = document.getElementById('backBtn');
var accountPlace = document.getElementById('account');
var orderBtn = document.getElementById('order-btn');
var invoiceID = 1;
var deleteBtns;
var plusBtnList = [];
var minusBtnList = [];
var totalPrice;

var itemList = [];
if(localStorage.getItem('buyItems') !== null) {
    itemList = JSON.parse(localStorage.getItem('buyItems'));
}

var account;
if(localStorage.getItem('userInfo') !== null) {
    account = JSON.parse(localStorage.getItem('userInfo'));
};


function invoiceItem(arrayOfItem, invoiceId, idUser, invoiceDate, totalPrice, status) {
    this.arrayOfItem = arrayOfItem;
    this.invoiceId = invoiceId;
    this.idUser = idUser;
    this.invoiceDate = invoiceDate;
    this.totalPrice = totalPrice;
    this.status = status;
}

function buyItem(id, name, price, img, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.quantity = quantity;
}

function listItem() {
    let sum = 0;
    let show = '';
    let noItemShow = document.getElementById('no-item');
    show = '<table id="table"><tr id="table-header" class="item"><th class="item-member">Ảnh</th><th class="item-member">Tên sản phẩm</th><th class="item-member">Giá tiền</th><th class="item-member">Số lượng</th><th class="item-member">Thành tiền</th><th class="item-member"></th></tr>';
    
    if(itemList.length === 0) {
        innerPlace.innerHTML = show + '</table>'
        noItemShow.style.display = 'flex';
    }
    else {
        noItemShow.style.display = 'none';
        itemList.forEach(element => {
            sum += element.quantity * parseInt(element.price);
            
            show += '<tr class="item">';
            show += '<th class="item-member img"><img src="' + element.img + '" alt="item-image"></th>';
            show += '<th class="item-member">' + element.name + '</th>';
            show += '<th class="item-member">' + element.price + '</th>';
            show += '<th class="item-member quantity">';
            show +=   '<p class="minus"><i data-value="'+ element.id +'" class="fas fa-minus-circle" onclick="reducePrice(this)"></i></p>';
            show +=   '<input type="text" name="quantity" readonly value="' + element.quantity + '" class="quanity">';
            show +=   '<p class="plus"><i data-value="'+ element.id +'" class="fas fa-plus-circle" onclick="increasePrice(this)"></i></p></th>';
            show += '<th class="total-price-item item-member">'+ element.quantity * parseInt(element.price) +'</th>';
            show += '<th data-value="'+ element.id +'" class="item-member del-btn" onclick="showDelModal(this)"><i class="fas fa-trash"></i></th>';
            show += '</tr>';
        });
    
        show += '</table>';
        totalPricePlace.innerHTML = sum;
        totalPrice = sum;
        plusBtnList = document.querySelectorAll('.plus');
        minusBtnList = document.querySelectorAll('.minus');
    }
    innerPlace.innerHTML = show;
    if(account === undefined) {
        accountPlace.innerHTML = '<i class="far fa-user"></i><p>Đăng nhập</p>';
    }
    else {
        accountPlace.innerHTML = '<i class="far fa-user"></i><p>'+ account.name +'</p>'
    }
}

listItem();

function changeTotalPrice() {
    let sum = 0;
    itemList.forEach(element => {
        sum += element.quantity;
    });
}

function increasePrice(element) {
    let id = element.getAttribute('data-value');
    itemList.forEach(n => {
        if(n.id === parseInt(id)) {
            n.quantity++;
        }
    });
    listItem();
}


function reducePrice(element) {
    let id = element.getAttribute('data-value');
    itemList.forEach(n => {
        if(n.quantity <= 1) {
            return 1;
        }
        if(n.id === parseInt(id)) {
            n.quantity--;
        }
    });
    listItem();
}

function removeItem(item) {
    let id = item.getAttribute('data-value');
    for(let i = 0; i < itemList.length; i++) {
        if(itemList[i].id === parseInt(id)) {
            itemList.splice(i,1);
            listItem();
            return 1;
        }
    };
}

function showDelModal(item) {
    let acceptBtn = document.getElementById('accept-remove');
    let cancelBtn = document.getElementById('cancel-remove');
    document.getElementById('remove-item-modal').style.display = 'flex';
    itemList.forEach(element => {
        if(element.id === parseInt(item.getAttribute('data-value'))) {
            document.getElementById('modal-content').innerHTML = `Chắc chắn xóa '${element.name}' ?`;
        }
    })
    cancelBtn.onclick = function() {
        document.getElementById('remove-item-modal').style.display = 'none';
        return 1;
    }
    acceptBtn.onclick = function() {
        alert('Xóa thành công!');
        removeItem(item);
        document.getElementById('remove-item-modal').style.display = 'none';
    }
}

backBtn.onclick = function() {
    localStorage.setItem('buyItems',JSON.stringify(itemList));
    location.href = './index.html';
}

accountPlace.onclick = function() {
    if(account === undefined) {
        location.href = './login.html';
    }
    else {
        location.href = './user.html';
    }
}

orderBtn.onclick = function() {
    if(account === undefined) {
        alert('Chưa đăng nhập!');
        return false;
    }
    if(itemList.length > 0){
        let buyList = [];
        itemList.forEach(element => {
            buyList.push(new buyItem(element.id, element.name, element.price, element.img, element.quantity));
        });
        let today = new Date();
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

        let invoiceList = [];
        if(JSON.parse(localStorage.getItem('order')) !== null) {
            invoiceList = JSON.parse(localStorage.getItem('order'));
        }

        invoiceList.push(new invoiceItem(buyList, invoiceID++, account.id, date, totalPrice, 'Chưa thanh toán'));
        itemList = [];
        listItem();
        localStorage.setItem('order',JSON.stringify(invoiceList));
        localStorage.removeItem('buyItems');
        totalPricePlace.innerHTML = '';
        alert('Đặt hàng thành công!');
    }
    else {
        alert('Không có sản phẩm nào!');
    }
    // location.href = './index.html';
}