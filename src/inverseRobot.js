'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  // write code here

  let newRobot = {};
  const passedValues = [];
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    newRobot[values[i]] = keys[i];
  }

  for (let i = 0; i < values.length; i++) {
    if (passedValues.includes(values[i])) {
      newRobot = null;
    }
    passedValues.push(values[i]);
  }

  return newRobot;
}

module.exports = inverseRobot;

// const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
// const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
// inverseRobot(robert) === null
// inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
