import { startGame, restartGame } from '../js/modules/service.js'
import DOM from '../js/modules/dom.js';

import {
    direction,
    getLevelGame,

} from '../js/modules/service.js'

init();
startGame();

function init() {
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


document.addEventListener('keydown', (e) => { direction(e) });


DOM.easyBtn.addEventListener('click', () => {
    console.log("Easy")
    getLevelGame(200);

});

DOM.normalBtn.addEventListener('click', () => {
    getLevelGame(100);
});

DOM.hardBtn.addEventListener('click', () => {
    getLevelGame(80);
});

DOM.restartBtn.addEventListener('click', () => {
    console.log("Restart")
    restartGame()
});