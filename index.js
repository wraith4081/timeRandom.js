function random (seed = new Date().getTime(), error = true) {
    // Try convert seed to number if it's not a number
    seed = parseFloat( seed );

    // If seed is not a valid number after trying to convert it,
    if ( isNaN( seed ) ) {

        // And if errors are enabled
        if ( error ) 
            // Throw an error
            throw new Error( 'Seed must be valid a number' )
        else
            // Else return zero
            return 0;
        
    }

    // If seed is a valid number and smaller than 1000 or a.k.a shorter tan 4 digits
    if ( seed < 1000 ) {

        // And if errors are enabled
        if ( error ) 
            // Throw an error
            throw new Error( 'Seed must be 4 digits or more, (a.k.a. 1000 or more)' )
        else
            // Else return zero
            return 0;
        
    }

    // Define Shift values, and these values are random not spesific values. 
    // If these values are changed, the random function will generate other random results with same seeds.
    const Shifts = [
        0x0001,
        0x0012,
        0x0123,
        0x1234,
        0x2345,
        0x3456,
        0x4567,
        0x5678,
        0x6789,
        0x789a,
        0x89ab,
        0x9abc,
        0xabcd,
    ];

    // Slice seed to digits and make these digit strings to numbers
    const TimePeice = String(seed).split('').map((x) => +x);

    // For each digit in seed, make these mathematical operation
    const randomRaw = TimePeice.map(
        (x, i) => (
            (
                Shifts[i] * x & 0xffff ^ x
            ) * Math.pow(10, i)
        ) / seed
    ).reduce(
        // And get the sum of these results
        (a, b) => a + b, 0
    );
    // Finally return the random .
    return +(
        '0.' +
        String(randomRaw)
            .replace('.', '')
            .padEnd(16, '0')
            .slice(0, 16)
    );
}

// Export the function
module.exports = random;
