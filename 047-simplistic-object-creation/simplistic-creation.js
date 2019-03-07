let journal = [];

function addEntry(events, transformed) {
    journal.push({events, transformed});
}

addEntry(["woke up", "ate"], true);
console.log(journal);