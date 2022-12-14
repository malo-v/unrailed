import { createNoise2D } from 'simplex-noise'

export default class RiverGenerator {
    constructor(frequency, limit) {
        this.generator = createNoise2D()
        this.frequency = frequency
        this.limit = limit
    }

    get(x, y) {
        const value = this.generator((x + 1) / this.frequency, (y + 1) / this.frequency)
        return (value > - this.limit) & (value < this.limit)
    }
}