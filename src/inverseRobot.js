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
 * Зворотне положення
 * Транспозиція внутрішніх органів є варіантом внутрішньої анатомії, коли
 * органи розташовані в дзеркальному відображенні.
 * Щось подібне сталося з нашим роботом Коллі. Його ключі стали цінностями,
 * і значення стали ключами. Допоможіть відремонтувати робота.
 *  * Створити "inverseRobot"
 * функція, яка приймає 'robot' як параметр і повертає новий об'єкт, у якому
 * клавіші змінюватимуться місцями зі значеннями.
 *
 * Якщо будь-яке зі значень об'єкта повторюється, поверніть 'null'.
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
function inverseRobot(robot) {
  const obj = {};

  for (const key in robot) {
    if (obj.hasOwnProperty(robot[key])) {
      return null;
    }
    obj[robot[key]] = key;
  }

  return obj;
}

module.exports = inverseRobot;
