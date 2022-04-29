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
  // write code here
  // const valueArray = (Object.values(robot));

  // for (let i = 0; i < valueArray.length; i++) {
  //   for (let j = i + 1; j < valueArray.length; j++) {
  //     if (valueArray[i] === valueArray[j]) {
  //       return null;
  //     }
  //   }
  // }

  // const swap = Object.entries(robot).map(
  //   ([key, value]) => ({ [value]: key })
  // );

  // const newObject = Object.assign({}, ...swap);

  // return newObject;
  const inversed = {};
  const values = Object.values(robot);

  const newValues = new Set(values).size;

  if (newValues !== values.length) {
    return null;
  }

  for (const property in robot) {
    inversed[robot[property]] = property;
  }

  return inversed;
}

module.exports = inverseRobot;
