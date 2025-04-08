"use strict";

// Отримуємо всі області карти і параграфи
var targets = document.querySelectorAll("area[target]");
var infos = document.querySelectorAll(".info"); // Перевіряємо, чи елементи знайдені

console.log("Targets found:", targets.length); // Має бути 4

console.log("Infos found:", infos.length); // Має бути 4
// Додаємо обробники для кожної області

targets.forEach(function (target, index) {
  target.addEventListener("mouseenter", function () {
    console.log("\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0430 target ".concat(index + 1)); // Ховаємо всі параграфи

    infos.forEach(function (info) {
      return info.classList.remove("active");
    }); // Показуємо тільки відповідний параграф

    infos[index].classList.add("active");
  });
  target.addEventListener("mouseleave", function () {
    console.log("\u041F\u043E\u043A\u0438\u043D\u0443\u0442\u043E target ".concat(index + 1)); // Ховаємо параграф

    infos[index].classList.remove("active");
  });
}); // Додаткові обробники для параграфів (щоб залишалися видимими при наведенні на них)

infos.forEach(function (info, index) {
  info.addEventListener("mouseenter", function () {
    console.log("\u041D\u0430\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0430 info ".concat(index + 1));
    info.classList.add("active");
  });
  info.addEventListener("mouseleave", function () {
    console.log("\u041F\u043E\u043A\u0438\u043D\u0443\u0442\u043E info ".concat(index + 1));
    info.classList.remove("active");
  });
});