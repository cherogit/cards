const checkboxes = document.querySelectorAll('.checkbox__field');

[].forEach.call(checkboxes, (item: HTMLInputElement) => {

    item.addEventListener('change', () => {
        if (item.checked == true)
            console.log(item.dataset.type)
    })
})

const test: HTMLElement | null = document.querySelector('.catalog')

if (!test) throw Error('Элемент каталога не найден')

const testData = test.dataset.type

// console.log(testData)

if (testData == 'women') console.log('нашел!')