import { startGame } from '../js/modules/service.js'
import DOM from '../js/modules/dom.js';


init();

function init() {
    startGame();

    DOM.dir = '';
    DOM.snake = [];
    DOM.snake[0] = {
        x: 9 * DOM.box,
        y: 10 * DOM.box
    }
    DOM.food = {
        x: Math.floor(Math.random() * 17 + 1) * DOM.box,
        y: Math.floor(Math.random() * 15 + 3) * DOM.box
    }
}