// import './assets/css/main.css'
// import './assets/css/style.css'



// Hàm kiểm tra độ rộng trình duyệt và xóa phần tử body nếu cần
function checkScreenWidth() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth < 1140) {
        document.body.remove();
    }
}

// Kiểm tra độ rộng trình duyệt khi trang web được tải và cũng mỗi khi kích thước cửa sổ thay đổi
window.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

