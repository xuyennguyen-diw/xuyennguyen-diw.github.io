// JavaScript Document
//mang lắng nghe hành động của button có class shop-item-button
var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    //console.log(title,price,imageSrc)
    addItemToCart(title, price, imageSrc) //thêm vào giỏ hàng
    updateCartTotal()                     //Cập nhật giá tiền
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')//tạo thẻ div
    cartRow.classList.add('cart-row')          //tạo dòng cho giỏ hàng
    var cartItems = document.getElementsByClassName('cart-items')[0] //tạo sp đầu tiên trong giỏ
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    //kiểm tra xem sp có giỏ hàng chưa
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Sản phẩm này bạn đã chọn trong giỏ hàng')
            return
        }
    }
    var cartRowContents = `
       <div class="cart-item cart-column">
           <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
           <span class="cart-item-title">${title}</span>
       </div>
       <span class="cart-price cart-column">${price}</span>
       <div class="cart-quantity cart-column">
           <input class="cart-quantity-input" type="number" value="1">
           <button class="btn btn-danger" type="button">REMOVE</button>
       </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)//lắng nghe nút remove trong giỏ hàng
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)//lắng nghe nút số lượng thay đổi
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()//xóa sản phẩm đã có trong giỏ hàng
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    //console.log('kiem tra có bao nhieu dong sp',cartRows)
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace(priceElement))
        //console.log('gia sp '+price)
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = total * 1000
    document.getElementsByClassName('cart-total-price')[0].innerText = new Intl.NumberFormat().format(total)
}
