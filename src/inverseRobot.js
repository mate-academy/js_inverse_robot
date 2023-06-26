'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  const values = Object.values(robot);
  const duplicates = values.filter((value, index) =>
    values.indexOf(value) !== index);

  if (duplicates.length >= 1) {
    return null;
  }

  for (const FakeKey in robot) {
    const key = robot[FakeKey];

    invertedRobot[key] = FakeKey;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
