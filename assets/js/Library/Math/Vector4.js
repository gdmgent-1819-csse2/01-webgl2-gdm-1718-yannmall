import Matrix4 from './Matrix4.js'

/** Class representing a two-dimensional vector. */
export default class Vector4 {
    /**
     * Create a vector.
     * @param {Number} x - The horizontal vector component.
     * @param {Number} y - The vertical vector component.
     * @param {Number} z - The z-axis vector component
     * @param {Number} w
     */
    constructor(x, y, z, w) {
        this.x = Number(x) || 0
        this.y = Number(y) || 0
        this.z = Number(z) || 0
        this.w = Number(w) || 0
    }

    /**
     * Calculate the length of the vector.
     * @return {Number} The length of the vector
     */
    norm() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2)
    }

    /**
     * Normalization of the vector
     * 
     * @returns {Vector4}
     */
    normalization()
    {
        const newX = this.x / this.norm()
        const newY = this.y / this.norm()
        const newZ = this.z / this.norm()
        const newW = this.w / this.norm()
        return new Vector4(newX, newY,newZ,newW)
    }

    /**
     * Addition of a vector to the current vector.
     * @param {Vector4} v - The second vector.
     */
    add(v) {
        this.x += v.x
        this.y += v.y
        this.z += v.z
    }

    /**
     * Subtraction of a vector from the current vector.
     * @param {Vector4} v - The second vector.
     */
    sub(v) {
        this.x -= v.x
        this.y -= v.y
        this.z -= v.z
    }

    /**
     * Scalar multiplication. Multiplies a vector by a scalar.
     * @param {Number} a - The scalar value.
     */
    scalar(a) {
        this.x *= a
        this.y *= a
        this.z *= a
    }

    /**
     * Calculate the dot product of the current vector and another vector.
     * @param {Vector4} v - The second vector.
     * @return {Number} the dot product of the wzo
     */
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w
    }

    /**
     * Planar Angle
     * 
     * @param {Vector4} v 
     * @returns {Number}
     */
    plan(v)
    {
        const numerator = this.dot(v);
        const denominator = this.norm() * v.norm()
        return Math.acos(numerator / denominator)
    }
}