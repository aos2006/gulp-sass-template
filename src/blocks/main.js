import $ from 'jquery';
import Accordion from './accordion/accordion';
import Dropdown from './dropdown/dropdown';
import Tabs from './tabs/tabs';


$(document).ready(() => {
   Accordion.init();
   Dropdown.init();
   Tabs.init();
});




