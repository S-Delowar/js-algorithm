class Comparator {
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction
    }

    //default compare function
    static defaultCompareFunction(a,b) {
        if(a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    //check if two are equal
    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    //less than
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    //greater than
    graterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    //less than or equal
    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    //greater than or equal
    greaterThanOrEqual(a, b) {
        return this.graterThan(a, b) || this.equal(a, b);
    }

}

const  cp = new Comparator();

console.log(cp.lessThanOrEqual(45, 56))

export default Comparator;