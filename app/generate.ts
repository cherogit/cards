import { ICard } from "./card";

export const genItems = function(count: number) {

    const cards = []

    while ( count > 0 ) {

        const types = ['men', 'women', 'children']

        const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

        const images = ['img1.png', 'img2.png', 'img3.png', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img7.jpeg', 'img8.jpeg', 'img9.jpeg', 'img10.jpeg', 'img11.jpeg']

        const amountSizes = Math.floor(Math.random() * sizes.length) + 1

        const shuffledSizes = sizes.sort( () => 0.5 - Math.random())

        const randomType = Math.floor(Math.random() * 3)

        const randomColorR = Math.floor(Math.random() * 255) + 1
        const randomColorG = Math.floor(Math.random() * 255) + 1
        const randomColorB = Math.floor(Math.random() * 255) + 1

        const numberImage = Math.floor(Math.random() * images.length) + 1

        const data: ICard = {
            type: types.splice(randomType, 1),
            size: shuffledSizes.splice(0, amountSizes),
            color: [`rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`],
            img: `${images.splice(numberImage, 1)}`,
            name: 'name',
            price: Math.floor(Math.random() * 1000)
        }

        cards.push(data)

        count--

    }

    return cards

}