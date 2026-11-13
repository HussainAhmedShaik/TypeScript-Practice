for (let num: number = 2; num <= 50; num++) {
    let isPrime: boolean = true;

    for (let i: number = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}