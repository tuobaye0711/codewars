function isValidWalk(walk) {
    if (walk.length !== 10){
        return false
    }else {
        let walk_count ={
            n: 0,
            s: 0,
            e: 0,
            w: 0
        };
        walk.forEach(function (dir) {
            switch (dir){
                case 'n':
                    walk_count.n++;
                    break;
                case 's':
                    walk_count.s++;
                    break;
                case 'e':
                    walk_count.e++;
                    break;
                case 'w':
                    walk_count.w++;
                    break;
            }
        });
        return walk_count.n === walk_count.s && walk_count.e === walk_count.w
    }
}