// start at "007", go to "ace"
const boundRange  = IDBKeyRange.bound("007", "ace");
// start at item after "007", go to "ace"
const boundRange  = IDBKeyRange.bound("007", "ace", true);
// start at item after "007", go to item before "ace"
const boundRange  = IDBKeyRange.bound("007", "ace", true, true);
// start at "007", go to item before "ace"
const boundRange  = IDBKeyRange.bound("007", "ace", false, true);
