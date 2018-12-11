export const cards: ICard[] = [
    {
        size: ['sm'],
        color: ['#165eb9'],
        img: './img/t-short.png',
        name: 'T-shirt',
        price: 5.00
    },
    {
        size: ['sm', 'lg'],
        color: ['orange'],
        img: './img/img2.png',
        name: 'Pants FORCLAZ',
        price: 30.00
    },
    {
        size: ['xl', 'xll'],
        color: ['black'],
        img: './img/img3.png',
        name: 'backpack',
        price: 60.20
    }
]

export interface ICard {
    size: string[]
    color: string[]
    img: string
    name: string
    price: number
}

export class Card {

    public $card: HTMLElement = document.createElement('div')

    constructor(card: ICard, $root: HTMLElement) {

        this.$card.classList.add('card')

        this.$card.innerHTML = this.model(card)

        $root.appendChild(this.$card)

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