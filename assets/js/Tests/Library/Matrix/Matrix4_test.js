//imports
import Matrix4 from '../../../Library/Math/Matrix/Matrix4.js'

class Matrix4_test
{
  constructor(){
    /* Matrix 4x4 tests */
    console.log('------ Class Matrix 4x4 Tests --------')
    console.log(' ')

    //Addition function
    console.log('Check add function:')
    const m_add1 = new Matrix4
    const m_add2 = new Matrix4([
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ])
    m_add1.add(m_add2)
    console.log('Expected value of m([0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]) + m([1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]) = m([1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16])')
    console.log('Got: ', m_add1)
    console.log(' ')

    //Subtraction function
    console.log('Check subtraction function:')
    const m_sub1 = new Matrix4
    const m_sub2 = new Matrix4([
      [1,2,3,5],
      [2,3,1,10],
      [4,5,6,7],
      [0,-1,-2,-3]
    ])
    m_sub1.sub(m_sub2)
    console.log('Expected value of m([0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]) - m([1,2,3,5],[2,3,1,10],[4,5,6,7],[0,-1,-2,-3]) = m([-1,-2,-3,-5],[-2,-3,-1,-10],[-4,-5,-6,-7],[0,1,2,3])')
    console.log('Got: ', m_sub1)
    console.log(' ')

    //Multiplication function
    console.log('Check Multiplication function:')
    const m_mul1 = new Matrix4([
      [3,4,8,-4],
      [4,3,6,-1],
      [-3,-4,3,2],
      [3,4,5,6]
    ])
    const m_mul2 = new Matrix4([
      [1,2,2,0],
      [2,3,0,1],
      [3,2,-1,3],
      [1,2,3,4]
    ])
    m_mul1.mul(m_mul2)
    console.log('Expected value of m([3,4,8,-4],[4,3,6,-1],[-3,-4,3,2],[3,4,5,6]) * m([1,2,2,0],[2,3,0,1],[3,2,-1,3],[1,2,3,4]) = m([31,26,-14,12],[27,27,-1,17],[0,-8,-3,13],[32,40,19,43])')
    console.log('Got: ', m_mul1)
    console.log(' ')

    //Identity Matrix function
    console.log('Check Identity matrix function:')
    const m_id = new Matrix4([
      [3,4,4,9],
      [4,3,0,-1],
      [7,0,-1,0],
      [3,2,1,0,-1]
    ])
    m_id.identity()
    console.log('Expected value of m([3,4,4,9],[4,3,0,-1],[7,0,-1,0],[3,2,1,0]) = m([3,4,4,9],[4,3,0,-1],[7,0,-1,0],[3,2,1,0])')
    console.log('Got: ', m_id)
    console.log(' ')

  }
}

export default Matrix4_test