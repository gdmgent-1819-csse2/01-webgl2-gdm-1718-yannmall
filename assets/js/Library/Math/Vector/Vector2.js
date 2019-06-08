//imports
import Matrix2 from '../Matrix/Matrix2.js'

class Vector2 
{
  /**
  * Represents a two dimensional vector
  * @param {Number} x
  * @param {Number} y
  */
  constructor(x, y) 
  {
    this.x = Number(x) || 0
    this.y = Number(y) || 0
  }

  /**
   * Length of the vector
   * 
   * @returns {Number}
   */
  norm()
  {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
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
   * Addition
   * 
   * @param {Vector2} v 
   */
  add(v)
  {
    this.x += v.x
    this.y += v.y
  }

  /**
   * Subtraction
   * 
   * @param {Vector2} v 
   */
  sub(v)
  {
    this.x -= v.x
    this.y -= v.y
  }

  /**
   * Scalar multiplication
   * 
   * @param {Number} a 
   */
  scalar(a)
  {
    this.x *= a
    this.y *= a
  }

  /**
   * Dot product
   * 
   * @param {Vector2} v 
   * @returns {Number}
   */
  dot(v)
  {
    return (this.x * v.x) + (this.y * v.y)
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

  /**
   * Rotate the vector around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    const m = new Matrix2([[this.x, 0],[this.y, 0]])
    m.rot(α)
    this.x = m.elements[0][0]
    this.y = m.elements[1][0]
  }
}

export default Vector2