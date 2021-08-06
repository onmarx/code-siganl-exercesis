export const data = [
  {
    id: 0,
    title: 'Century From Year',
    overview: 'Return the centuries of a given year',
    context: 'Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.',
    examples: [
      'For year = 1905, the output should <b>becenturyFromYear(year) = 20</b>.',
      'For year = 1700, the output should be <b>centuryFromYear(year) = 17</b>.'
    ],
    test: [
      'Input: year: 1905, Expected Output: 20',
      'Input: year: 1988, Expected Output: 20',
      'Input: year: 374, Expected Output: 4',
      'Input: year: 45, Expected Output: 1'
    ],
    code: 'function becenturyFromYear(year){\n'+
    '  return Math.ceil(year/100)\n'+
    '}'
  },
  {
    id: 1,
    title: 'Check Palindrome',
    overview: 'Check if one word it is a palindrome',
    context: 'Given the string, check if it is a palindrome.',
    examples: [
      'For inputString = "aabaa", the output should be <b>checkPalindrome(inputString) = true</b>.',
      'For inputString = "abac", the output should be <b>checkPalindrome(inputString) = false</b>.',
      'For inputString = "a", the output should be <b>checkPalindrome(inputString) = true.</b>'
    ],
    test: [
      'inputString: "aabaa", Expected Output: true.',
      'inputString: "abac", Expected Output: false.',
      'inputString: "a", Expected Output: true.',
      'inputString: "az", Expected Output: false.',
      'inputString: "abacaba", Expected Output: true.',
      'inputString: "aaabaaaa", Expected Output: false.',
      'inputString: "zzzazzazz", Expected Output: false.',
      'inputString: "hlbeeykoqqqqokyeeblh", Expected Output: true.',
    ],
    code: 'function checkPalindrome(inputString){\n'+
    '  return [...inputString].reverse().join("") == inputString\n'+
    '}\n'+
    '// example\n'+
    'checkPalindrome("hlbeeykoqqqqokyeeblh") // outout: true',
  },
  {
    id: 2,
    title: 'Adjacent Elements Product',
    overview: 'Find the maximum product of an array',
    context: 'Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.',
    examples: [
      'For inputArray = [3, 6, -2, -5, 7, 3], the output should be: <b>adjacentElementsProduct(inputArray) = 21</b>. Because 7 and 3 produce the largest product.',
    ],
    test: [
      'inputString: [3, 6, -2, -5, 7, 3], Expected Output: 21.',
      'inputString: [-1,-2], Expected Output: 2.',
      'inputString: [5, 1, 2, 3, 1, 4], Expected Output: 6.',
      'inputString: [1, 2, 3, 0], Expected Output: 6.',
      'inputString: [9, 5, 10, 2, 24, -1, -48], Expected Output: 50.',
      'inputString: [5, 6, -4, 2, 3, 2, -23], Expected Output: 30.',
      'inputString: [4, 1, 2, 3, 1, 5], Expected Output: 6.',
      'inputString: [-23, 4, -3, 8, -12], Expected Output: -12.',
    ],
    code: 'function adjacentElementsProduct(inputArray) {\n'+
    '  const leng = inputArray.length - 1;\n'+
    '  const newArray = inputArray.slice(0, leng)\n'+
    '  const result = newArray.map((num,index) => num * inputArray[index+1]); \n'+
    '  return Math.max(...result)\n'+
    '}\n'+
    '//example\n'+
    'const inputArray = [-23, 4, -3, 8, -12] \n'+
    'adjacentElementsProduct(inputArray) // output -12',
  },
]