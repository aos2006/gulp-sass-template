import $ from 'jquery';

class Tabs {
  handleClick(root){

    return (ev) => {
      ev.preventDefault();
      const currentLink = ev.currentTarget;
      const currentTab = ev.currentTarget.dataset.href;
      const filteredTabs = Array.from(root.querySelectorAll('.tabs__content')).filter((item) => item.id !== currentTab);
      Array.from(root.querySelectorAll('.tabs__link')).forEach((item) => item.classList.remove('tabs__link--active'));
      currentLink.classList.add('tabs__link--active');
      root.querySelector(`#${currentTab}`).classList.add('tabs__content--active');
      filteredTabs.forEach((item) => item.classList.remove('tabs__content--active'));
    }

  }


  init() {
    const tabsList = Array.from(document.querySelectorAll('.js-tabs'));

    tabsList.forEach((item) => {
      const togglers = Array.from(item.querySelectorAll('.js-tabs-toggler'));
      const root = item;

      togglers.forEach((item) => {
        item.addEventListener('click', this.handleClick(root))
      })
    })
  }
}

export default new Tabs();
