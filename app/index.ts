import { $ } from './lib'
import { ICard, Card, cards } from './card'
import { Counter } from './counter'
import { genItems } from './generate'
import './style.styl'

let $main = document.querySelector('main')



const data = genItems(100)


data.forEach((card: ICard) => cards.push(card))

class Slider {

    public current = 0
    
    public step = 3

    public $el = document.createElement('div')

    constructor(public $container: Element, public cards: ICard[]) {

        this.$el.classList.add('catalog__list')

        this.$container.appendChild(this.$el)

        this.render()

    }

    public render() {

        const currentListFunc = (list: any[], from: number, to: number) => list.slice(from, to)

        let current_list = currentListFunc(cards, this.current, this.current + this.step)

        current_list.forEach((card: ICard) => new Card(card, this.$el))

    }

    public get currentList() {

        return this.cards.slice(this.current, this.current + this.step)

    }

}

class CatalogList {

    public $el = document.createElement('div')

    public counter = new Counter(this.$el, cards)

    public slider = new Slider(this.$el, cards)

    constructor(public $container: Element) {

        this.$el.classList.add('catalog-list')

        this.$container.appendChild(this.$el)

        this.counter.onChange = (current) => {

            this.slider.current--

            this.slider.$el.innerHTML = ''

            this.slider.render()

        }

    }

}

const checkboxes = document.querySelectorAll('.checkbox__field');

[].forEach.call(checkboxes, (item: HTMLInputElement) => {

    item.addEventListener('change', () => {
        if (item.checked === true) {
            console.log('HERE', item.dataset.type)

            if (!$main) throw Error('Контэинер не найден')

            new CatalogList($main)
        }
    })
})


