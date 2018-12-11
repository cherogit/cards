const $counter: HTMLElement | null = document.querySelector('.navigate__counter span')

if (!$counter) throw Error('Элемент счетчик не найден')

const counterLength = 5

const moveForward = (i: number) => {

    if (i < counterLength) {

        i++

        $counter.innerHTML = `${i}`

    } else {

        $counter.innerHTML = `1`

    }

}

const moveBack = (i: number) => {

    if (i > 1) {

        i--

        $counter.innerHTML = `${i}`

    } else {

        $counter.innerHTML = `${counterLength}`

    }

}

const $arrowNext: HTMLElement | null = document.querySelector('.navigate__next')
const $arrowPrev: HTMLElement | null = document.querySelector('.navigate__prev')

if (!$arrowNext) throw Error('Элемент счетчик не найден')
if (!$arrowPrev) throw Error('Элемент счетчик не найден')

$arrowNext.addEventListener('click', () => moveForward(+$counter.innerHTML))
$arrowPrev.addEventListener('click', () => moveBack(+$counter.innerHTML))