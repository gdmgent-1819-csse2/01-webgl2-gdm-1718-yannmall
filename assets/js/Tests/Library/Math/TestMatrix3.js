import Matrix3 from '../../../Library/Math/Matrix3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix3 class. */
export default class TestMatrix3 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()      
        console.log('')
        console.info('=========================== testing Vector2 ==========================')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        console.info('=========================== End Vector2 tests ==========================')
    }

    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Matrix3.add()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const b = [
            10, 11, 12,
            13, 14, 15,
            16, 17, 18,
        ]
        const expected = [
            11, 13, 15,
            17, 19, 21,
            23, 25, 27,
        ]
        const m = new Matrix3(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
        console.log('')
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix3.sub()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const b = [
            9, 8, 7,
            6, 5, 4,
            3, 2, 1,
        ]
        const expected = [
            -8, -6, -4,
            -2, 0, 2,
            4, 6, 8,
        ]
        const m = new Matrix3(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
        console.log('')
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix3.mul()')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const b = [
            2, -1, 1,
            -1, 1, 2,
            1, 2, -1,
        ]
        const expected = [
            3, 7, 2,
            9, 13, 8,
            15, 19, 14,
        ]
        const m = new Matrix3(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
        console.log('')
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix3.mul() by identity matrix')
        const a = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const i = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ]
        const expected = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]
        const m = new Matrix3(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }
}