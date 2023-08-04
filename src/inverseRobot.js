'use strict';

/*
 * @param {object} robot
 *Example:
```
 const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
 const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 inverseRobot(robert) === null
 inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
```

 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const robotItem = robot[key];

    if (newRobot.hasOwnProperty(robotItem)) {
      return null;
    }

    newRobot[robotItem] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
