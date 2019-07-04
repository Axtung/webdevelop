const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Keyboard', price: 200},
    {id: 3, title: 'Mouse', price: 47},
    {id: 4, title: 'Gamepad', price: 87},
    {id: 6, title: 'Chair', price: 187},
    {id: 7, title: 'Notebook', price: 2000},
    {id: 8, title: 'Keyboard', price: 200},
    {id: 9, title: 'Mouse', price: 47},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>Цена: ${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    document
        .querySelector(`.products`)
        .innerHTML = list.map(el => renderProduct(el.title, el.price)).join("");
};

renderPage(products);