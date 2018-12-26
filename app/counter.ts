class Counter {

    public $counter: HTMLElement | null = document.querySelector('.counter')

    constructor($root: HTMLElement) {

        // this.$card.classList.add('card')

        // this.$card.innerHTML = this.model(card)

    }
}


const $counter: HTMLElement | null = document.querySelector('.counter')
if (!$counter) throw Error('Элемент счетчик не найден')

const counterLength = 5

$counter.innerHTML = `<span>1</span> / ${counterLength}`

const $counterValue: HTMLElement | null = $counter.querySelector('span')
if (!$counterValue) throw Error('Элемент счетчик не найден')

const $parentCounter: Element | null = $counter.closest('.catalog')
if (!$parentCounter) throw Error('Элемент не найден')

const moveForward = (i: number) => {
    console.log(i)
    if (i < counterLength) {
        i++
        $counter.innerHTML = `<span>${i}</span> / ${counterLength}`
    } else {
        $counter.innerHTML = `<span>1</span> / ${counterLength}`
    }
}

const moveBack = (i: number) => {
    console.log(i)
    if (i > 1) {
        i--
        $counter.innerHTML = `<span>${i}</span> / ${counterLength}`
    } else {
        $counter.innerHTML = `<span>${counterLength}</span> / ${counterLength}`
    }
}

const $arrowNext: HTMLElement | null = document.querySelector('.navigate__next')
const $arrowPrev: HTMLElement | null = document.querySelector('.navigate__prev')

if (!$arrowNext) throw Error('Элемент счетчик не найден')
if (!$arrowPrev) throw Error('Элемент счетчик не найден')

$arrowNext.addEventListener('click', () => moveForward(+$counterValue.innerHTML))
$arrowPrev.addEventListener('click', () => moveBack(+$counterValue.innerHTML))