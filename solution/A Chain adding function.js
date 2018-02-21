// 1
const add = n => {
    const foo = x => add(n + x);
    foo.valueOf = () => n;
    return foo
}
