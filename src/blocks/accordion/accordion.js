export class Accordion {

  handleClick({toggler, content, root, current}) {
    return (ev) => {
      const isFiltered = Array.from(root.querySelectorAll('.js-accordion-item')).filter((item) => item.dataset.eq !== current.dataset.eq);
      current.classList.toggle('accordion__item--expanded');
      isFiltered.forEach((item) => {
        item.classList.remove('accordion__item--expanded');
      })
    }
  }

  init() {
    const accordions = Array.from(document.querySelectorAll('.js-accordion'));

    accordions.forEach((item) => {
      const items = item.querySelectorAll('.js-accordion-item');
      items.forEach((child) => {
        console.log(child);
        const toggler = child.querySelector('.js-accordion-header');
        const content = child.querySelector('.js-accordion-content');
        toggler.addEventListener('click', this.handleClick(
            {toggler: toggler, content: content, root: item, current: child})
        )
      })
    })
  }
}


export default new Accordion();
