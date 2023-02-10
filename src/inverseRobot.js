'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.values(robot);
  const params = Object.keys(robot);
  const newRobot = {};

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (keys[i] === keys[j]) {
        return null;
      } else {
        let z = 0;

        for (; z < keys.length; z++) {
          const key = keys[z];
          const param = params[z];

          newRobot[key] = param;
        }
      }
    }
  }

  return newRobot;
}

module.exports = inverseRobot;

// for (const param of params) {
//   for (const key of keys) {
//     newRobot[param] = key;
//     break;
//   }
// }
// const keysInNewRobot = Object.keys(robot);

// for (let i = 0; i < keysInNewRobot.length; i++) {
//   for (let j = i + 1; j < keysInNewRobot.length; j++) {
//     if (keysInNewRobot[i] === keysInNewRobot[j]) {
//       return null;
//     } else {
//       continue;
//     }
//   }

//   return newRobot;
// }
