const test: HTMLElement | null = document.querySelector('.catalog')

if (!test) throw Error('Элемент каталога не найден')

const testData = test.dataset.type


const checkboxes = document.querySelectorAll('.checkbox__field');

[].forEach.call(checkboxes, (item: HTMLInputElement) => {

    item.addEventListener('change', () => {
        if (item.checked === true && testData === item.dataset.type) {
            console.log(item.dataset.type)
            test.remove()
        }
    })
})

