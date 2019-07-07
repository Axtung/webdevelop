class Products {
    constructor(container = '.products') {
        this.container = container;
        this.data = [];
        this.allProduct = [];
        this.init();
    }

    init() {
        this._fetchProducts();
        this._render();
        this._productsTotalPrice();
    }

    _fetchProducts() {
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Keyboard', price: 200},
            {id: 3, title: 'Mouse', price: 47},
            {id: 4, title: 'Gamepad', price: 87},
            {id: 6, title: 'Chair', price: 187},
            {id: 7, title: 'Notebook', price: 2000},
            {id: 8, title: 'Keyboard', price: 200},
            {id: 9, title: 'Mouse', price: 47},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let element of this.data) {
            const product = new ProductItem(element);
            this.allProduct.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }

    _productsTotalPrice() {
        const block = document.querySelector(this.container);
        let totalPrice = 0;
        for (let i = 0; i < this.data.length; i++) {
            totalPrice += this.data[i].price;
        }
        block.insertAdjacentHTML("afterend", this.renderTotalPrice(totalPrice));
    }

    renderTotalPrice(totalPrice) {
        return `<div class = totalPrice>
                <p>Общая стоимость товаров: ${totalPrice}</p>
                </div>`
    }
}

class ProductItem {
    constructor(element, img='https://placehold.it/248x178') {
        this.title = element.title;
        this.id = element.id;
        this.price = element.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <p>Цена: ${this.price}</p>
                <img src="${this.img}" alt="${this.title}">
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

const product = new Products();