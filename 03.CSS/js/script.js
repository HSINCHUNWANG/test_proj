
///////////////////////////////////////////////////////////
// 時間西元年
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear(); // 拿到當下的西元年
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// 手機導覽列按鈕開關

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open"); // 切換 nav-open
});

///////////////////////////////////////////////////////////
// 視窗滾動

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href"); // 拿到屬性href

    // 視窗滾到到最上方
    if (href === "#") 
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 行為:平滑
      });

    // 視窗滾動到對應的連結
    if (href !== "#" && href.startsWith("#")) { //
      const sectionEl = document.querySelector(href); // ("#xxx") = ID選擇器
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // 關閉手機導覽列
    if (link.classList.contains("main-nav-link")) // 如果連結裡的class包含 main-nav-link
      headerEl.classList.toggle("nav-open");
  });
});




