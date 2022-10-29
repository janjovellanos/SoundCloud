now = new Date(Date.now())


sum = 0
for (i = 1; i < 1000000; i++) {
    sum += i
}

later = new Date(Date.now())


console.log('NOW>>>>>>>>>>>>',now)
console.log('NOW>>>>>>>>>>>>',later)
console.log(later - now);
