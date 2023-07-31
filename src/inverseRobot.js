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
  const obj = {};

  for (const key in robot) {
    if (robot[key] in obj) {
      return null;
    }
    Object.assign(obj, { [robot[key]]: key });
  }

  return obj;
}

module.exports = inverseRobot;
