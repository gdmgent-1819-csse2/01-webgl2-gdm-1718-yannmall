//imports
import Vector2_test from './Library/Vector/Vector2_test.js'
import Vector3_test from './Library/Vector/Vector3_test.js'
import Vector4_test from './Library/Vector/Vector4_test.js'
import Matrix2_test from './Library/Matrix/Matrix2_test.js'
import Matrix3_test from './Library/Matrix/Matrix3_test.js'
import Matrix4_test from './Library/Matrix/Matrix4_test.js'

/** Class to run tests. */
export default class Tests {
    /**
     * Create the tests.
     */
    constructor() {
        console.log('Running Tests…')
        new Vector2_test
        new Vector3_test
        new Vector4_test
        new Matrix2_test
        new Matrix3_test
        new Matrix4_test
    }
}