import { ICard } from "./card";

const types = ['men', 'women', 'children']

const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

const images = ['img1.png', 'img2.png', 'img3.png', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img7.jpeg', 'img8.jpeg', 'img9.jpeg', 'img10.jpeg', 'img11.jpeg']

export const genItems = function (count: number) {

    const cards = []
    
    while (count > 0) {

        const _types = [...types], _sizes = [...sizes], _images = [...images]
        
        const amountSizes = Math.floor(Math.random() * _sizes.length) + 1

        const shuffledSizes = _sizes.sort(() => 0.5 - Math.random())

        const randomType = Math.floor(Math.random() * 3)

        const randomColorR = Math.floor(Math.random() * 255) + 1
        const randomColorG = Math.floor(Math.random() * 255) + 1
        const randomColorB = Math.floor(Math.random() * 255) + 1

        const numberImage = Math.floor(Math.random() * _images.length)

        const data: ICard = {
            type: _types.splice(randomType, 1)[0],
            size: shuffledSizes.splice(0, amountSizes),
            color: [`rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`],
            img: `${_images.splice(numberImage, 1)}`,
            name: 'name',
            price: Math.floor(Math.random() * 1000)
        }

        cards.push(data)

        count--

    }

    return cards

}