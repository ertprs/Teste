const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg, contato) {
 


  banco.db[user].stage = 1;

  return [
    `Olá, eu sou a atendente virtual🤖 do Consultório de Lacy Lima, e hoje vou te auxiliar no atendimento.`,"Como posso te ajudar 👩🏽‍⚕️?",
    `Digite *1*- Agendar uma nova consulta.📅 \nDigite *2*- Reagendar Consulta.📆 \nDigite *3*- Cancelar consulta.❌ \nDigite *4*- Para falar com a secretária.👩🏻‍💻\n`,
  ];
}

exports.execute = execute;
