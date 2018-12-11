import {ICard, Card, cards} from './card'
import './style.styl'


const $catalog: HTMLElement | null = document.querySelector('.catalog')

const $catalogList: HTMLElement = document.createElement('div')

$catalogList.classList.add('catalog__list')

if (!$catalog) throw Error('Элемент католога не найден')

$catalog.appendChild($catalogList)

// new Counter(document.querySelector('.counter'))


cards.forEach((card) => new Card(card, $catalogList))