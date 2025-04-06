// Отримуємо всі області карти і параграфи
const targets = document.querySelectorAll("area[target]");
const infos = document.querySelectorAll(".info");

// Перевіряємо, чи елементи знайдені
console.log("Targets found:", targets.length); // Має бути 4
console.log("Infos found:", infos.length);    // Має бути 4

// Додаємо обробники для кожної області
targets.forEach((target, index) => {
    target.addEventListener("mouseenter", () => {
        console.log(`Наведено на target ${index + 1}`);
        // Ховаємо всі параграфи
        infos.forEach(info => info.classList.remove("active"));
        // Показуємо тільки відповідний параграф
        infos[index].classList.add("active");
    });

    target.addEventListener("mouseleave", () => {
        console.log(`Покинуто target ${index + 1}`);
        // Ховаємо параграф
        infos[index].classList.remove("active");
    });
});

// Додаткові обробники для параграфів (щоб залишалися видимими при наведенні на них)
infos.forEach((info, index) => {
    info.addEventListener("mouseenter", () => {
        console.log(`Наведено на info ${index + 1}`);
        info.classList.add("active");
    });

    info.addEventListener("mouseleave", () => {
        console.log(`Покинуто info ${index + 1}`);
        info.classList.remove("active");
    });
});