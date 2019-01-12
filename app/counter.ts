export class Counter {

    public $counter = document.createElement('div')

    public $controls = document.createElement('div')

    public $prev = document.createElement('button')

    public $next = document.createElement('button')

    public current: number = 1

    public max: number

    constructor(public $root: HTMLElement, public cards: any) {

        this.max = Math.ceil(this.cards.length / 3)

        this.$counter.classList.add('navigate__counter')
        $root.appendChild(this.$counter)

        this.$controls.classList.add('navigate__controls')
        $root.appendChild(this.$controls)

        this.$prev.classList.add('navigate__prev')
        this.$prev.innerText = '<'
        this.$controls.appendChild(this.$prev)
        this.$prev.addEventListener('click', this.prev.bind(this))

        this.$next.classList.add('navigate__next')
        this.$next.innerText = '>'
        this.$controls.appendChild(this.$next)
        this.$next.addEventListener('click', this.next.bind(this))

        this.renderCounter()

    }

    public renderCounter = () => this.$counter.innerHTML = `${this.current} / ${this.max}`

    public prev = () => {
        (this.current <= 1) ? this.current = this.max : this.current--
        this.renderCounter()
    }
        
    public next = () => {
        (this.current < this.max) ? this.current++ : this.current = 1
        this.renderCounter()
    }

}