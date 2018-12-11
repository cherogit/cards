const $catalog: HTMLElement = document.querySelector('.catalog')

const $catalogList: HTMLElement = document.createElement('div')

$catalogList.classList.add('catalog__list')

$catalog.appendChild($catalogList)

const $controls = document.querySelector('.navigate__controls')
const 

const cards: ICard[] = [
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
]

interface ICard {
    price: number
    color: string[]
    img: string
    name: string
    size: string[]
}

class Card {

    public $card: HTMLElement = document.createElement('div')

    constructor(card) {

        this.$card.classList.add('card')

        this.$card.innerHTML = this.model(card)

        $catalogList.appendChild(this.$card)

    }

    public model({ size, color, img, name, price }: ICard) {

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
            </div>`
    }
}

cards.forEach((card) => new Card(card))