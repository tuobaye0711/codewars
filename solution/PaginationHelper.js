// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// PaginationHelper<Character> helper = new PaginationHelper(Arrays.asList('a', 'b', 'c', 'd', 'e', 'f'), 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

class PaginationHelper {
    constructor(arr, len) {
        this.content = arr;
        this.total = arr.length;
        this.perPage = len;
    }

    pageCount(n = this.total) {
        return Math.ceil((n + 1) / this.perPage);
    }

    itemCount() {
        return this.total;
    }

    pageItemCount(page) {
        if (page === this.pageCount() - 1) {
            return this.total % this.perPage;
        } else if (page < this.pageCount() - 1) {
            return this.perPage;
        } else {
            return 0;
        }
    }

    pageIndex(num) {
        if (num < this.total && num >= 0) {
            return this.pageCount(num) - 1;
        } else {
            return -1;
        }
    }
}
