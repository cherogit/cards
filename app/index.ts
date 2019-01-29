import { ICard, Card, cards } from './card'
import { Counter } from './counter'
import './style.styl'
import { $ } from './lib'
import './filter'
import './generate'

const $navigate = $('.navigate') as HTMLElement

if (!$navigate) throw Error('Элемент навигации не найден')	

const $catalog: HTMLElement | null = document.querySelector('.catalog')

if (!$catalog) throw Error('Элемент каталога не найден')

const $catalogList: HTMLElement = document.createElement('div')

$catalogList.classList.add('catalog__list')

$catalog.appendChild($catalogList)

// const cards_request = new XMLHttpRequest

// cards_request.open('GET', '/catalog-list.json', false)

// cards_request.send()

// const data = JSON.parse(cards_request.responseText)

// data.cardList.forEach((card: ICard) => cards.push(card))




let current = 0, step = 3

const currentListFunc = (list: any[], from: number, to: number) => list.slice(from, to)

let current_list = currentListFunc(cards, current, current + step)

current_list.forEach((card: ICard) => new Card(card, $catalogList))

const counter = new Counter($navigate, cards)

counter.onChange = (current) => {

    current = current - 1

    $catalogList.innerHTML = ''

    current_list = currentListFunc(cards, current * 3, current * 3 + step)
    
    current_list.forEach((card: ICard) => new Card(card, $catalogList))
}