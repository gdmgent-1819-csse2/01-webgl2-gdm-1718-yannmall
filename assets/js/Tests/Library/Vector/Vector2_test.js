//imports
import Vector2 from '../../../Library/Math/Vector/Vector2.js'

class Vector2_test
{
  constructor(){
    /* Vector 2 tests */
    console.log('------ Class Vector2 Tests --------')
    console.log(' ')

    //Norm function
    console.log('Check norm function:')
    const v_norm = new Vector2(1,2)
    console.log('Expected value of v(1,2) = 2.23606')
    console.log('Got: ', v_norm.norm())
    console.log(' ')

    //Normalization function
    console.log('Check normalization function:')
    const v_normalize = new Vector2(3,1)
    console.log('Expected value of v(3,1) = v(0.948,0.316)')
    console.log('Got: ', v_normalize.normalization())
    console.log(' ')

    //Addition function
    console.log('Check add function:')
    const v_add1 = new Vector2(2,2)
    const v_add2 = new Vector2(3,2)
    v_add1.add(v_add2)
    console.log('Expected value of v(2,2) + v(3,2) = v(5,4)')
    console.log('Got: ', v_add1)
    console.log(' ')

    //Subtraction function
    console.log('Check subtraction function:')
    const v_sub1 = new Vector2(2,2)
    const v_sub2 = new Vector2(3,2)
    v_sub1.sub(v_sub2)
    console.log('Expected value of v(2,2) - v(3,2) = v(-1,0)')
    console.log('Got: ', v_sub1)
    console.log(' ')

    //Scalar multiplication function
    console.log('Check scalar multiplication function:')
    const v_scal = new Vector2(-3,5)
    v_scal.scalar(4)
    console.log('Expected value of v(-3,5) * 4 = v(-12,20)')
    console.log('Got: ', v_scal)
    console.log(' ')

    //Dot product function
    console.log('Check dot product function:')
    const v_dot1 = new Vector2(-3,5)
    const v_dot2 = new Vector2(2,4)
    console.log('Expected value of v(-3,5) * v(2,4) = 14')
    console.log('Got: ', v_dot1.dot(v_dot2))
    console.log(' ')

    //Planar angle function
    console.log('Check planar angle function:')
    const v_plan1 = new Vector2(-3,5)
    const v_plan2 = new Vector2(2,4)
    console.log('Expected value of angle between v(-3,5) & v(2,4) = 1.004')
    console.log('Got: ', v_plan1.plan(v_plan2))
    console.log(' ')
  }
}

export default Vector2_test