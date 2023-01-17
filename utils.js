"use strict";

import axios from "axios";

const NUMS_API_BASE_URL = "http://localhost:5000/api";

/**
 *  getFact makes api call to appropriate endpoint and returns normalized data
 *
 *  Input:
 *    num (string)
 *    cat (string) - category type
 *
 *  Output:
 *    data (object) like:
 *
 *    MATH/TRIVIA/YEAR:
      {
        "number": "145"
        "message": "145 is the atomic number of Unquadpentium."
        "type": "math"
      }

      DATE:
      {
        "number": "1/1"
        "dayOfYear": 1
        "message": "January 1st is the test case.",
        "type": "date"
      }
 *
 */

async function getFact(num, cat) {
  let endpoint = "";
  let resp;

  if(cat === "dates") {
    const [month, day] = num.split("/");

    if (month === "random") {
      endpoint = `/${cat}/random`;
    } else {
      endpoint = `/${cat}/${month}/${day}`;
    }
  }
  else {
    endpoint = `/${cat}/${num}`;
  }

  try {
    resp = await axios.get(NUMS_API_BASE_URL + endpoint);
  }
  catch(err) {
    if(err.response.data.error) {
      resp = err.response
    }
    else {
      resp = {
        data: {
          error: {
            message: "Uh oh, we don't understand that URL :( " +
            "Maybe read the API docs below?",
            status: err.response.status,
          }
        }
      };
    }
    console.log('resp', resp);
  }

  return normalizeData(resp.data, cat);
}

/**
 * Normalizes data to a standard format
 *
 *  Input:
 *    cat (string) - category type
 *    data (object) like:
 *
 *    DATE:
 *    {
            "fact": {
                "fragment": "the test case",
                "statement": "January 1st is the test case.",
                "month": 1,
                "day" : 1,
                "year": 2023,
                "type": "date"
            }
      }

      YEAR:
      {
            "fact": {
                year=2023,
                fragment="the year for this y1 test fact_fragment",
                statement="2023 is the year for this y1 test fact statement.",
                type="year"
            }
      }

      MATH/TRIVIA:
      {
            "fact": {
                "fragment": "the atomic number of Unquadpentium",
                "statement": "145 is the atomic number of Unquadpentium.",
                "number": 145,
                "type": "math"
            }
      }

      ERROR:
      {
        error: {
                "message": f"A math fact for { number } not found",
                "status": 404
                }
      }

    Output:
      object like:

      ERROR:
      {
        "message": f"A math fact for { number } not found"
        "status": 404
      }

      MATH/TRIVIA/YEAR:
      {
        "number": "145"
        "message": "145 is the atomic number of Unquadpentium."
        "type": "math"
      }

      DATE:
      {
        "month": "1"
        "day": "1"
        "dayOfYear": 1
        "message": "January 1st is the test case.",
        "type": "date"
      }
 *
 */

function normalizeData(data, cat) {
  if(data.error) {
    return data.error;
  }
  else if(cat === "dates") {
    // Subtract 1 from month because months need to be 0-indexed
    const dayOfYear = getDayOfYear(data.fact.month, data.fact.day);

    // Using cat instead of data.fact.type as type is inconsistent
    // with RESTful endpoints
    return {
      month: data.fact.month,
      day: data.fact.day,
      dayOfYear: dayOfYear,
      message: data.fact.statement,
      type: cat
    };
  }
  else if (cat === "years") {
    return {
      number: data.fact.year,
      message: data.fact.statement,
      type: cat
    };
  }
  else if(cat === "math" || cat === "trivia") {
    return {
      number: data.fact.number,
      message: data.fact.statement,
      type: cat
    };
  }
}

/**
 *  Converts month (int) and day (int) to day of the year (1-366) (int)
 *
 *  Returns day of the year.
 */
function getDayOfYear(month, day) {
  const monthToFirstDayOfYear = {
    1: 1,
    2: 32,
    3: 61,
    4: 92,
    5: 122,
    6: 153,
    7: 183,
    8: 214,
    9: 245,
    10: 275,
    11: 306,
    12: 336,
  };

  // Subtract 1 since days are 1-indexed
  const day_of_year = monthToFirstDayOfYear[month] + day - 1;

  return day_of_year;
}

export { getFact }
