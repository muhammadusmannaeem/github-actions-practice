const { dayOfTheWeek } = require('./script');

/*
    Test if date is provided in proper format
*/

// For Monday
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/4/2022') );
    expect( day ).toBe('Monday');
});

// For Tuesday
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/5/2022') );
    expect( day ).toBe('Tuesday');
});

// For Wednesday
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/6/2022') );
    expect( day ).toBe('Wednesday');
});

// For Thursday
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/7/2022') );
    expect( day ).toBe('Thursday');
});

// For Friday
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/8/2022') );
    expect( day ).toBe('Friday');
});

// For Saturday
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/9/2022') );
    expect( day ).toBe('Saturday');
});

// For Sunday
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/10/2022') );
    expect( day ).toBe('Sunday');
});

/*
    Test if date is NOT provided in proper format
*/

// For Empty date
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('') );
    expect( day ).toBe(undefined);
});

// For Null date, Returns base value:: Thu Jan 01 1970 
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date(null) );
    expect( day ).toBe('Thursday');
});

// For Invalid date
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date(undefined) );
    expect( day ).toBe(undefined);
});

// If number is passed as date
test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( 10 );
    expect( day ).toBe(undefined);
});

