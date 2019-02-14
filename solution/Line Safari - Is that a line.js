// 思路错误，暂未解决

// You are given a grid, which always includes exactly two end-points indicated by X

// You simply need to return true/false if you can detect a one and only one "valid" line joining those points.

// A line can have the following characters :

// - = left / right
// | = up / down
// + = corner
// Rules for valid lines
// The most basic kind of valid line is when the end-points are already adjacent
// X
// X
// XX
// The corner character (+) must be used for all corners (but only for corners).
// It must be possible to follow the line with no ambiguity (lookahead of just one step).
// The line may take any path between the two points.
// Sometimes a line may be valid in one direction but not the other. Such a line is still considered valid.
// Every line "character" found in the grid must be part of the line. If extras are found then the line is not valid.
// Examples
// Good lines
// X---------X
// X
// |
// |
// X
//    +--------+
// X--+        +--+
//                |
//                X
//    +-------------+
//    |             |
// X--+      X------+
//    +-------+
//    |      +++---+
// X--+      +-+   X
// Bad lines
// X-----|----X
// X
// |
// +
// X
//    |--------+
// X---        ---+
//                |
//                X
//    +------ 
//    |       
// X--+      X
//       +------+
//       |      |
// X-----+------+
//       |
//       X
// Hint
// Imagine yourself walking a path where you can only see your very next step. Can you know which step you must take, or not?

// 将原数组旋转90度
const rotate = arr => {
  const result = [];
  const len = arr[0].length;
  for (let i = 0; i < len; i++){
    let str = arr.map(s => {
      if(s[i]==='-'){
        return '|'
      }else if(s[i]==='|'){
        return '-'
      }else{
        return s[i]
      }
    }).reverse().join("");
    result.push(str)
  }
  return result
}

const line = grid => {
  data = grid.map(i => i.join(""));
  const reg = /\|-|-\||-\+-| -|- |X\+-|-\+X|-X-/;
  return !(data.some(i => reg.test(i)) || rotate(data).some(i => reg.test(i)))
}