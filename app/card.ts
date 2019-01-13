export const cards: ICard[] = []

export interface ICard {
    size: string[] // ['xs', 'xl', 'sm', 'ld']
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

        // $root.innerHTML = ''

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