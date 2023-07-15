/* eslint-disable no-console */
'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
const kolli = {
  Kolli: 'name',
  123: 'chipVer',
  3: 'wheels',
};
// const robert = {
//   Robert: 'name',
//   123: 'chipVer',
//   113: 'chipVer',
// };
//  inverseRobot(robert) === null
//  inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }

function inverseRobot(robot) {
  const newRobot = {};

  for (const [key, value] of Object.entries(robot).reverse()) {
    if (newRobot[value]) {
      return null;
    }
    newRobot[value] = key;
  }

  return newRobot;
}

inverseRobot(kolli);
module.exports = inverseRobot;
