import { findCalibrationValue } from "../problems/day-one-part-one";

describe("Testing findCaliberationValue", () => {
  test("Should result in 292", () => {
    const sum = findCalibrationValue(`eight9fhstbssrplmdlncmmqqnklb39ninejz
    three656
    ppjvndvknbtpfsncplmhhrlh5
    7fjqhrhsevenlbtwoninevnmct2`);

    expect(sum).toBe(292);
  });

  // Test with an empty string
  test("Should result in 0 for empty input", () => {
    const sum = findCalibrationValue(``);
    expect(sum).toBe(0);
  });

  // Test with no numbers in the string
  test("Should result in 0 when no numbers are present", () => {
    const sum = findCalibrationValue(`abcdefgh
      ijklmnop
      qrstuvwx
      yz`);
    expect(sum).toBe(0);
  });

  // Test with strings that have only one number each
  test("Should handle single numbers correctly", () => {
    const sum = findCalibrationValue(`a1b
      c2d
      e3f`);
    expect(sum).toBe(11 + 22 + 33); // 66
  });

  // Test with mixed content strings
  test("Should handle mixed content strings correctly", () => {
    const sum = findCalibrationValue(`abc123def
      4gh567ij8
      9kl0mn
      p1qr2st3u4`);
    expect(sum).toBe(13 + 48 + 90 + 14); // 165
  });
});
