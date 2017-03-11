class Dropdown {

  handleClick(ev) {
      ev.stopPropagation();
      const list = ev.currentTarget.querySelector('.js-list');
      list.classList.toggle('dropdown-list--show');
  };


  init() {
    const lists = Array.from(document.querySelectorAll('.js-dropdown'));

    document.addEventListener('click', (ev) => {

     lists.forEach((item) => {
       item.querySelector('.js-list').classList.remove('dropdown-list--show');
     })

    });

     lists.forEach((item) => {
       item.addEventListener('click', this.handleClick)
     })
   }
}

export default new Dropdown();
