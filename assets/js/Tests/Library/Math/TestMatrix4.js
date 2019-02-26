import Matrix4 from '../../../Library/Math/Matrix4.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Matrix4 class. */
export default class TestMatrix4 extends TestMatrix {
    /**
     * Create and run the tests.
     */
    constructor() {
        super()
        console.log('')
        console.info('=========================== testing Matrix4 ==========================')
        this.testAdd()
        this.testSub()
        this.testMul()
        this.testMulIdentity()
        console.info('=========================== End Matrix4 tests ==========================')

    }

    /**
     * Test the addition method.
     */
    testAdd() {
        console.info('test Matrix4.add()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const b = [
            17, 18, 19, 20,
            21, 22, 23, 24,
            25, 26, 27, 28,
            29, 30, 31, 32,
        ]
        const expected = [
            18, 20, 22, 24,
            26, 28, 30, 32,
            34, 36, 38, 40,
            42, 44, 46, 48,
        ]
        const m = new Matrix4(a)
        m.add(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
        console.log('')
    }

    /**
     * Test the subtraction method.
     */
    testSub() {
        console.info('test Matrix4.sub()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const b = [
            16, 15, 14, 13,
            12, 11, 10, 9, 
            8, 7, 6, 5, 
            4, 3, 2, 1,
        ]
        const expected = [
            -15, -13, -11, -9,
            -7, -5, -3, -1,
            1, 3, 5, 7,
            9, 11, 13, 15,
        ]
        const m = new Matrix4(a)
        m.sub(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
        console.log('')
    }

    /**
     * Test the multiplication method.
     */
    testMul() {
        console.info('test Matrix4.mul()')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const b = [
            2, -1, 2, -1,
            -1, 2, -1, 2,
            1, -1, 2, -1,
            -1, 2, -1, 1,
        ]
        const expected = [
            -1, 8, 2, 4,
            3,16, 10, 8,
            7, 24, 18, 12,
            11, 32, 26, 16,
        ]
        const m = new Matrix4(a)
        m.mul(b)
        const actual = m.elements
        this.assertIdentical(actual, expected)
        console.log('')
    }

    /**
     * Test the multiplication method with an identity matrix.
     */
    testMulIdentity() {
        console.info('test Matrix4.mul() by identity matrix')
        const a = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const i = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]
        const expected = [
            1, 2, 3, 4, 
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ]
        const m = new Matrix4(a)
        m.mul(i)
        const actual = m.elements
        this.assertIdentical(actual, expected)
    }

    
}