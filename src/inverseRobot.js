'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversRobot = {};
  const ckeck = [];

  for (let i = 0; i < Object.values(robot).length; i++) {
    if (ckeck.includes(Object.values(robot)[i])) {
      return null;
    };

    ckeck.push(Object.values(robot)[i]);
  }

  for (let i = Object.keys(robot).length - 1; i >= 0; i--) {
    inversRobot[Object.values(robot)[i]] = Object.keys(robot)[i];
  }

  return inversRobot;
};

module.exports = inverseRobot;

// const str = {
//   Robert: 'name',
//   123: 'chipVer',
//   113: 'chipVer',
// };
