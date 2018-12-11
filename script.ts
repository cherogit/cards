const $catalog: HTMLElement = document.querySelector('.catalog')

const $catalogList: HTMLElement = document.createElement('div')

$catalogList.classList.add('catalog__list')

$catalog.appendChild($catalogList)

const $counter: HTMLElement = document.querySelector('.navigate__counter span')

const counterLength = 5

const moveForward = (i) => {

    if (i < counterLength) {
        i++
        $counter.innerHTML = `${i}`
    } else {
        $counter.innerHTML = `1`
    }
}

const moveBack = (i) => {
    if (i > 1) {
        i--
        $counter.innerHTML = `${i}`
    } else {
        $counter.innerHTML = `${counterLength}`
    }
}

const $arrowNext: HTMLElement = document.querySelector('.navigate__next')
const $arrowPrev: HTMLElement = document.querySelector('.navigate__prev')

$arrowNext.addEventListener('click', () => { moveForward($counter.innerHTML) })
$arrowPrev.addEventListener('click', () => { moveBack($counter.innerHTML) })

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
    size: string[]
    color: string[]
    img: string
    name: string
    price: number
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