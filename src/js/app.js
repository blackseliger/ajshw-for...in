/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */

export default class SortbyProps {
  constructor(obj = {}, ruleSort = []) {
    this.obj = obj;
    this.ruleSort = ruleSort;
  }

  sort() {
    const ruleArr = Object.entries(this.obj).filter((el) => this.ruleSort.includes(el[0]));
    const defaultRuleArr = Object.entries(this.obj).filter((el) => !this.ruleSort.includes(el[0]));

    ruleArr.map((key) => ruleArr[this.ruleSort.findIndex((el) => el === key[0])] = key);
    defaultRuleArr.sort((a, b) => a[0].localeCompare(b[0], ['en']));
    return ruleArr.concat(defaultRuleArr).map((el) => {
      let map = new Map();
      map.set('key', el[0]);
      map.set('value', el[1]);
      return Object.fromEntries(map)
    });
  }
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const arr = ['name', 'level'];

const sortbyProps = new SortbyProps(obj, arr);
console.log(sortbyProps.sort());

export {obj, arr};

