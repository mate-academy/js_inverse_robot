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
  const obj = {};

  for (const i in robot) {
    if (obj.hasOwnProperty(robot[i])) {
      return null;
    }

    obj[robot[i]] = i;
  }

  return obj;
}

// function inverseRobot(robot) {
// const obj = {};
//   const keys = Object.keys(robot);
//   const values = Object.values(robot);

//   for (let i = 0; i < keys.length; i++) {
//     for (let j = i + 1; j < keys.length; j++) {
//       if (values[i] === values[j]) {
//         return null;
//       }
//     }
//   }

//   for (const i in keys) {
//     obj[values[i]] = keys[i];
//   }

//   return obj;
// }

module.exports = inverseRobot;
