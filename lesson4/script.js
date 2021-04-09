/**
*2.Продолжить работу с интернет-магазином:
*2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
*2.2. Реализуйте такие объекты.
*2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

// [name, quantity, price per one]

const basket = {
    goods: [
        ['Mother board', 1, 1280],
        ['Videocard', 4, 650],
        ['Keyboard', 2, 120],
        ['Mouse', 2, 80],
        ['Chair', 1, 500],
        ['Table', 1, 1000],
    ],

    countBasketPrice() {
        return this.goods.reduce(function (totalPrice, cartItem) {
            return totalPrice + cartItem[1] * cartItem[2];
        }, 0);
    }

}

alert(`Стоимость товаров в корзине: ${basket.countBasketPrice()} у.е.`)