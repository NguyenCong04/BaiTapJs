// // ==========================Lab2===Bài 2.3=====================//

// LAB2.4: (SECTION	10: A CLOSER	LOOK	AT	FUNCTIONS	> CODING	CHANLLENGE	#2)
// Lấy hàm IIFE dưới đây, và ở cuối function hãy gắn 1 event thay đổi màu của thẻ
// 'h1' sang màu xanh dương (blue) sau mỗi lần click vào element body. Chúng ta
// không select đến thẻ h1 đó nữa!
// Và sau đó hãy tự giải thích lại cho chính mình hoặc bạn học của mình Tại sao nó
// lại hoạt động!
// Hãy bình tĩnh nghĩ xem chính xác thì khi nào callback được thực thi, và biến được
// sử dụng trong ví dụ này có ý nghĩa gì?.
// (function () {
// const header = document.querySelector('h1');
// header.style.color = 'red';
// document.querySelector('body').addEventListener('click', function () {
// header.style.color = 'blue';
// });
// })();

// ===================Code=============================//
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
    
  });
})();
