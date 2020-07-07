const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg, contato) {
 


  banco.db[user].stage = 1;

  return [
    `Olá, aqui é do Consultório da Nutri eu sou a atendente virtual e vou auxiliar no seu atendimento.`,"O que você deseja fazer?",
    `Digite *1* Nova Consulta \nDigite *2* Reagendar Consulta \nDigite *3* Cancelar agendamento \nDigite *4* Para falar com a secretaria\n`,
  ];
}

exports.execute = execute;
