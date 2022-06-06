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
  const robotValuesArr = Object.values(robot);
  const robotKeysArr = Object.keys(robot);
  let counter = 0;
  const newObj = {};

  for (let i = 0; i < robotValuesArr.length; i++) {
    for (let ii = 0; ii < robotValuesArr.length; ii++) {
      if (robotValuesArr[i] === robotValuesArr[ii]) {
        counter++;
      }
    }

    if (counter > 1) {
      return null;
    }

    counter = 0;
  }

  // const newObj = Object.assign(
  //   ...robotValuesArr.map((n, i) => ({ [n]: robotKeysArr[i] }))
  // );

  for (let i = 0; i < robotKeysArr.length; i++) {
    newObj[robotValuesArr[i]] = robotKeysArr[i];
  }

  return newObj;
}

module.exports = inverseRobot;
