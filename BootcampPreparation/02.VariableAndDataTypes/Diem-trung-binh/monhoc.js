var diemVatLy;
var diemHoaHoc;
var diemSinhHoc;
diemVatLy = parseInt(prompt("Vật Lý"));
diemHoaHoc = parseInt(prompt("Hóa Học"));
diemSinhHoc = parseInt(prompt("Sinh Học"));
var diemTrungBinh = (diemVatLy + diemHoaHoc + diemSinhHoc)/3
var tongdiem = diemHoaHoc + diemSinhHoc + diemVatLy

function showDiemTrungBinh() {
    document.getElementById("diemTrungBinh").innerHTML = "Điểm Trung Bình " + diemTrungBinh;
};

function showTongDiem() {
    document.getElementById("diemTong").innerHTML = "Tổng Điểm " + tongdiem;
}