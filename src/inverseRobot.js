'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

// const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
// const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
// inverseRobot(robert) === null
// inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
function inverseRobot(robot) {
  const tobor = {};

  Object.keys(robot).forEach(key => {
    // console.log('key =', key, ', robot[key] =', robot[key]);
    if (!tobor[robot[key]]) {
      tobor[robot[key]] = key;
    }
  });

  return Object.keys(robot).length === Object.keys(tobor).length ? tobor : null;
}
// console.log(inverseRobot(kolli));
// console.log(inverseRobot(robert));
module.exports = inverseRobot;
