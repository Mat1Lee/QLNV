//Chứa các phương thức kiểm tra dữ liệu
function Validation() {
  this.kiemTraRong = function (value, spanID, message) {

      // trim(): xóa khoảng trăng ở đầu và cuối của chuỗi
      //VD: " sv001 " => trim => "sv001"
      if (value.trim() == "") {
          //không hợp lệ
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          return false;
      }

      //hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;

  }

  this.kiemTraTrung = function (value, spanID, message, mangNV) {
      //  some() => return true/false
      // map() => return 1 mảng mới

      var isExist = mangNV.some(function (nv) {
          //từng đối tượng sv trong mảng
          //? đk kiểm tra => return
          // return điều kiện kiểm tra                                       
          return value === nv.taiKhoan;
      });

      if (isExist) {
          //có sv bị trùng mã
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          return false;
      }

      //hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      return true;




  }

  this.kiemTraTen = function (value, spanID, message) {
      //String (cách thêm)
      // var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"

      //Regular expression (regexp)
      var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
      // value.match(pattern) => true
      if (value.match(pattern)) {
          //giá trị đúng với biểu mẫu
          //hợp lệ
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }

      //không hợp lệ
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;

  }


  this.kiemTraEmail = function (value, spanID, message) {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (value.match(pattern)) {
          //đúng với biểu mẫu
          //hợp lệ
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }

      //không hợp lệ
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;


  }

  this.kiemTraPass = function (value, spanID, message) {
      // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{min,max}$/
      var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;

      if (value.match(pattern)) {
          //đúng với biểu mẫu
          //hợp lệ
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }

      //không hợp lệ
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;

  }
  this.kiemTraLuongCB = function (value, spanID, message) {
    var pattern = /^(\d{1,2}(\.\d{1,2})?)$/;
    if (value.match(pattern) && value >= 1000000 && value <= 2500000) {
        //đúng với biểu mẫu
        //hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    //không hợp lệ
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    return false;

}
  this.kiemTraChucVu = function (selectID, spanID, message) {
      var optionIndex = document.getElementById(selectID).selectedIndex;
      if (optionIndex !== 0) {
          //hợp lệ 
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }

      //không hợp lệ
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;
  }

  this.kiemTraGioLam = function (value, spanID, message) {
      var pattern = /^(\d{1,2}(\.\d{1,2})?)$/;
      if (value.match(pattern) && value >= 0 && value <= 200) {
          //đúng với biểu mẫu
          //hợp lệ
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
      }

      //không hợp lệ
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      return false;

  }

}