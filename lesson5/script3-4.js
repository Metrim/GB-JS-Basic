/**
*2.Продолжить работу с интернет-магазином:
*2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
*2.2. Реализуйте такие объекты.
*2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

// [name, quantity, price per one]

const basket = {
    goods: [
    {
        id_product: 123,
        product_name: "Ноутбук",
        price: 45600,
        quantity: 1
    },
    {
        id_product: 124,
        product_name: "Мышка",
        price: 1000,
        quantity: 3
    },
    {
        id_product: 125,
        product_name: "Motherboard",
        price: 600,
        quantity: 3
    },
    {
        id_product: 126,
        product_name: "PC",
        price: 2600,
        quantity: 2
    },
    {
        id_product: 127,
        product_name: "Monitor",
        price: 800,
        quantity: 4
    },
],

    countBasketPrice() {
        return this.goods.reduce(function (totalPrice, cartItem) {
            return totalPrice + cartItem.quantity * cartItem.price;
        }, 0);
    },

    generateText() {
        if (this.goods.length === 0) return "Корзина пуста"
        else return `<h2>Решение задачи №3:</h2> В корзине: ${this.goods.length} товаров на сумму ${this.countBasketPrice()} рублей`
    },

}

const basketElement = document.getElementById('basket')

basketElement.innerHTML = basket.generateText()

const Product = {
    goods: [
    {
        id_product: 123,
        product_name: "Ноутбук",
        price: 45600,
    },
    {
        id_product: 124,
        product_name: "Мышка",
        price: 1000,
    },
    {
        id_product: 125,
        product_name: "Motherboard",
        price: 600,
    },
    {
        id_product: 126,
        product_name: "PC",
        price: 2600,
    },
    {
        id_product: 127,
        product_name: "Monitor",
        price: 800,
    },
],
}

const catalogElement = document.getElementById('catalog')

console.log(catalogElement)

function renderCatalog(catalog) {
    let HTMLstring = '<h2> Решение четвертого упражнения, Каталог: </h2>'
    for (let index = 0; index < catalog.goods.length; index++) {

        HTMLstring += `<h4> Наименование: ${catalog.goods[index].product_name} </h4>
                        <span> Цена за единицу: ${catalog.goods[index].price} рублей </span>
                        <hr>
                        `
    }
    return HTMLstring
}

catalogElement.innerHTML = renderCatalog(Product)




