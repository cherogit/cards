const $navigate: HTMLElement = document.createElement('div')

$navigate.classList.add('navigate')

const $catalog: HTMLElement = document.createElement('div')

$catalog.classList.add('catalog.container')

const $catalogList: HTMLElement = document.createElement('div')

$catalogList.classList.add('catalog__list')

const $catalogCategory: HTMLElement = document.createElement('div')

$catalogCategory.classList.add('catalog__category')

$catalog.appendChild($catalogCategory)
$catalog.appendChild($navigate)
$catalog.appendChild($catalogList)


const checkboxes = document.querySelectorAll('.checkbox__field');

[].forEach.call(checkboxes, (item: HTMLInputElement) => {

    item.addEventListener('change', () => {
        if (item.checked === true) {
            console.log(item.dataset.type)
        }
    })
})

