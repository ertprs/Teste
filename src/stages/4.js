const banco = require("../banco");

function execute(user, msg) {
  banco.db[user].stage = 5;

  setTimeout(function(){ banco.db[user].stage = 0}, 60000);
  return [
    "Obrigada pelo contato!🤖",
    "",
    
  ];
}

exports.execute = execute;
