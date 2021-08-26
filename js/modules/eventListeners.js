import DOM from '../js/modules/dom.js';
import {
    direction,
    getLevelGame,
    restartGame,

} from '../js/modules/service.js'

document.addEventListener('keydown', (e) => { direction(e) });


DOM.easyBtn.addEventListener('click', () => {
    getLevelGame(200);

});

DOM.normalBtn.addEventListener('click', () => {
    getLevelGame(100);

});

DOM.hardBtn.addEventListener('click', () => {
    getLevelGame(80);
});