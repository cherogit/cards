export class Counter {

    public $container = document.createElement('div')

    public $counter = document.createElement('div')

    public $controls = document.createElement('div')

    public $prev = document.createElement('button')

    public $next = document.createElement('button')

    public current: number = 1

    public max: number

    public onChange?: OnChangeFunction

    constructor(public $root: HTMLElement, public cards: any[]) {

        this.max = Math.ceil(this.cards.length / 3)

        this.$container.classList.add('navigate')

        this.$counter.classList.add('navigate__counter')
        this.$container.appendChild(this.$counter)
        
        this.$controls.classList.add('navigate__controls')
        this.$container.appendChild(this.$controls)
        
        this.$prev.classList.add('navigate__prev')
        this.$prev.innerText = '<'
        this.$controls.appendChild(this.$prev)
        this.$prev.addEventListener('click', this.prev.bind(this))
        
        this.$next.classList.add('navigate__next')
        this.$next.innerText = '>'
        this.$controls.appendChild(this.$next)
        this.$next.addEventListener('click', this.next.bind(this))
        
        $root.appendChild(this.$container)

        this.renderCounter()

    }

    public renderCounter() {

        return this.$counter.innerHTML = `${this.current} / ${this.max}`
        
    }

    public prev() {
        (this.current <= 1) ? this.current = this.max : this.current--
        this.renderCounter()
        
        if (this.onChange) this.onChange(this.current)
    }
        
    public next() {
        (this.current < this.max) ? this.current++ : this.current = 1
        this.renderCounter()
        if (this.onChange) this.onChange(this.current)
    }

}

interface OnChangeFunction {

    (current: number): void

}