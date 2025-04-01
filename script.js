// Отримуємо елементи
const targets = document.querySelectorAll("[target]");
const infos = document.querySelectorAll(".info");

console.log(infos)

// Обробник наведення на область
targets.forEach((target, index) => {
    target.addEventListener("mouseenter", () => {
        console.log(123)
        infos[index].classList.add("active");
      })
    })



// Обробник виходу з області
targets.forEach((target, index) => {
    target.addEventListener("mouseleave", () => {
        infos[index].classList.remove("active");
      })
    })

// Додаткові обробники для самої статті
infos.forEach((info, index) => {
    info.addEventListener("mouseenter", () => {
        infos[index].classList.add("active");
      })
    })

infos.forEach((info, index) => {
    info.addEventListener("mouseleave", () => {
        infos[index].classList.remove("active");
      })
    })

   