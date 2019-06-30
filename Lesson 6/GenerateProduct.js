"use strict";



const product = {
    denomination: ["Шорты", "Майка", "Штаны", "Носки"],
    id: [0, 1, 2, 3],
    count: [1, 1, 1, 1],
    price: [1000, 1500, 2000, 100],
    totalPrice: [],
    cart: [],
    elements: {},
    images: ["http://www.oboibass.ru/wa-data/public/shop/products/68/69/6968/images/6269/6269.200.jpg",
        "https://grandgames.net/puzzle/source_v/perya_2_s.jpg",
        "http://wall2mob.com/cx/m/t2/33071-5.jpg",
        "https://grandgames.net/puzzle/source_v/poverhnost_v_kaplyah_s.jpg"],

    init() {
        this.getGenerateCart();
        document
            .querySelector(".cartProduct")
            .addEventListener('click', event => this.handleClickCartButton(event));
        document
            .querySelector(".cartHeader")
            .addEventListener('click', event => this.handleClickHeader(event));
    },

    getGenerateCart() {
        let $cart = document.createElement("div");
        $cart.className = "cart";
        this.elements.pageDivElemnt = $cart;
        document
            .querySelector(".contain")
            .appendChild($cart);
        this.getDivInCart();
    },

    getDivInCart() {
        let $cartProduct = document.createElement("div");
        $cartProduct.className = "cartProduct";
        let $cartAllProducts = document.querySelector(".cartAllProducts");
        this.elements.pageDivElemnt.insertBefore($cartProduct, this.elements.pageDivElemnt.firstChild);
        this.elements.pageDivElemnt.appendChild($cartAllProducts);
        this.setProductInCart($cartProduct);
    },

    setProductInCart($cartProduct) {


        if (this.denomination.length === 0) {
            $cartProduct.innerHTML = "<h1> ТОВАР ОТСУТСТВУЕТ </h1>";
            return;
        }
        for (let product = 0; product < this.denomination.length; product++) {
            let $divProduct = document.createElement("div");
            $divProduct.className = "product";
            $divProduct.innerHTML = `${this.denomination[product]}<br/>Цена товара: ${this.price[product]}`;
            $cartProduct.appendChild($divProduct);

            let $productImg = document.createElement("img");
            $productImg.className = "productImage";
            $productImg.src = this.images[product];
            $divProduct.appendChild($productImg);

            let $cartButton = document.createElement("div");
            $cartButton.className = "cartButton";
            $cartButton.innerHTML = "Купить";
            $cartButton.dataset.idx = this.id[product];
            $cartButton.dataset.name = this.denomination[product];
            $cartButton.dataset.price = this.price[product];
            $divProduct.appendChild($cartButton);
        }
    },

    handleClickCartButton() {

        if (event.target.className === "cartButton") {
            let $generateProducts = document.querySelector(".generateProducts");
            let $productInCart = document.createElement("div");
            let idx = +event.target.dataset.idx;
            let nameProduct = this.denomination[idx];
            let countProduct = this.count[idx];
            let priceProduct = this.price[idx];
            $productInCart.className = "productInCart";
            $productInCart.innerHTML = `${nameProduct}<br/>Количество товара: ${countProduct}`;
            $generateProducts.insertBefore($productInCart, $generateProducts.firstChild);
            let totalPrice = this.countTotalPrice(countProduct, priceProduct);
            this.totalPrice.push(totalPrice);
            this.getTotalPrice();
            console.log(this.elements);

        }

    },

    getTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.totalPrice.length; i++) {
            totalPrice += this.totalPrice[i];
        }
        document
            .querySelector(".totalPrice")
            .innerHTML = `Общая стоимость все товаров:${totalPrice}`;
    },

    countTotalPrice(countProduct, priceProduct) {
        let totalPrice = countProduct * priceProduct;
        return totalPrice;
    },

    handleClickHeader() {
        if (event.target.className === "compositionHeader") {
            let $headerComposit = document.querySelector(".generateProducts");
            if ($headerComposit.style.display === "none") {
                $headerComposit.style.display = "block";
            } else {
                $headerComposit.style.display = "none";
            }
        }
        else if (event.target.className === "addressHeader") {
            let $headerAddress = document.querySelector(".addressCart");
            if ($headerAddress.style.display === "none") {
                $headerAddress.style.display = "block";
            } else {
                $headerAddress.style.display = "none";
            }
        }
        else if (event.target.className === "commetHeader") {
            let $headerCommet = document.querySelector(".commetCart");
            if ($headerCommet.style.display === "none") {
                $headerCommet.style.display = "block";
            } else {
                $headerCommet.style.display = "none";
            }
        }
    }

};

product.init();


