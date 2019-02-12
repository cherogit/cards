import { ICard, Card } from "./card";

export class Slider {

  public current = 0
  
  public step = 3

  public $el = document.createElement('div')

  constructor(public $container: Element, public cards: ICard[]) {

      this.$el.classList.add('catalog__list')

      this.$container.appendChild(this.$el)

      this.render()

  }

  public render() {

      this.currentList.forEach((card: ICard) => new Card(card, this.$el))

  }

  public get currentList() {

      return this.cards.slice(this.current, this.current + this.step)

  }

}