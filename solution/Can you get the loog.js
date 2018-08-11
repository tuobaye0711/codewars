const loop_size = node => {
  let exist = [];
  let count = 0;
  let cur = node;
  while (exist.indexOf(cur) === -1) {
    exist.push(cur);
    cur = cur.next;
    count++;
  }
  return count - exist.indexOf(cur);
};
