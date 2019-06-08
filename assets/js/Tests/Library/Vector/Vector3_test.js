//imports
import Vector3 from '../../../Library/Math/Vector/Vector3.js'

class Vector3_test
{
  constructor(){
    /* Vector 3 tests */
    console.log('------ Class Vector3 Tests --------')
    console.log(' ')

    //Norm function
    console.log('Check norm function:')
    const v_norm = new Vector3(1,2,3)
    console.log('Expected value of v(1,2,3) = 3.741')
    console.log('Got: ', v_norm.norm())
    console.log(' ')

    //Normalization function
    console.log('Check normalization function:')
    const v_normalize = new Vector3(3,1,2)
    console.log('Expected value of v(3,1,2) = v(0.801,0.267,0.534)')
    console.log('Got: ', v_normalize.normalization())
    console.log(' ')

    //Addition function
    console.log('Check add function:')
    const v_add1 = new Vector3(2,2,5)
    const v_add2 = new Vector3(3,2,-3)
    v_add1.add(v_add2)
    console.log('Expected value of v(2,2,5) + v(3,2,-3) = v(5,4,2)')
    console.log('Got: ', v_add1)
    console.log(' ')

    //Subtraction function
    console.log('Check subtraction function:')
    const v_sub1 = new Vector3(2,2,-3)
    const v_sub2 = new Vector3(3,2,-7)
    v_sub1.sub(v_sub2)
    console.log('Expected value of v(2,2,-3) - v(3,2,-7) = v(-1,0,4)')
    console.log('Got: ', v_sub1)
    console.log(' ')

    //Scalar multiplication function
    console.log('Check scalar multiplication function:')
    const v_scal = new Vector3(-3,5,4)
    v_scal.scalar(4)
    console.log('Expected value of v(-3,5,4) * 4 = v(-12,20,16)')
    console.log('Got: ', v_scal)
    console.log(' ')

    //Dot product function
    console.log('Check dot product function:')
    const v_dot1 = new Vector3(-3,5,3)
    const v_dot2 = new Vector3(2,4,6)
    console.log('Expected value of v(-3,5,3) * v(2,4,6) = 32')
    console.log('Got: ', v_dot1.dot(v_dot2))
    console.log(' ')

    //Planar angle function
    console.log('Check planar angle function:')
    const v_plan1 = new Vector3(-3,5,2)
    const v_plan2 = new Vector3(2,4,2)
    console.log('Expected value of angle between v(-3,5,2) & v(2,4,2) = 0.932')
    console.log('Got: ', v_plan1.plan(v_plan2))
    console.log(' ')

    //Cross product function
    console.log('Check cross product function:')
    const v_cross1 = new Vector3(-3,5,2)
    const v_cross2 = new Vector3(2,4,2)
    console.log('Expected value of v(-3,5,2) & v(2,4,2) = v(2,10,-22)')
    console.log('Got: ', v_cross1.cross(v_cross2))
    console.log(' ')
  }
}

export default Vector3_test