// ---------- Use any type ----------

let variable = 'Hello';

// This wont work beacuse it needs a string
// variable = 0;

let age = 18;
// age="test"

// ---------- Explicitly define a type ----------
let ageWithType: Number;

// This wont work
// ageWithType = 'test';
ageWithType = 2;

// ---------- Define a type and default value ----------
let ageWithTypeAndValue: Number = 22;

// ---------- Other types ----------
let testString: string;

testString = 'dawdaw';

let testBool: boolean;

testBool = false;

// ---------- Multiple types ----------
let testStringOrNumber: string | number;
testStringOrNumber = 10;
testStringOrNumber = 'test';

// ---------- Arrays ----------
let names = ['test', 'test2', 'test3'];

// Not allowed
// names.push(3);

// Allowed
names.push('Test4');

// ---------- Array types ----------
let testStringArr: string[];

// ---------- Arrays with 2 types ----------
let testStringOrNumberArr: (string | number)[];

// ---------- Objects ----------

let user = {
	username: 'test',
	age: 22,
	isAdmin: false,
};

user.username = 'test2';

// age.age = "18"

// ---------- Object with types ----------

let userObj: {
	username: string;
	age: number;
	isAdmin: boolean;
};

// All values must be present in object
userObj = {
	username: 'test',
	age: 232,
	isAdmin: false,
};

// ---------- Objects but some types are OPTIONAL ----------

let userObj2: {
	username: string;
	age: number;
	isAdmin: boolean;
	phone?: string;
};

userObj2 = {
	username: 'test3',
	age: 2,
	isAdmin: true,
};

// ---------- ANY ----------

let testAny;

testAny = 12;
testAny = 'test';

// ---------- ANY ARRAY  ----------
let testAnyArray: any[];

testAnyArray = [2232, 'any '];

// ---------- FUNCTION ----------
