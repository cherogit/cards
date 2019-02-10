import { $ } from './lib'
import { ICard, Card, cards } from './card'
import { Counter } from './counter'
import { genItems } from './generate'
import './style.styl'

let $main = document.querySelector('main')


const data = genItems(100)

data.forEach((card: ICard) => cards.push(card))

// console.log(data)


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

class Catalog {

    public $el = document.createElement('div')

    public $category = document.createElement('div')

    public $category_name = document.createElement('span')

    public counter = new Counter(this.$el, cards)

    slider = new Slider(this.$el, cards)

    constructor(public $container: Element, public cateroryType: string) {

        this.$el.classList.add('catalog', 'container')

        this.$el.setAttribute('data-type', cateroryType)

        this.$container.appendChild(this.$el)

        this.$category.classList.add('catalog__category')
        this.$el.prepend(this.$category)

        this.$category_name.classList.add('catalog__category-name')
        this.$category_name.innerText = cateroryType
        this.$category.appendChild(this.$category_name)

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

            if (!$main) throw Error('Контейнер не найден')

            new Catalog($main, item.dataset.type as string)

        } else {
            const currentCatalog: HTMLElement | null = document.querySelector(`.catalog[data-type="${item.dataset.type}"]`)
            
            if (!currentCatalog) throw Error('Искомый каталог не найден.')

            currentCatalog.remove()
        }
    })
})


