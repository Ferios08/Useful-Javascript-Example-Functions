function matrix(numrows, numcols, /*initial*/) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = i+j //initial;
        }
        arr[i] = columns;
    }
    return arr;
}

console.log(matrix(5, 4))
