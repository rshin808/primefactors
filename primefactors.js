/**
 * This function returns the largest prime factor of a number.
 * @param number
 * @returns {*|number}
 */
function projectEulerThree(number)
{
  var output = [];
  var div = 2;

  if(number % 1 !== 0) {
    throw new Error("Not An Integer.");
  }

  if(number < 0) {
    throw new Error("Negative Number Given.");
  }

  while(number > 1)
  {
    while((number % div) === 0)
    {
      output.push(div);
      number /= div;
    }
    div++;
  }
  return _.max(output);
}
