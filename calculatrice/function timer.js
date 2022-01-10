function timer(seconde) {
    if (seconde > 0) {
        console.log(seconde);
        timer(seconde - 1)
    } else (console.log(seconde))
}
timer(3)