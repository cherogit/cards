import { ICard, cards } from './card'
import { genItems } from './generate'
import './style.styl'
import { Catalog } from './catalog';

let $main = document.querySelector('main')


const data = genItems(100)

data.forEach((card: ICard) => cards.push(card))

const checkboxes = document.querySelectorAll<HTMLInputElement>('.checkbox__field');

checkboxes.forEach((item: HTMLInputElement) => {

    item.addEventListener('change', () => {

        if (item.checked === true) {

            if (!$main) throw Error('Контейнер не найден')

            const _cards = cards.filter((card) => card.type === item.dataset.type)

            new Catalog($main, _cards, item.dataset.type as string)

        } else {

            const currentCatalog: HTMLElement | null = document.querySelector(`.catalog[data-type="${item.dataset.type}"]`)
            
            if (!currentCatalog) throw Error('Искомый каталог не найден.')

            currentCatalog.remove()

        }

    })

})
