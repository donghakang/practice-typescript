// We don't know what type it is. We can store any value in there.
//
let userInput: unknown;

userInput = 5;
userInput = "Max";

let userName: string;
// userName = userInput  ==> ERROR: since userInput is unknown, userName is string

let userInput2: any;
// userName = userInput2 ==> No Error: any is the most flexable type


// Never
// It can be void, but it does throw a value.
// If it always throws an error 
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);