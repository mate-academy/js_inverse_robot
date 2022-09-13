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
  const val = Object.values(robot);

  for (let counter = 0; counter <= val.length; counter++) {
    let c = 1;

    for (; c < val.length; c++) {
      if (val[counter] === val[c]) {
        // eslint-disable-next-line no-param-reassign
        robot = null;

        return robot;
      }
    }

    const obj = {};

    for (const property in robot) {
      obj[robot[`${property}`]] = property;
    }

    return obj;
  }
}

module.exports = inverseRobot;
