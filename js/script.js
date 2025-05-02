const toggleButton = document.querySelector('.menu-toggle');
const toggleIcon = toggleButton.querySelector('.material-icons');
const menu = document.querySelector('.menu');

// ตอนกดปุ่ม ☰
toggleButton.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    toggleIcon.textContent = 'menu'; // เปลี่ยนกลับเป็น ☰
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    toggleIcon.textContent = 'close'; // เปลี่ยนเป็น ✖
  }
});

// เช็คขนาดจอทุกครั้งที่ resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'row';
    toggleIcon.textContent = 'menu'; // ✅ เวลาเป็น Desktop ให้แสดง ☰ ไว้
  } else {
    menu.style.display = 'none';
    toggleIcon.textContent = 'menu'; // ✅ ย่อจอก็ reset เป็น ☰
  }
});

/* ปุ่มสนlogin ขวาบน */
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("open-login");

  loginButton.addEventListener("click", function () {
    window.location.href = "login.html";
  });
});
/* ปุ่มสนlogin ขวาบน */
// บันทึกค่าตอนผู้ใช้เปลี่ยน
const width = document.getElementById("myBox").offsetWidth;
localStorage.setItem("boxWidth", width);

// ตอนโหลดหน้าใหม่
window.addEventListener("load", () => {
  const savedWidth = localStorage.getItem("boxWidth");
  if (savedWidth) {
    document.getElementById("myBox").style.width = savedWidth + "px";
  }
});
