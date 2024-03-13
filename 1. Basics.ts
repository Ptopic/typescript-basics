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
let sayHi = () => {
	console.log('Hi welcome');
};

// ---------- FUNCTION WITH RETURN TYPES ----------
let funcReturnString = (): string => {
	console.log('test2');
	return 'test2';
};

// ---------- FUNCTIONS WITH ARGUMENTS ----------
let multipleArgumentsFunction = (num: number): number => {
	return num * 2;
};

let multipleArgumentsFunction2 = (num: number): void => {
	// return num * 2;
	console.log('Do something but dont return');
};

// ---------- FUNCTION WITH REQURIED AND NOT REQUIRED PARAMS ----------
let sum = (num1: number, num2: number, num3?: number): number => {
	return num1 + num2;
};

sum(2, 3);

// ---------- TYPE ALIASES ----------
type UserType = {
	username: string;
	age: number;
	phone?: number;
};

const typeAliasesFunction = (user: UserType) => {
	console.log(user.username);
};

// ---------- FUNCTION TYPE ALIASES ----------
type MyFunc = (a: number, b: string) => void;

let write: MyFunc = (num, string) => {
	console.log(num + 'times' + string);
};

// ---------- OPTIONS ----------

type UserType2 = {
	username: string;
	age: number;
	phone?: number;
	theme: 'dark' | 'light';
};

const userWithTheme: UserType2 = {
	username: 'john',
	age: 22,
	//theme: "test",
	theme: 'dark',
};

// ---------- INTERFACES ----------
// Advanced version of TYPE
interface IUser {
	username: string;
	email: string;
	age: number;
}

interface IEmployee extends IUser {
	employeeId: number;
}

const employee: IEmployee = {
	username: 'petar',
	email: 'petar@email',
	age: 20,
	employeeId: 1,
};

const client: IUser = {
	username: 'client',
	email: 'client@email',
	age: 25,
};

// ---------- GENERICS ----------

interface IAuthor {
	id: number;
	username: string;
}

interface ICategory {
	id: number;
	title: string;
}

// NON GENERIC
interface IPost {
	id: number;
	title: string;
	desc: string;
	extra: IAuthor[] | ICategory[];
}

// GENERIC
interface IPostGeneric<T> {
	id: number;
	title: string;
	desc: string;
	extra: T[];
}

const genericTest: IPostGeneric<String> = {
	id: 2,
	title: 'title',
	desc: 'desc',
	extra: ['string1', 'string2'],
};

// ---------- GENERICS - RESTRICTIONS ----------

// T HAS TO BE A OBJECT
interface IPostGenericBetter<T extends Object> {
	id: number;
	title: string;
	desc: string;
	extra: T[];
}

const genericTest2: IPostGeneric<{ id: number; username: string }> = {
	id: 2,
	title: 'title',
	desc: 'desc',
	extra: [{ id: 1, username: 'john' }],
};

// BETTER WAY IS TO USE INTERFACE AS <T> INSTEAD OF {id: number, username: string}
const genericTestAuthor: IPostGeneric<IAuthor> = {
	id: 2,
	title: 'title',
	desc: 'desc',
	extra: [{ id: 1, username: 'john' }],
};

const genericTestCategory: IPostGeneric<ICategory> = {
	id: 2,
	title: 'title',
	desc: 'desc',
	extra: [{ id: 1, title: 'title' }],
};
