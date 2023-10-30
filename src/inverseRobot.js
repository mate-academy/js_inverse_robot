"use strict";

function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const value = robot[key];

    if (inverse[value] !== undefined) {
      return null;
    }

    inverse[value] = key;
  }

  return inverse;
}

const kolli = { Kolli: "name", 123: "chipVer", 3: "wheels" };
const robert = { Robert: "name", 123: "chipVer", 113: "chipVer" };

const resultKolli = inverseRobot(kolli);
const resultRobert = inverseRobot(robert);

console.log(resultKolli); // { name: 'Kolli', chipVer: '123', wheels: '3' }
console.log(resultRobert); // null

module.exports = inverseRobot;
