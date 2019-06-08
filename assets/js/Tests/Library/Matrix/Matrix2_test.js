//imports
import Matrix2 from '../../../Library/Math/Matrix/Matrix2.js'

class Matrix2_test
{
  constructor(){
    /* Matrix 2x2 tests */
    console.log('------ Class Matrix 2x2 Tests --------')
    console.log(' ')

    //Addition function
    console.log('Check add function:')
    const m_add1 = new Matrix2
    const m_add2 = new Matrix2([
      [1,2],
      [2,3]
    ])
    m_add1.add(m_add2)
    console.log('Expected value of m([0,0],[0,0]) + m([1,2],[2,3]) = m([1,2],[2,3])')
    console.log('Got: ', m_add1)
    console.log(' ')

    //Subtraction function
    console.log('Check subtraction function:')
    const m_sub1 = new Matrix2
    const m_sub2 = new Matrix2([
      [1,2],
      [2,3]
    ])
    m_sub1.sub(m_sub2)
    console.log('Expected value of m([0,0],[0,0]) - m([1,2],[2,3]) = m([-1,-2],[-2,-3])')
    console.log('Got: ', m_sub1)
    console.log(' ')

    //Multiplication function
    console.log('Check Multiplication function:')
    const m_mul1 = new Matrix2([
      [3,4],
      [4,3]
    ])
    const m_mul2 = new Matrix2([
      [1,2],
      [2,3]
    ])
    m_mul1.mul(m_mul2)
    console.log('Expected value of m([3,4],[4,3]) * m([1,2],[2,3]) = m([11,18],[10,17])')
    console.log('Got: ', m_mul1)
    console.log(' ')

    //Identity Matrix function
    console.log('Check Identity matrix function:')
    const m_id = new Matrix2([
      [3,4],
      [4,3]
    ])
    m_id.identity()
    console.log('Expected value of m([3,4],[4,3]) = m([3,4],[4,3])')
    console.log('Got: ', m_id)
    console.log(' ')

    //Inverse Matrix function
    console.log('Check Inverse matrix function:')
    const m_inv1 = new Matrix2([
      [4,7],
      [2,6]
    ])
    const m_inv2 = new Matrix2([
      [4,7],
      [2,6]
    ])
    m_inv1.inverse()
    m_inv2.mul(m_inv1)
    console.log('Expected value of m([4,7],[2,6]) = m([0.6,-0.7],[-0.2,0.4])')
    console.log('Got: ', m_inv1)
    console.log('Extra test: Matrix A * Matrix A^-1 = Identity Matrix')
    console.log('Got: ', m_inv2)
    console.log(' ')

    //Transposed Matrix function
    console.log('Check Transposed matrix function:')
    const m_trans = new Matrix2([
      [4,7],
      [2,6]
    ])
    m_trans.transposed()
    console.log('Expected value of m([4,7],[2,6]) = m([4,2],[7,6])')
    console.log('Got: ', m_trans)
    console.log(' ')
  }
}

export default Matrix2_test