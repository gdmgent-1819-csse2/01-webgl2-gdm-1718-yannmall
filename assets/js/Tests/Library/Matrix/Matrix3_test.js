//imports
import Matrix3 from '../../../Library/Math/Matrix/Matrix3.js'

class Matrix3_test
{
  constructor(){
    /* Matrix 3x3 tests */
    console.log('------ Class Matrix 3x3 Tests --------')
    console.log(' ')

    //Addition function
    console.log('Check add function:')
    const m_add1 = new Matrix3
    const m_add2 = new Matrix3([
      [1,2,3],
      [2,3,1],
      [4,5,6]
    ])
    m_add1.add(m_add2)
    console.log('Expected value of m([0,0,0],[0,0,0], [0,0,0]) + m([1,2,3],[2,3,1],[4,5,6]) = m([1,2,3],[2,3,1],[4,5,6])')
    console.log('Got: ', m_add1)
    console.log(' ')

    //Subtraction function
    console.log('Check subtraction function:')
    const m_sub1 = new Matrix3
    const m_sub2 = new Matrix3([
      [1,2,3],
      [2,3,1],
      [4,5,6]
    ])
    m_sub1.sub(m_sub2)
    console.log('Expected value of m([0,0,0],[0,0,0], [0,0,0]) - m([1,2,3],[2,3,1],[4,5,6]) = m([-1,-2,-3],[-2,-3,-1],[-4,-5,-6])')
    console.log('Got: ', m_sub1)
    console.log(' ')

    //Multiplication function
    console.log('Check Multiplication function:')
    const m_mul1 = new Matrix3([
      [3,4,8],
      [4,3,6],
      [-3,-4,3]
    ])
    const m_mul2 = new Matrix3([
      [1,2,2],
      [2,3,0],
      [3,2,-1]
    ])
    m_mul1.mul(m_mul2)
    console.log('Expected value of m([3,4,8],[4,3,6],[-3,4,-3]) * m([1,2,2],[2,3,0],[3,2,-1]) = m([35,34,-2],[28,29,2],[-2,-12,-9])')
    console.log('Got: ', m_mul1)
    console.log(' ')

    //Identity Matrix function
    console.log('Check Identity matrix function:')
    const m_id = new Matrix3([
      [3,4,4],
      [4,3,0],
      [7,0,-1]
    ])
    m_id.identity()
    console.log('Expected value of m([3,4,4],[4,3,0],[7,0,-1]) = m([3,4,4],[4,3,0],[7,0,-1])')
    console.log('Got: ', m_id)
    console.log(' ')

    //Inverse Matrix function
    console.log('Check Inverse matrix function:')
    const m_inv1 = new Matrix3([
      [1,2,3],
      [0,1,4],
      [5,6,0]
    ])
    const m_inv2 = new Matrix3([
      [1,2,3],
      [0,1,4],
      [5,6,0]
    ])
    m_inv1.inverse()
    m_inv2.mul(m_inv1)
    console.log('Expected value of m([1,2,3],[0,1,4],[5,6,0]) = m([-24,18,5],[20,-15,-4],[-5,4,1])')
    console.log('Got: ', m_inv1)
    console.log('Extra test: Matrix A * Matrix A^-1 = Identity Matrix')
    console.log('Got: ', m_inv2)
    console.log(' ')

    //Transposed Matrix function
    console.log('Check Transposed matrix function:')
    const m_trans = new Matrix3([
      [4,7,0],
      [2,6,-9],
      [3,9,7]
    ])
    m_trans.transposed()
    console.log('Expected value of m([4,7,0],[2,6,-9],[3,9,7]) = m([4,2,3],[7,6,9],[0,-9,7])')
    console.log('Got: ', m_trans)
    console.log(' ')
  }
}

export default Matrix3_test