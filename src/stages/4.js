const banco = require("../banco");

function execute(user, msg) {
  banco.db[user].stage = 0;
  return [
    "Obrigado pela preferencia.",
    "Aguarde, você ja sera atendido",
    
  ];
}

exports.execute = execute;
