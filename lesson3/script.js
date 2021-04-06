/**
 * 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
 * Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
 * Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 * 
 */

// [name, quantity, price per one]
const goods = [
    ['Mother board', 1, 1280],
    ['Videocard', 4, 650],
    ['Keyboard', 2, 120],
    ['Mouse', 2, 80],
    ['Chair', 1, 500],
    ['Table', 1, 1000],
]


function countBasketPrice(goods) {
    let sum = null
    for (let index = 0; index < goods.length; index++) {
        sum += goods[index][1] * goods[index][2] 
    }
    return sum
}

alert(`Стоимость товаров в корзине: ${countBasketPrice(goods)} у.е.`)