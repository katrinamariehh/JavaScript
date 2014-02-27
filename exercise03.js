function duplicates(list) {
    var dupList = [];
    for (i = 0; i < list.length; i ++) {
        for (j = i + 1; j < list.length; j ++) {
            if (list[i] == list[j] && dupList.indexOf(list[i]) == -1) {
                dupList.push(list[i]);
            }
        }
    }
    return dupList;
}