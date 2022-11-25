'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const givenValues = Object.values(robot);

  for (let i = 0; i < givenValues.length; i++) {
    const currentValue = givenValues[i];

    for (let j = i + 1; j < givenValues.length; j++) {
      if (givenValues[j] === currentValue) {
        return null;
      }
    }
  }

  const givenKeys = Object.keys(robot);
  const inversedProperties = [];

  for (let x = 0; x < givenValues.length; x++) {
    inversedProperties.push([givenValues[x], givenKeys[x]]);
  }

  const fixedRobot = Object.fromEntries(inversedProperties);

  return fixedRobot;
}

module.exports = inverseRobot;
