function somme(a) {

    if (a === 1) {
        return 1;
    }
    
    return a + somme(a - 1)
}

console.log(somme(3));