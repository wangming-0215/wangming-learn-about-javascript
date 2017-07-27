const arrayFrom = () => {
    const length = Array.from.length;
    const arrayFromString = Array.from('foo');
    const set = new Set(['foo', window]);
    console.log(set);
    const arrayFromSet = Array.from(set);
    const map = new Map([[1, 2], [2, 4], [4, 8]]);
    console.log(map);
    const arrayFromMap = Array.from(map);
    function f() {
        return Array.from(arguments);
    }
    const arrayFromArrayLikeObject = f(1, 2, 3);
    // Array.from([1,2,3]).map(x => x + x)
    const arrayFromWithArrow = Array.from([1, 2, 3], x => x + x);
    const arrayFromWithArrow2 = Array.from({ length: 5 }, (v, i) => i);
    return {
        length,
        arrayFromString,
        arrayFromSet,
        arrayFromMap,
        arrayFromArrayLikeObject,
        arrayFromWithArrow,
        arrayFromWithArrow2
    };
}

export default arrayFrom;