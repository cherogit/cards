"use strict";
const $main = document.querySelector('.main');
const $catalog = document.createElement('div');
$catalog.classList.add('catalog', 'container');
$main.appendChild($catalog);
const cards = [
    {
        size: ['sm'],
        color: ['#165eb9'],
        img: './static/img/t-short.png',
        name: 'T-shirt',
        price: 5.00
    },
    {
        size: ['sm', 'lg'],
        color: ['orange'],
        img: './static/img/img2.png',
        name: 'Pants FORCLAZ',
        price: 30.00
    },
    {
        size: ['xl', 'xll'],
        color: ['black'],
        img: './static/img/img3.png',
        name: 'backpack',
        price: 60.20
    }
];
class Card {
    constructor(card) {
        this.$card = document.createElement('div');
        this.$card.classList.add('card');
        this.$card.innerHTML = this.model(card);
        $catalog.appendChild(this.$card);
    }
    model({ size, color, img, name, price }) {
        return `
            <div class="card__header"> 
                <div class="card__size">${size}</div> 
                <div class="card__colors"> 
                    <button class="color" style="background-color: ${color}" type="button"></button>
                </div>
            </div>
            <div class="card__pict"> 
                <img src="${img}" alt="" />
            </div>
            <div class="card__info"> 
                <div class="card__name">${name}</div>
                <div class="card__price">${price} € </div> 
            </div>`;
    }
}
cards.forEach((card) => new Card(card));
