// in this file you can append custom step methods to 'I' object
const bosAction = require('./steps_file_b');

module.exports = function() {
  return actor(
    bosAction//TODO 考虑多种组件库的扩展，类似于{}.extend(bosAction).extend(anotherAction)
  );
}
