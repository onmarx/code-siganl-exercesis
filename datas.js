export const data = [
  {
    id: 0,
    title: 'Century From Year',
    overview: 'Return the centuries of a given year',
    context: 'Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.',
    examples: [
      'For year = 1905, the output should becenturyFromYear(year) = 20',
      'For year = 1700, the output should be centuryFromYear(year) = 17'
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
    overview: 'check if one word it is a palindrome',
    context: 'Given the string, check if it is a palindrome.',
    examples: [
      'For inputString = "aabaa", the output should be checkPalindrome(inputString) = true.',
      'For inputString = "abac", the output should be checkPalindrome(inputString) = false.',
      'For inputString = "a", the output should be checkPalindrome(inputString) = true.'
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
]