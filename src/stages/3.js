const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg.replace(/ /g,"").replace(/-/g,"").trim().length == 11) {
    banco.db[user].stage = 0;
    return ["Segue link para cancelamento:"];
  }

  if (msg.replace(/ /g,"").replace(/-/g,"").trim().length == 12) {
    banco.db[user].stage = 0;
    return ["Segue link para cancelamento:"];
  }
  if (msg  == 0) {
    banco.db[user].stage = 1;
    return [
      "O que você deseja fazer?",
      `Digite *1* Nova Consulta \nDigite *2* Reagendar Consulta \nDigite *3* Cancelar agendamento \nDigite *4* Para falar com a secretaria\n`,
    ];;
  }
 

  return [ "Favor informar o numero conforme o exemplo \nExemplo:*79 99191-6827*\nDigite *0* para voltar ao menu anterior"];
}

exports.execute = execute;
