/** Parent class for testing vectors. */
export default class TestVector {
    /**
     * @param {Number} actual - The actual result.
     * @param {Number} expected - The expected result.
     */
    assertIdenticalNumber(actual, expected) {
        const actualRounded = Math.round(actual)
        const expectedRounded = Math.round(expected)
        if (actualRounded === expectedRounded) {
            console.log('PASS', `actual: ${actual}`)
        } else {
            console.error('FAIL', `actual: ${actual}, expected: ${expected}`);
        }
    }

    /**
     * @param {Object(x,y)} actual - The actual result.
     * @param {Object(x,y)} expected - The expected result.
     */
    assertIdenticalVector(actual, expected) {
        
        const acRoundedx = Math.round(actual.x)
        const acRoundedy = Math.round(actual.y)
        const exRoundedx = Math.round(expected.x)
        const exRoundedy = Math.round(expected.y)

        if (acRoundedx === exRoundedx && acRoundedy === exRoundedy) {
                console.log('PASS', `actual: {x: ${actual.x}, y: ${actual.y}}`)
            } else {
                console.error('FAIL', `actual: {x: ${acRoundedx}, y: ${acRoundedy} | expected: {x: ${exRoundedx}, y: ${exRoundedy}}`);
            }
        }
}