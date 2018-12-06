const $main = document.querySelector('.main')

const $catalog = document.createElement('div')

$catalog.classList.add('catalog', 'container')

$main.appendChild($catalog)

const cards = [
    {
        size: 'size',
        color: '#165eb9',
        src: './assets/img/t-short.png',
        name: 'T-shirt',
        price: '5,00'
    },
    {
        size: 'size',
        color: 'orange',
        src: './assets/img/img2.png',
        name: 'Pants FORCLAZ',
        price: '30,00'
    },
    {
        size: 'size',
        color: 'black',
        src: './assets/img/img3.png',
        name: 'backpack',
        price: '60,20'
    }]

class Card {
	
	constructor(size, color, src, name, price) {
        this.$card = document.createElement('div')
        this.$card.classList.add('card')

        this.cardHtml = 
            `<div class="card__header">` + 
                `<div class="card__size">${size}</div>` + 
                `<div class="card__colors">` + 
                    `<button class="color" style="background-color: ${color}" type="button"></button>` + 
                `</div>` + 
            `</div>` + 
            `<div class="card__pict">` + 
                `<img src="` + src + `" alt="" />` + 
            `</div>` + 
            `<div class="card__info">` + 
                `<div class="card__name">${name}</div>` + 
                `<div class="card__price">${price} € </div>` + 
            `</div>`

        this.$card.innerHTML = this.cardHtml

		$catalog.appendChild(this.$card)
	}
}

cards.forEach((card) => {
    card = new Card(card.size, card.color, card.src, card.name, card.price)
})