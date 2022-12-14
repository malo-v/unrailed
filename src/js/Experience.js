import MapGenerator from './generator/MapGenerator'
import Render from './render/Render'
import Engine from './engine/Engine'

import Assets from './Assets'

export default class Experience {
    constructor() {
        this.mapGenerator = new MapGenerator()
        this.engine = new Engine()
        this.render = new Render(this.engine)
        
        this.assets = new Assets(this)
    }
    
    start() {
        this.render.setAssets(this.assets)
        this.createNewChunk()
        this.tick()
    }
    
    createNewChunk() {
        const map = this.mapGenerator.getNewMap()
        const renderChunk = this.render.addChunk(map)
        this.engine.addChunk(map, renderChunk)
    }
    
    tick() {
        this.engine.update()
        this.render.update()
        window.requestAnimationFrame(() => this.tick())
    }
}