
const iPhone = document.querySelector(".iPhone")

const samsung = document.querySelector(".samsung")

iPhone.addEventListener("click", function(event) {
    let clickTarget = event.target;
    let activeButton = iPhone.querySelector(".active");
    let priceItem = iPhone.querySelector(".price");
    let currentPrice;

    let activeButtonColor = iPhone.querySelector(".active-border")

    if (clickTarget.classList.contains("color-btn") && 
    !clickTarget.classList.contains("active-border")
    ) {

            clickTarget.classList.add("active-border");

            activeButtonColor.classList.remove("active-border");

    }

    if (clickTarget.classList.contain("btn") && !clickTarget.classList.contains("active")) {
        clickTarget.classList.add("active");
        activeButton.classList.remove("active");
    }

    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active")) {
    clickTargetTarget.classList.add("active");
    activeButton.classList.remove("active");
    }

    currentPrice = clickTarget.getAttribute("data-size");

    if(currentPrice === "medium") {
        priceItem.textContent = "Цена 80 000р."
    }

    if(currentPrice === "large") {
        priceItem.textContent = "Цена 100 000р."
    }


});

samsung.addEventListener("click", function(event) {
    let clickTarget = event.target;
    let activeButton = iPhone.querySelector(".active");
    let priceItem = iPhone.querySelector(".price");
    let currentPrice;

    let activeButtonColor = iPhone.querySelector(".active-border")

    if (clickTarget.classList.contains("color-btn") && 
    !clickTarget.classList.contains("active-border")
    ) {

            clickTarget.classList.add("active-border");

            activeButtonColor.classList.remove("active-border");

    }

    if (clickTarget.classList.contain("btn") && !clickTarget.classList.contains("active")) {
        clickTarget.classList.add("active");
        activeButton.classList.remove("active");
    }

    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active")) {
    clickTargetTarget.classList.add("active");
    activeButton.classList.remove("active");
    }

    currentPrice = clickTarget.getAttribute("data-size");

    if(currentPrice === "medium") {
        priceItem.textContent = "Цена 80 000р."
    }

    if(currentPrice === "large") {
        priceItem.textContent = "Цена 100 000р."
    }
});

const buy = document.querySelector(".buy")
const buy_1 = document.querySelector(".buy_1")
buy.addEventListener("click", active_prompt)
buy_1.addEventListener("click", active_prompt)

function active_prompt () {
    let ptmpt = document.querySelector(".prompt")
    let otvet = prompt("Введите пин код карточки привязанной к вашему аккаунту:")
    if ( otvet === "2262" ) {
        ptmpt.classList.add("active_prompt")
    } else { 
        ptmpt.classList.add("active_prompt_2")
        ptmpt.textContent = "Неверный пинкод"
    }
}

