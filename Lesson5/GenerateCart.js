'use strict';

const cart = {
    denomination: ["Шорты", "Майка", "Штаны", "Носки"],
    count: [2, 2, 1, 5,],
    price: [1000, 1500, 2000, 100],
    totalPrice: 0,

    getGenerateCart() {
        let $contain = document.querySelector(".contain");
        let $cart = document.createElement("div");
        $cart.className = "cart";
        $contain.appendChild($cart);
        this.getButtonBuy($cart);
    },

    getButtonBuy($cart) {
        let $cartButton = document.createElement("div");
        $cartButton.className = "cartButton";
        $cartButton.innerHTML = "Купить";
        $cart.appendChild($cartButton);
        this.getDivInCart($cart);
    },

    getDivInCart($cart) {
        let $cartProduct = document.createElement("div");
        $cartProduct.className = "cartProduct";
        $cart.appendChild($cartProduct);
        this.setProductInCart($cart, $cartProduct);
    },

    setProductInCart($cart, $cartProduct) {
        if (this.denomination.length === 0) {
            $cartProduct.innerHTML = "<h1> ТОВАР ОТСУТСТВУЕТ </h1>";
            console.log(1);
            return;
        }
        for (let product = 0; product < this.denomination.length; product++) {
            let $divProduct = document.createElement("div");
            $divProduct.className = "product";
            $divProduct.innerHTML = "<h2>Название товара</h2>";
            $cartProduct.appendChild($divProduct);
        }
        this.getTotalPrice($cart, $cartProduct);
    },

    getTotalPrice($cart, $cartProduct) {
        let $divTotalPrice = document.createElement("div");
        $divTotalPrice.className = "TotalPrice";
        $cartProduct.appendChild($divTotalPrice);
        $divTotalPrice.innerHTML = this.countTotalPrice();
    },

    countTotalPrice() {
        for (let i = 0; i < this.count.length; i++) {
            for (let j = i; j < this.price.length; j++) {
                this.totalPrice += this.count[i] * this.price[j];
                break;
            }
        }
        return `Общая стоимость всех товаров: ${this.totalPrice}`;
    }
};

cart.getGenerateCart();