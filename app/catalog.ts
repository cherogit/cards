import { Counter } from "./counter";
import { Slider } from "./slider";
import { ICard } from "./card";

export class Catalog {

  public $el = document.createElement('div')

  public $category = document.createElement('div')

  public $category_name = document.createElement('span')

  public counter = new Counter(this.$el, this.cards)

  public slider = new Slider(this.$el, this.cards)

  constructor(

    public $container: Element,

    public cards: ICard[],

    public cateroryType: string

  ) {

    this.$el.classList.add('catalog', 'container')

    this.$el.setAttribute('data-type', cateroryType)

    this.$container.appendChild(this.$el)

    this.$category.classList.add('catalog__category')
    this.$el.prepend(this.$category)

    this.$category_name.classList.add('catalog__category-name')
    this.$category_name.innerText = cateroryType
    this.$category.appendChild(this.$category_name)

    this.counter.onChange = (current: number) => {

      this.slider.current = current

      this.slider.$el.innerHTML = ''

      this.slider.render()

    }

  }

}