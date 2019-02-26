import TestMatrix2 from './Library/Math/TestMatrix2.js'
import TestMatrix3 from './Library/Math/TestMatrix3.js';
import TestMatrix4 from './Library/Math/TestMatrix4.js';
import TestVector2 from './Library/Math/TestVector2.js'

/** Class to run tests. */
export default class Tests {
    /**
     * Create the tests.
     */
    constructor() {
        console.log('Running Tests…')
        new TestMatrix2()
        new TestMatrix3()
        new TestMatrix4()
        new TestVector2()
    }
}