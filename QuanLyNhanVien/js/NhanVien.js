function NhanVien(tk,hoTen,matKhau,email,ngayLam,luongCb,chucVu,gioLam,xepLoai) {
  this.taiKhoan = tk;
  this.hoTen=hoTen;
  this.matKhau=matKhau;
  this.email=email;
  this.ngayLam=ngayLam;
  this.luongCb=luongCb;
  this.chucVu=chucVu;
  this.gioLam=gioLam;
  this.xepLoai=xepLoai;
  this.tongLuong = 0;

  this.tinhTongLuong = function () 
   { 
    switch (this.chucVu) {
      case "Sếp":
        this.tongLuong = (this.luongCb*3)
        break;
      case "Trưởng phòng":
        this.tongLuong = (this.luongCb*2)
        break;
      case "Nhân viên":
        this.tongLuong = (this.luongCb*1)
        break;
    
      default:
        alert("Chọn lại chức vụ")
        this.tongLuong = 0;
        break;
    }

   }
   this.xepLoaiNhanVien = function (nv) {  
    if(176<=nv.gioLam && nv.gioLam<192){
      nv.xepLoai="Xuất Sắc"
    }
    else if(150<=nv.gioLam && nv.gioLam<176){
      nv.xepLoai="Giỏi"
    }
    else if(0<=nv.gioLam && nv.gioLam<150){
      nv.xepLoai="Khá"
    }
    
  }
}