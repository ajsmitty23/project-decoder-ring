// Write your tests here!
const { expect } = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar cipher tests written by student", () => {
    it('error handling', () => {
        it('should return false if the shift amount is 0', () => {
            const actual = caesar('message', 0)
            const expected = false
            expect(actual).to.eql(expected);
        })
        it('should return false if the shift amount is above 25', () => {
            const actual = caesar('message', 99)
            const expected = false
            expect(actual).to.eql(expected);
        })
        it('should return false if the shift amount is above 25', () => {
            const actual = caesar('message', -99)
            const expected = false
            expect(actual).to.eql(expected);
        })
    })
    it('encoding a message', () => {
        it('should encode a message by shifting the letters', () => {
            const actual = caesar('message', 4)
            const expected = 'qiwweki'
            expect(actual).to.eql(expected);
        })
        it('should leaves spaces and other symbols as is', () => {
            const actual = caesar('m e!s?s.a g e', 4)
            const expected = 'q i!w?w.e k i'
            expect(actual).to.eql(expected);
        })
        it('should ignore capital letters', () => {
            const actual = caesar('MESSAGE', 4)
            const expected = 'qiwweki'
            expect(actual).to.eql(expected);
        })
        it('should appropriately handle letters at the end of the alphabet', () => {
            const actual = caesar('abc xyz', 4)
            const expected = 'efg bcd'
            expect(actual).to.eql(expected);
        })
        it('should allow for a negative shift that will shift to the left', () => {
            const actual = caesar('message', -4)
            const expected = 'iaoowca'
            expect(actual).to.eql(expected);
        })
    })
    it('decoding a message', () => {
        it('should decode a message by by shifting the letters in the opposite direction', () => {
            const actual = caesar('message', 4, false)
            const expected = 'iaoowca'
            expect(actual).to.eql(expected);
        })
        it('should leaves spaces and other symbols as is', () => {
            const actual = caesar('m e!s?s.a g e', 4, false)
            const expected = 'i a!o?o.w c a'
            expect(actual).to.eql(expected);
        })
        it('should ignore capital letters', () => {
            const actual = caesar('MESSAGE', 4, false)
            const expected = 'iaoowca'
            expect(actual).to.eql(expected);
        })
        it('should appropriately handle letters at the end of the alphabet', () => {
            const actual = caesar('abc xyz', 4, false)
            const expected = 'wxy tuv'
            expect(actual).to.eql(expected);
        })
        it('should allow for a negative shift that will shift to the right', () => {
            const actual = caesar('message', -4, false)
            const expected = 'qiwweki'
            expect(actual).to.eql(expected);
        })
    })  
})

/*
describe ("Caesar", () => {

    it ("Should return false if the shift value is undefined, 0, less than -25, or greater than 25", () => {
        const actual = caesar("cat", 26, true)
        const expected = false
        expect(actual).toEqual(expected)
    })

    it ("Should return return ecv when given cat and 2", () => {
        const actual = caesar("cat", 2, true)
        const expected = "ecv"
        expect(actual).toEqual(expected)
    })
})
*/
