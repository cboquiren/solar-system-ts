// SPACE DATA EXERCISE 7

import { TPlanet } from "../data/data";

// Return an array of all Planets names that have moons
export function getPlanetsWithMoons(planets: TPlanet[]): string[] {
  return planets.filter((planet) => planet.moons).map((planet) => planet.name);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
