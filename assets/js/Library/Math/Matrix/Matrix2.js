class Matrix2
{
  /**
   * constructor for 2x2 matrix
   * 
   * @param {Array} items 
   */
  constructor(items)
  {
    this.items = items || [
      [0, 0],
      [0, 0],
    ]
  }

  /**
   * Addition
   * 
   * @param {Matrix2} m 
   */
  add(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = [a[0][0] + m[0][0], a[0][1] + m[0][1]]
    c[1] = [a[1][0] + m[1][0], a[1][1] + m[1][1]]
    this.items = c
  }

  /**
   * Subtraction
   * 
   * @param {Matrix2} m 
   */
  sub(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = [a[0][0] - m[0][0], a[0][1] - m[0][1]]
    c[1] = [a[1][0] - m[1][0], a[1][1] - m[1][1]]
    this.items = c
  }

  /**
   * Multiplication
   * 
   * @param {Matrix2} m 
   */
  mul(m)
  {
    const a = this.items
    m = m.items
    const c = []
    c[0] = a[0][0] * m[0][0] + a[0][1] * m[1][0]
    c[1] = a[0][0] * m[0][1] + a[0][1] * m[1][1]
    c[2] = a[1][0] * m[0][0] + a[1][1] * m[1][0]
    c[3] = a[1][0] * m[0][1] + a[1][1] * m[1][1]
    
    this.items = [
      [c[0], c[1]],
      [c[2], c[3]]
    ]
  }

  /**
   * Identity Matrix
   * 
   * @returns {Function}
   */
  identity()
  {
    const c = {
      items: [[1,0],[0,1]]
    }
    return this.mul(c)
  }

  /**
   * Inverse Matrix
   */
  inverse()
  {
    const a = this.items
    const det = 1 / ((a[0][0] * a[1][1]) - (a[0][1] * a[1][0]))
    if(det !== 0){
      this.items = [
        [det * a[1][1], det * -(a[0][1])],
        [det * -(a[1][0]), det * a[0][0]]
      ]
    } else {
      console.log('This matrix is a "Singular" and has in addition no inverse.')
    }
  }

  /**
   * Transposed Matrix
   */
  transposed()
  {
    const a = this.items
    this.items = [
      [a[0][0], a[1][0]],
      [a[0][1], a[1][1]]
    ]
  }

  /**
   * Rotate the matrix around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const a = this.elements
    const r = [
        [cos, -sin],
        [sin, cos]
    ]
    this.elements = r
    this.mul(a);
  }
}

export default Matrix2