'use strict';

/**
 * Situs inversus
 * Transposition of internal organs is a variant of internal anatomy, when
 * the organs are located in a mirror image.
 * Something similar happened to our robot Kolli. His keys became values,
 * and values became keys. Help to repair the robot. Create a 'inverseRobot'
 * function that takes 'robot' as a parameter and returns a new object in which
 * keys will change places with values.
 *
 * If any of the object values are repeated, return 'null'.
 *
 * Example:
 *
 * const kolli = { Kolli: 'name', 123: 'chipVer', 3: 'wheels' };
 * const robert = { Robert: 'name', 123: 'chipVer', 113: 'chipVer' };
 * inverseRobot(robert) === null
 * inverseRobot(kolli) === { name: 'Kolli', chipVer: '123', wheels: '3' }
 *
 *
 * @param {object} robot
 *
 * @return {object}
 */

// const kolli = {
//   Kolli: 'name',
//   123: 'chipVer',
//   3: 'wheels',
// };

// const robert = {
//   Robert: 'name',
//   123: 'chipVer',
//   113: 'chipVer',
// };

// const t = {
//   name: 'Bob',
//   fullName: 'Bob Acad',
//   age: 32,
//   gender: 'male',
//   interests: 'music',
//   nickname: 'Bob',
// };

function inverseRobot(robot) {
  const newRobot = {};

  // проблема в том что ключи могут быть в разных местах а не подряд
  // вот val[i] === val[i + 1]
  // не срабатывает
  // const val = Object.values(robot);
  // console.log(val);
  // const keys = Object.keys(robot);
  // console.log(keys);

  // for (let i = 0; i < val.length; i++) {
  //   if (val[i] === val[i + 1]) {
  //     return null;
  //   }
  // }
  // for (const key in robot) {
  //   console.log(robot[key]);
  // }

  for (const key in robot) {
    // if (condition) {
    //   // console.log(robot[key] );
    // }

    newRobot[robot[key]] = key;
    // console.log(robot[key] === newRobot[key]);
    // console.log(newRobot[key]);

    // for (let i = 0; i < newRobot.length; i++) {
    //     console.log(i);
    // }
  }

  return newRobot;
}

// console.log(inverseRobot(t));
// console.log(inverseRobot(kolli));
// console.log(inverseRobot(robert));

module.exports = inverseRobot;
