const { dayOfTheWeek } = require('./script');


test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/4/2022') );
    expect( day ).toBe('Monday');
});

test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/5/2022') );
    expect( day ).toBe('Tuesday');
});

test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/6/2022') );
    expect( day ).toBe('Wednesday');
});

test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/7/2022') );
    expect( day ).toBe('Thursday');
});

test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/8/2022') );
    expect( day ).toBe('Friday');
});

test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/9/2022') );
    expect( day ).toBe('Saturday');
});

test('getDay returns the day of the week', () => {
    const day = dayOfTheWeek( new Date('7/10/2022') );
    expect( day ).toBe('Sunday');
});
