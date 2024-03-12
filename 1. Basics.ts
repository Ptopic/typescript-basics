let variable = 'Hello';

// This wont work beacuse it needs a string
// variable = 0;

let age = 18;
// age="test"

// Explicitly define a type
let ageWithType: Number;

// This wont work
// ageWithType = 'test';
ageWithType = 2;

// Define a type and default vlaue
let ageWithTypeAndValue: Number = 22;

// Other types
let testString: string;

testString = 'dawdaw';

let testBool: boolean;

testBool = false;

// Multiple types
let testStringOrNumber: string | number;
testStringOrNumber = 10;
testStringOrNumber = 'test';

// Arrays
let names = ['test', 'test2', 'test3'];

// Not allowed
// names.push(3);

// Allowed
names.push('Test4');

// Array types
let testStringArr: string[];

// Arrays with 2 types
let testStringOrNumberArr: (string | number)[];

// Objects