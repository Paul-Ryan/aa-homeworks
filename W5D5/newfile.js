const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teatime() {
  reader.question('would you like some tea?', function (res) {
    console.log(`you replied ${res}`);
    reader.question(`Would you like some biscuits?`, function (res2) {
      console.log(`you said ${res2}`);
    })
  })
}
