import Matrix2 from './Matrix2.js'

/** Class representing a two-dimensional vector. */
export default class Vector2 {
    /**
     * Create a vector.
     * @param {Number} x - The horizontal vector component.
     * @param {Number} y - The vertical vector component.
     */
    constructor(x, y) {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
    }

    /**
     * Calculate the length of the vector.
     * @return {Number} The length of the vector
     */
    norm() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    /**
     * Normalization of the vector
     * 
     * @returns {Vector2}
     */
    normalization()
    {
        const newX = this.x / this.norm()
        const newY = this.y / this.norm()
        return new Vector2(newX, newY)
    }

    /**
     * Addition of a vector to the current vector.
     * @param {Vector2} v - The second vector.
     */
    add(v) {
        this.x += v.x
        this.y += v.y
    }

    /**
     * Subtraction of a vector from the current vector.
     * @param {Vector2} v - The second vector.
     */
    sub(v) {
        this.x -= v.x
        this.y -= v.y
    }

    /**
     * Scalar multiplication. Multiplies a vector by a scalar.
     * @param {Number} a - The scalar value.
     */
    scalar(a) {
        this.x *= a
        this.y *= a
    }

    /**
     * Calculate the dot product of the current vector and another vector.
     * @param {Vector2} v - The second vector.
     * @return {Number} the dot product of the wzo
     */
    dot(v) {
        return this.x * v.x + this.y * v.y
    }

    /**
     * Rotate the vector around the origin.
     * @param {Number} α - The anticlockwise angle in degrees.
     */
    rot(α) {
        const m = new Matrix2([this.x, 0, this.y, 0])
        m.rot(α)
        console.log(m)
        this.x = m.elements[0]
        this.y = m.elements[2]
    }

    /**
     * Planar Angle
     * 
     * @param {Vector2} v 
     * @returns {Number}
     */
    plan(v)
    {
        const numerator = this.dot(v);
        const denominator = this.norm() * v.norm()
        return Math.acos(numerator / denominator)
    }
}