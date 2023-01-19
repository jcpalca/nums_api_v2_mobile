<!-- API Documentation - Comment for testing purposes -->

## Categories

### Dates


GET /api/dates/:number
{
  "fact": {
    "fragment": "the test case",
    "statement": "January 1st is the test case.",
    "month": 1,
    "day" : 1,
    "year": 2023,
    "type": "dates"
  }
}

GET /api/dates/random
{
  "fact": {
    "fragment": "the test case",
    "statement": "January 1st is the test case.",
    "month": 1,
    "day" : 1,
    "year": 2023,
    "type": "dates"
  }
}


### Math


GET /api/math/:number
{
  "fact": {
    "fragment": "the test case",
    "statement": "145 is the test case.",
    "number": 145,
    "type": "math"
  }
}

GET /api/math/random
{
  "fact": {
    "fragment": "the test case",
    "statement": "145 is the test case.",
    "number": 145,
    "type": "math"
  }
}


### Trivia


GET /api/trivia/:number
{
  "fact": {
    "fragment": "the test case",
    "statement": "145 is the test case.",
    "number": 145,
    "type": "trivia"
  }
}

GET /api/trivia/random
{
  "fact": {
    "fragment": "the test case",
    "statement": "145 is the test case.",
    "number": 145,
    "type": "trivia"
  }
}


### Years


GET /api/years/:number
{
  "fact": {
    "year"= "2023",
    "fragment"="the test case",
    "statement"="2023 is the test case.",
    "type"= "years"
  }
}

GET /api/years/random
{
  "fact": {
    "fragment"="the test case",
    "statement"="2023 is the test case.",
    "year": "2022",
    "type": "years"
  }
}
