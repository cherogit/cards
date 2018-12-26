export class Counter {

    public $element = document.createElement('div')

    public className: string = 'counter'

    public $controls = document.createElement('div')

    public $counter = document.createElement('div')

    public $prev = document.createElement('button')

    public $next = document.createElement('button')

    public current: number = 1

    public max: number = 5

    constructor(public $root: HTMLElement) {

        this.$element.classList.add(this.className)

        this.$element.appendChild(this.$counter)
        this.$counter.classList.add('navigate__counter')
        
        this.$element.appendChild(this.$controls)
        this.$controls.classList.add('navigate__controls')
        
        this.$controls.appendChild(this.$prev)
        this.$prev.classList.add('navigate__prev')
        this.$prev.innerText = '<'
        this.$prev.addEventListener('click', this.prev.bind(this))
        
        this.$controls.appendChild(this.$next)
        this.$next.classList.add('navigate__next')
        this.$next.innerText = '>'
        this.$next.addEventListener('click', this.next.bind(this))

        this.$root.appendChild(this.$element)

        this.render_counter()

    }

    public render_counter() {

        this.$counter.innerHTML = `${this.current} / ${this.max}`

    }

    public next() {

        if (this.current < this.max) this.current++

        else this.current = 1

        this.render_counter()

    }

    public prev() {

        if (this.current > 1) this.current--

        else this.current = this.max

        this.render_counter()

    }

}

// <!-- <div class="navigate__counter"><span>1</span> / 5</div> -->

// <div class="navigate__controls">
//     <button class="navigate__prev"><</button>
//     <button class="navigate__next">></button>
// </div>