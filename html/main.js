
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

    if (clickTarget.classList.contains("btn") && !clickTarget.classList.contains("active")) {
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
    let clickTargetTarget = event.target;
    let activeButton_2 = iPhone.querySelector(".active");
    let priceItem_2 = iPhone.querySelector(".price");
    let currentPrice_2;

    let activeButtonColor_2 = samsung.querySelector(".active-border")

    if (clickTargetTarget.classList.contains("color-btn") && 
    !clickTargetTarget.classList.contains("active-border")
    ) {

            clickTargetTarget.classList.add("active-border");

            activeButtonColor_2.classList.remove("active-border");

    }

    if (clickTargetTarget.classList.contains("btn") && !clickTargetTarget.classList.contains("active")) {
        clickTargetTarget.classList.add("active");
        activeButton_2.classList.remove("active");
    }

    if (clickTargetTarget.classList.contains("btn") && !clickTargetTarget.classList.contains("active")) {
    clickTargetTarget.classList.add("active");
    activeButton_2.classList.remove("active");
    }

    currentPrice_2 = clickTargetTarget.getAttribute("data-size");

    if(currentPrice_2 === "medium") {
        priceItem_2.textContent = "Цена 80 000р."
    }

    if(currentPrice_2 === "large") {
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

