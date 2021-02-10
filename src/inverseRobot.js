'use strict';

/**
 * Situs inversus
 * Transposition of internal organs is a variant of internal anatomy, when
 * the organs are located in a mirror image.
 * Something similar happened to our robot Kolli. His keys became values,
 * and values became keys. Help to repair the robot. Create a 'inverseRobot'
 * function that takes 'robot' as a parameter and returns a new object in which
 * keys will change places with values.
 *
 * If any of the object values are repeated, return 'null'.
 *
 * Example:
 *
 * const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
 * const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 * inverseRobot(robert) === null
 * inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
 *
 *
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  const inversRobots = {};
  let duplicates = 0;
  const onlyValues = Object.values(robot);

  const tempArray = [...onlyValues].sort();

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates++;
    }

    if (duplicates >= 1) {
      return null;
    }
  }

  for (const key in robot) {
    inversRobots[robot[key]] = key;
  }

  return inversRobots;
}

module.exports = inverseRobot;

inverseRobot({}, []);
