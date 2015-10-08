
describe("PrimeFactors", function() {
  var testNumber = 600851475143;

  it("should compute the largest prime factor from the number", function() {
    expect(projectEulerThree(testNumber)).toEqual(6857);
  });

  it("should throw an error when the number is not an integer", function() {
    expect(function() {projectEulerThree(10.4)}).toThrowError("Not An Integer.");
  });

  it("should throw an error when there is a negative number given", function() {
    expect(function() {projectEulerThree(-100)}).toThrowError("Negative Number Given.");
  });
});
