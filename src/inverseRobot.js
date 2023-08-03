'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const outRobot = { ...robot };
  const newRobot = {};
  const keysArr = [];
  const valuesArr = [];

  for (const key in outRobot) {
    keysArr.push(key);
  }

  for (let i = 0; i < keysArr.length; i++) {
    valuesArr.push(outRobot[keysArr[i]]);
  }

  for (let i = 0; i < valuesArr.length; i++) {
    if (newRobot[valuesArr[i]]) {
      return null;
    }

    newRobot[valuesArr[i]] = keysArr[i];
  }

  return { ...newRobot };

  //
  // закомментированный код оставила на память))
  //   const robotValues = Object.values(robot);
  //   const robotKeys = Object.keys(robot);
  //   const newObj = {};

  //   for (const value of robotValues) {
  //     if (robotValues.indexOf(value) !== robotValues.lastIndexOf(value)) {
  //       return null;
  //     }
  //   }

  //   for (let i = 0; i < robotKeys.length; i++) {
  //     newObj[robotValues[i]] = robotKeys[i];
  //   }

  //   return { ...newObj };
}

module.exports = inverseRobot;
