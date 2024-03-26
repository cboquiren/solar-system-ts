// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { TAsteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: TAsteroid[]): number {
  const years = asteroids.map((asteroid) => asteroid.discoveryYear);

  let highestYear = 0;
  let highestCount = 0;
  const testMap = new Map();
  for (let year of years) {
    if (testMap.get(year)) {
      testMap.set(year, testMap.get(year) + 1);
    } else {
      testMap.set(year, 1)
    };
  }

  for (let year of years) {
    if (testMap.get(year) > highestCount) {
      highestYear = year;
      highestCount = testMap.get(year)
    }
  }
  return highestYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
