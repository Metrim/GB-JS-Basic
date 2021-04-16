/**
*2.Продолжить работу с интернет-магазином:
*2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
*2.2. Реализуйте такие объекты.
*2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

// [name, quantity, price per one]

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    <hr>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    clearCartButton: null,
    cartItem,
    goods: [],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.clearCartButton = document.querySelector('.cart-btn');
        this.clearCartButton.addEventListener('click', () => this.clearCart());

        this.render();
    },
    render() {
        this.cartListBlock.innerHTML = ''
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },


};

cart.init();

const catalogItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <button class="btn-${good.id_product}">Добавить товар в корзину</button>
                    <hr>
                </div>`;
    }
}

const Product = {
        cart,
        catalogItem,
        catalogListBlock: null,
        addGoodCartButton: null,
        addGoodCartButtons: [],
        goods: [
        {
            id_product: 123,
            product_name: "Ноутбук",
            price: 4500,
        },
        {
            id_product: 124,
            product_name: "Мышка",
            price: 1000,
        },
        {
            id_product: 125,
            product_name: "Motherboard",
            price: 500,
        },
        {
            id_product: 126,
            product_name: "PC",
            price: 2500,
        },
        {
            id_product: 127,
            product_name: "Monitor",
            price: 1500,
        },
    ],
    init() {
        this.catalogListBlock = document.querySelector('.catalog');
        this.render();

        for (let i = 0; i < this.goods.length; i++) {
            this.addGoodCartButton = document.querySelector(`.btn-${this.goods[i].id_product}`)
            this.addGoodCartButton.addEventListener('click', event => this.addGoodCart(event))
            this.addGoodCartButtons.push(this.addGoodCartButton)
        }
    },
    render() {
        this.catalogListBlock
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(good));
            });
        }
    },
    addGoodCart(event) {
        for (let i = 0; i < this.goods.length; i++) {
            if (event.target.className === `btn-${this.goods[i].id_product}`) {
                for (let j = 0; j < this.cart.goods.length; j++) {
                    if (`btn-${this.cart.goods[j].id_product}` === `btn-${this.goods[i].id_product}`) {
                        this.cart.goods[j].quantity += 1
                        this.cart.render();
                        return
                    } 
                }
                this.cart.goods.push(this.goods[i])
                Object.assign(this.cart.goods[i], {'quantity': 1});
                this.cart.render();
            }
            
        }
    }
    
}

Product.init()

