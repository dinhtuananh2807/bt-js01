/*Bài tập JS*/
/*
Bài tập 1:
Input
Lương 1 ngày: 100.000
Số ngày làm của người dùng nhập vào
Xử lý
Tính toán tiền lương công nhân
Output
Tính tiền công lương nhân và in ra ngoài

*/
var tienNgayCong = 100000;
document.getElementById("nhapNgayCong").onclick = function() {
    var ngayCong = document.getElementById("ngayCong").value;

    var tongTienCong = tienNgayCong*ngayCong;
    console.log("Tổng tiền công bạn nhận được là: ", tongTienCong);

}

/*
Bài tập 02: Tính tổng trung bình 5 số nhập vào

Input:
    - Nhập vào 5 số
Xử lý:
    - Lấy giá trị nhập vào của 5 số và chuyển thành giá trị number
    - Tính tổng 5 số và chia trung bình cho 5.
Ouput
    - Xuất ra màn hình giá trị
*/


document.getElementById("tinhTrungBinh").onclick = function () {
    var so01 = document.getElementById("so1").value;
    var so02 = document.getElementById("so2").value;
    var so03 = document.getElementById("so3").value;
    var so04 = document.getElementById("so4").value;
    var so05 = document.getElementById("so5").value;

    var so1 = Number(so01);
    var so2 = Number(so02);
    var so3 = Number(so03);
    var so4 = Number (so04);
    var so5 = Number (so05);


    var trungBinh = (so1 + so2 + so3 + so4 + so5)/5;
    console.log("Giá trị trung bình 5 số vừa nhập vào là: ", trungBinh);
}


/* Bài tập số 3 
Input:
    - Tỷ giá USD = 23500
    - Nhập vào số tiền USD
Xử lý
    - Tính toán
Output
    - Xuất ra tố tiền quy đổi ra VNĐ

*/

const tyGia = 23500; //Khai báo tỷ giá USD => VNĐ

document.getElementById("tinhTien").onclick = function() {
    var soTien = document.getElementById("nhapTien").value;
    var quyDoi = soTien*tyGia;
    console.log("Giá trị quy đổi của ", soTien, " USD sang VNĐ là: ", quyDoi);
}

/*
Bài tập số 4

Input:
    - Nhập vào chiều dài, chiều rộng.
Xử lý
    - Tính diện tích
    - Tính chu vi
Output
    - Xuất kết quả ra màn hình


*/

document.getElementById("tinhToan").onclick = function () {
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuRong * chieuDai;

    console.log("Chu vi là: ", chuVi);
    console.log("dienTich là: ", dienTich)
}


/* Bài tập số 5 
Input
    - Nhập vào số có 2 chữ số
Xử lý
    - Lấy số hàng chục
    - Lấy số hàng đơn vị - Sử dụng hàm làm tròn Math.floor () lấy phần nguyên
    - Tính tổng 2 số
Output
    - Xuất kết quả
*/
document.getElementById("tinhKySo").onclick = function() {
    var soNhapVao = Number (document.getElementById("soNhapVao").value);
    var soHangDonVi = soNhapVao % 10;
    var soHangChuc = soNhapVao/10;
    var kySo = Math.floor(soHangChuc + soHangDonVi);
    console.log("Tổng ký số của ", soNhapVao, "là : ", kySo);
}
