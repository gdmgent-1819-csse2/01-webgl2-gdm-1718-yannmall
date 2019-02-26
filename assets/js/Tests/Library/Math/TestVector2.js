//imports
import Vector2 from '../../../Library/Math/Vector2.js'
import TestVector from './TestVector.js'

/** Class for testing the Vector2 class. */
export default class TestVector2 extends TestVector {
    /**
     * Create and run the tests.
     */
    constructor(){
        super();
        console.log('')
        console.info('=========================== testing Vector2 ==========================')
        console.log('')
        this.testNorm()
        this.testNormalization()
        this.testAdd()
        this.testSub()
        this.testScal()
        this.testDot()
        this.testPlan()
        console.info('=========================== End Vector2 tests ==========================')
    }

    /**
     * Test the Norm method
     */
    testNorm() {
        console.info('test Vector2.norm()')
        const v = new Vector2(1,2)
        const expected = 2.23606
        const v_norm = v.norm()
        const actual = v_norm
        this.assertIdenticalNumber(actual, expected)
        console.log('')
    }

    testNormalization() {
        console.info('test Vector2.normalization()')
        const v = new Vector2(3,1)
        const expected = {x: 0.948, y: 0.316}
        const v_normalize = v.normalization()
        const actual = v_normalize
        this.assertIdenticalVector(actual, expected)
        console.log('')
    }

    testAdd() {
        console.info('test Vector2.add()')
        const v1 = new Vector2(3, 1)
        const v2 = new Vector2(2, 5)
        const expected = {x: 5, y: 6}
        v1.add(v2)
        const actual = v1
        this.assertIdenticalVector(actual, expected)
        console.log('')
    }

    testSub() {
        console.info('test Vector2.sub()')
        const v1 = new Vector2(3, 1)
        const v2 = new Vector2(2, 5)
        const expected = {x: 1, y: -4}
        v1.sub(v2)
        const actual = v1
        this.assertIdenticalVector(actual, expected)
        console.log('')
    }

    testScal() {
        console.info('test Vector2.scalar()')
        const v = new Vector2(-4, 2)
        const expected = {x: -20, y: 10}
        v.scalar(5)
        const actual = v
        this.assertIdenticalVector(actual, expected)
        console.log('')
    }

    testDot() {
        console.info('test Vector2.dot()')
        const v1 = new Vector2(3, 1)
        const v2 = new Vector2(2, 5)
        const expected = 11
        const actual = v1.dot(v2)
        this.assertIdenticalNumber(actual, expected)
        console.log('')
    }

    testPlan() {
        console.info('test Vector2.plan()')
        const v1 = new Vector2(-3, 5)
        const v2 = new Vector2(2, 4)
        const expected = 1.004
        const actual = v1.plan(v2)
        this.assertIdenticalNumber(actual, expected)
    }

}