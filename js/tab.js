document.addEventListener("DOMContentLoaded", function () {
  const tabItem = document.querySelectorAll(".profit__tab");
  const tabContent = document.querySelectorAll(".profit__content");
  const tabItemAdaptive = document.querySelectorAll(".profit__tab-adaptive");
  const tabContentAdaptive = document.querySelectorAll(
    ".profit__content-adaptive"
  );

  function tabChanger(item, content) {
    item.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        content.forEach((content) => {
          content.classList.remove("active");
        });
        item.forEach((tab) => {
          tab.classList.remove("active");
        });

        content[index].classList.add("active");
        item[index].classList.add("active");
      });
    });
  }
  function tabChangerAdaptive(item, content) {
    item.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        content[index].classList.toggle("active");
        item[index].classList.toggle("active");
      });
    });
  }
  tabChanger(tabItem, tabContent);
  tabChangerAdaptive(tabItemAdaptive, tabContentAdaptive);
});

// Accordion

const accBtn = document.querySelectorAll(".accordion");
const accContent = document.querySelectorAll(".plan__item-more");

accBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    accContent[i].classList.toggle("active");
  });
});

// Table
let fold = document.querySelectorAll(".fold");
let view = document.querySelectorAll(".view");
let five = document.querySelectorAll(".pseudo");

view.forEach((item, i) => {
  item.addEventListener("click", () => {
    fold[i].classList.toggle("open");
    five[i].classList.toggle("active");
  });
});
