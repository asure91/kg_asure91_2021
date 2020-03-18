var checkForOneToOneMapping = require('./checkForOneToOneMapping');
let args = process.argv.slice(2);

if (args.length != 2) {
  console.log(false);
  throw new Error('Please provide 2 strings to validate');
}

console.log(checkForOneToOneMapping(args[0], args[1]));
