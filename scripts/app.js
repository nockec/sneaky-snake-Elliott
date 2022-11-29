//@ts-check
/** @type {HTMLCanvasElement} */ //@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */ //@ts-ignore canvas is an HTMLCanvasElement
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let game = {
	gridsize: 20,
	refreshrate: 500, // in millisencondes
};

class player {
	/**
	 * @param {Number} x
	 * @param {number} y
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.w = game.gridsize;
		this.y = this.w;
		this.segments = [];
	}
}

class segment {
	/**
	 * @param {Number} x
	 * @param {number} y
	 * @param {string} color
	 */
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.w = game.gridsize;
		this.y = this.w;
		this.color = color;
	}

	update() {}

	draw() {}
}
