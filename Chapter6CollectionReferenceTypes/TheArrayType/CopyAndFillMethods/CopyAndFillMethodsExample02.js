const zeroes = [0, 0, 0, 0, 0];

// Fill with too low indices is noop
zeroes.fill(1, -10, -6);
alert(zeroes);   // [0, 0, 0, 0, 0]

// Fill with too high indices is noop
zeroes.fill(1, 10, 15);
alert(zeroes);   // [0, 0, 0, 0, 0]

// Fill with reversed indices is noop
zeroes.fill(2, 4, 2);
alert(zeroes);   // [0, 0, 0, 0, 0] 

// Fill with partial index overlap is best effort
zeroes.fill(4, 3, 10)
alert(zeroes);   // [0, 0, 0, 4, 4]

