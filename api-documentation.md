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
    "fragment": "the atomic number of Unquadpentium",
    "statement": "145 is the atomic number of Unquadpentium.",
    "number": 145,
    "type": "math"
  }
}

GET /api/math/random
{
  "fact": {
    "fragment": "the atomic number of Unquadpentium",
    "statement": "145 is the atomic number of Unquadpentium.",
    "number": 145,
    "type": "math"
  }
}


### Trivia


GET /api/trivia/:number
{
  "fact": {
    "fragment": "the atomic number of Unquadpentium",
    "statement": "145 is the atomic number of Unquadpentium.",
    "number": 145,
    "type": "trivia"
  }
}

GET /api/trivia/random
{
  "fact": {
    "fragment": "the atomic number of Unquadpentium",
    "statement": "145 is the atomic number of Unquadpentium.",
    "number": 145,
    "type": "trivia"
  }
}


### Years


GET /api/years/:number
{
  "fact": {
    year=2023,
    fragment="the year for this y1 test fact_fragment",
    statement="2023 is the year for this y1 test fact statement.",
    type="years"
  }
}

GET /api/years/random
{
  "fact": {
    "fragment": "the year Argentina won the World Cup",
    "statement": "2022 is the year Argentina won the World Cup.",
    "year": 2022,
    "type": "years"
  }
}
