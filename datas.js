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
    title: 'Second Value',
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
    code: 'console.log("hello world")'
  },
]