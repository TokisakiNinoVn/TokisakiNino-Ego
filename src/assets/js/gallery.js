import { createApp } from 'vue'
import Gallery from '../../Gallery.vue'
createApp(Gallery).mount('body')

// Lưu trữ giá trị vị trí cuộn trang trước đó
let lastScrollPosition = 0;

// Bắt sự kiện cuộn
window.addEventListener('scroll', function() {
    // Lấy vị trí hiện tại của cuộn trang
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Nếu người dùng đã cuộn xuống khoảng 70px so với vị trí trước đó
    const headerElement = document.querySelector('.header');
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition >= 70) {
        headerElement.style.backgroundColor = "white";
        headerElement.style.top = "0";
    }

    // Cập nhật vị trí cuộn trang trước đó
    lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition; // Xử lý trường hợp trang đang ở đầu
});
