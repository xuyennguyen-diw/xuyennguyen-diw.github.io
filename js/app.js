function xuat_ngay() {
    var d = new Date();
    var ngay = d.getDate();
    if (ngay < 10) {
        ngay = '0' + ngay;
    };
    var thang = d.getMonth();
    thang = thang + 1;
    if (thang < 10) {
        thang = '0' + thang;
    };
    var nam = d.getFullYear();
    var week = d.getDay();

    if (week == 0) {
        week = 'Chủ Nhật';
    }
    if (week == 1) {
        week = 'Thứ Hai';
    }
    if (week == 2) {
        week = 'Thứ Ba';
    }
    if (week == 3) {
        week = 'Thứ Tư';
    }
    if (week == 4) {
        week = 'Thứ Năm';
    }
    if (week == 5) {
        week = 'Thứ Sáu';
    }
    if (week == 6) {
        week = 'Thứ Bảy';
    }
    document.getElementById('date-vn').innerHTML = week + ", " + ngay + "/" + thang + "/" + nam;
}

function xuat_gio() {
    var d = new Date();
    var gio = d.getHours();
    var phut = d.getMinutes();
    var giay = d.getSeconds();
    if (gio < 10) {
        gio = '0' + gio;
    };
    if (phut < 10) {
        phut = '0' + phut;
    };
    if (giay < 10) {
        giay = '0' + giay;
    };

    document.getElementById('time').innerHTML = gio + ":" + phut + ":" + giay;
}
setInterval(xuat_gio, 1000);


xuat_ngay();
xuat_gio();

//login
var hop_le = false;
function dangnhap() {
    console.log('run dangnhap');
    if (kiemtra() == true) {
        // kiemtra();
        alert('Đăng nhập thành công');
        // alert.addEventListener("click", closeModel());
    }
}

function closeModel() {
    document.querySelector(".modal").getElementsByClassName.display = "none";
    window.open("https://baoxuyennguyenthi.github.io");

}

function kiemtra() {
    // console.log('run kiemtra');
    var hop_le = true;
    var input_ten = document.getElementById('ten').value;
    var input_pwd = document.getElementById('mat_khau').value;
    document.getElementById('loiten').innerHTML = '';
    document.getElementById('loipass').innerHTML = '';

    // console.log(input_ten, input_pwd);

    if (input_ten == null || input_ten.length == 0) {
        hop_le = false;
        document.getElementById('loiten').innerHTML = 'Sai tên đăng nhập';
    }
    if (input_pwd == null || input_pwd.length == 0) {
        hop_le = false;
        document.getElementById('loipass').innerHTML = 'Sai mật khẩu';
    }
    return hop_le;
}

//product
var gia = 30000;
function doi_anh(stt_anh) {
    var anh = document.getElementById('big-img');
    anh.src = "/images/product/grid-product-lg-" + stt_anh + ".png";
    var sl = document.getElementById('sl').value;
    sl = 1;
    var tong;
    if (stt_anh == 1) {
        document.getElementById('tensp').innerHTML = "Watermalen";
        document.getElementById('thongtin').innerHTML = "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!";
        document.getElementById('gia').innerHTML = "30,000vnđ"
        gia = 30000;
    }
    if (stt_anh == 2) {
        document.getElementById('tensp').innerHTML = "Blueberries";
        document.getElementById('thongtin').innerHTML = "You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).";
        document.getElementById('gia').innerHTML = "100,000vnđ"
        gia = 100000;
    }
    if (stt_anh == 3) {
        document.getElementById('tensp').innerHTML = "Vegetables";
        document.getElementById('thongtin').innerHTML = "If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item button. We'll notify you via e-mail of your refund once we've received and processed the returned item.";
        document.getElementById('gia').innerHTML = "40,000vnđ"
        gia = 40000;
    }
    if (stt_anh == 4) {
        document.getElementById('tensp').innerHTML = "Strawberries";
        document.getElementById('thongtin').innerHTML = "We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.";
        document.getElementById('gia').innerHTML = "80,000vnđ"
        gia = 80000;
    }
    tong = sl * gia;
    document.getElementById('tong').innerHTML = new Intl.NumberFormat().format(tong) + 'vnđ';
}
function sl_change() {
    var sl = document.getElementById('sl').addEventListener('change', tinhtien);
}
function tinhtien() {
    var sl = document.getElementById('sl').value;
    tong = sl * gia;
    document.getElementById('tong').innerHTML = new Intl.NumberFormat().format(tong) + 'vnđ';

}

tinhtien();
sl_change();

