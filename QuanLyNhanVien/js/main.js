const dsnv = new DanhSachNhanVien;
const validation = new Validation()
function getELE(id) {
  return document.getElementById(id)
}
function setLocalStorage() {
  localStorage.setItem("dsnv", JSON.stringify(dsnv.mangNV))
  
}
function getLocalStorage() {
  if(localStorage.getItem("dsnv")!= null){
    dsnv.mangNV = JSON.parse(localStorage.getItem("dsnv"))
    hienThiTable(dsnv.mangNV);
  }
 
} getLocalStorage();
function themNhanVien() {
  var tk =getELE("tknv").value ;
    var hoTen =getELE("name").value ;
    var email =getELE("email").value ;
    
    var matKhau =getELE("password").value ;
    
    var ngayLam =getELE("datepicker").value ;
    var luongCb =getELE("luongCB").value ;
    var chucVu =getELE("chucvu").value ;
    var gioLam =getELE("gioLam").value ;


    var isValid = true;

    //Các bước kiểm tra dữ liệu
    //?kiem tra maSV
    //!false
    // bolean true &&(AND) true => true
    //& => BIT  true => 1, false => 0
    // 1 & 1 => 1 
    isValid &=  validation.kiemTraRong(tk,"tbTKNV","Tài Khoản Nhân viên không được để trống!") && validation.kiemTraTrung(tk,"tbTKNV","Mã nhân viên không được trùng",dsnv.mangNV) ;

    //true
    //?kiem tra tenNV
    // iNValid (ten) = iNValid (ma) & kiemTraRong(ten)
    isValid &= validation.kiemTraRong(hoTen,"tbTen","Tên nhân viên không được để trống") 

    //?kiem tra email
    isValid &= validation.kiemTraEmail(email,"tbEmail","Email không đúng định dạng");

     //?kiem tra pass
    //  isValid &= validation.kiemTraPass(matKhau,"tbMatKhau","Mật khẩu phải có ít nhất 1 ký tự chữ, 1 in hoa, 1 số,1 đặc biêt, và từ 6-8 chữ");

    //? kiem tra chức vụ
    isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","Chưa chọn chức vụ");

    isValid &= validation.kiemTraGioLam(gioLam,"tbGiolam","Giờ làm chưa hợp lệ");
    isValid &= validation.kiemTraLuongCB(luongCb,"tbLuongCB"," Lương cơ bản nhập chưa đúng")
    

    // isValid == true
    if(isValid) {
        // Tất cả các dữ liệu đều hợp lệ
        // Tạo thể hiện của lớp NhanVien
        var nv = new NhanVien(tk,hoTen,matKhau,email,ngayLam,Number(luongCb),chucVu,Number(gioLam))
       
        
        nv.tinhTongLuong();
    nv.xepLoaiNhanVien(nv);
      
        dsnv.themNV(nv);
        //Lưu trữ local storage
        setLocalStorage();
        //lấy dữ liệu từ localstorage
        getLocalStorage();

   
    }
}
  

function hienThiTable(mang) {
  var content = "";
  mang.map(function (nv,index) { 

 var trELE = `<tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoTen}</td>
    <td>${nv.email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tongLuong}</td>
    <td>${nv.xepLoai}</td>

    <td>
    <button onclick="xoaNhanVien('${nv.taiKhoan}')"  class="btn btn-danger">Xóa</button>
    <button data-toggle="modal"
    data-target="#myModal" onclick="hienThiChiTiet('${nv.taiKhoan}')" class="btn btn-info">Xem</button>

    </td>

    </tr> `
    content +=trELE;

    }) ;
    getELE("tableDanhSach").innerHTML = content;
  
}

function xoaNhanVien(id) {
dsnv.xoaNV(id)
setLocalStorage();
getLocalStorage();  
}
function hienThiChiTiet(id) {
  var viTri = dsnv.timViTri(id)
  if(viTri> -1){
    getELE("tknv").value = dsnv.mangNV[viTri].taiKhoan;
      getELE("tknv").disabled = true;
     

        getELE("name").value = dsnv.mangNV[viTri].hoTen;
        getELE("email").value = dsnv.mangNV[viTri].email;
        getELE("password").value = dsnv.mangNV[viTri].matKhau;
        getELE("password").type = "text";
        getELE("datepicker").value = dsnv.mangNV[viTri].ngayLam;
        getELE("chucvu").value = dsnv.mangNV[viTri].chucVu;
        getELE("luongCB").value = dsnv.mangNV[viTri].luongCb;
        getELE("gioLam").value = dsnv.mangNV[viTri].gioLam;
        
  }
  
}
function capNhatNhanVien() {
  //lấy thông tin 
  var tk =getELE("tknv").value ;
    var hoTen =getELE("name").value;
    var email =getELE("email").value;
    
    var matKhau =getELE("password").value;
    
    var ngayLam =getELE("datepicker").value;
    var luongCb =Number(getELE("luongCB").value) ;
    var chucVu =getELE("chucvu").value ;
    var gioLam =Number(getELE("gioLam").value) ;
    
    var nv = new NhanVien(tk,hoTen,matKhau,email,ngayLam,luongCb,chucVu,gioLam)
    
    nv.tinhTongLuong();
    nv.xepLoaiNhanVien(nv);
   
    
    
  

  dsnv.capNhat(nv)

  //khi thay đổi mảng thì gọi lưu local storage
  //Sau khi lưu thì lấy dữ liệu để hiển thị UI
  setLocalStorage();
  getLocalStorage();


}
getELE("btnTimNV").onclick = function () {
  loaiNV = getELE("searchName").value;
 var  mangTK =[];
 mangTK = dsnv.timLoaiNV(loaiNV)
 hienThiTable(mangTK)
  }