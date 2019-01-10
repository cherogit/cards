import {ICard, Card, cards} from './card'
import { Counter } from './counter'
import './style.styl'
import { $ } from './lib'


const $navigate = $('.navigate') as HTMLElement

if (!$navigate) throw Error('Элемент навигации не найден')	

const $catalog: HTMLElement | null = document.querySelector('.catalog')

const $catalogList: HTMLElement = document.createElement('div')

$catalogList.classList.add('catalog__list')

if (!$catalog) throw Error('Элемент каталога не найден')

$catalog.appendChild($catalogList)

const xhr = new XMLHttpRequest

xhr.open('GET', '/catalog-list.json', false)

xhr.send()

const data = JSON.parse(xhr.responseText)

data.cardList.forEach((card: any) => {
    cards.push(card)
})

const counter = new Counter($navigate, cards.length)

cards.forEach((card) => new Card(card, $catalogList))