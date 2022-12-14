import * as THREE from 'three'

export default class Renderer extends THREE.WebGLRenderer {
    constructor(size) {
        super({
            canvas: document.querySelector('canvas.webgl'),
            antialias: true
        })
        this.update(size)
    }

    update(size) {
        this.setSize(size.width, size.height)
    }
}