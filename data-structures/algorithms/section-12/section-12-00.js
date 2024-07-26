let counter = 0;
function inception() {
    if (counter > 3) {
        return 'done';
    }
    counter++;
    return inception(); // Corrected line
}

console.log(inception()); // This will now print 'done'