"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomValue = getRandomValue;
exports.wait = wait;
function getRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=Util.js.map