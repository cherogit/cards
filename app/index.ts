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

const cards_request = new XMLHttpRequest

cards_request.open('GET', '/catalog-list.json', false)

cards_request.send()

const data = JSON.parse(cards_request.responseText)

data.cardList.forEach((card: ICard) => cards.push(card))

let current = 0, step = 3

const currentListFunc = (list: any[], from: number, to: number) => list.slice(from, to)

let current_list = currentListFunc(cards, current, current + step)

const counter = new Counter($navigate, cards)

counter.onChange = (current) => {}

current_list.forEach((card: ICard) => new Card(card, $catalogList))


