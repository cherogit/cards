import { ICard } from "./card";

const genItems = function(count: number) {
    console.clear()

    const cards = []


    while ( count > 0 ) {

        const data: ICard = {}

        const types = ['men', 'women', 'children']

        const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

        const sizesCount = Math.floor(Math.random() * sizes.length) + 1

        const shuffled_sizes = sizes.sort( () => 0.5 - Math.random())

        const randomType = Math.floor(Math.random() * 3)

        data.type = types.splice(randomType, 1)
        data.size = shuffled_sizes.splice(0, sizesCount)
        

        cards.push(data)

        count--

    }

    return cards

}

const test = genItems(10)

console.log(test)