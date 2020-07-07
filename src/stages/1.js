const cardapio = require("../cardapio");
const banco = require("../banco");
const linkagendamento = "https://calendly.com/lacylima/consulta"
function execute(user, msg) {
  if (msg === "1") {
    banco.db[user].stage = 0;
    return [`Oii, vi que você quer agendar uma consulta!!\nVou te mandar um link para você escolher qual horário se encaixa melhor na sua agenda.:${linkagendamento} \n Qualquer duvida estaria por aqui para te auxiliar.`];
  }

  if (msg === "2") {
    banco.db[user].stage = 2;
    return ["Sem problemas vamos agendar um novo horário para atende-lo.","Qual o numero de telfone informado no horario do agendamento?\n Digite *1* para o numero\nDigite o numero conforme o exemplo\nExemplo:*79 91111-2222*"];
  }
  if (msg === "3") {
    banco.db[user].stage = 3;
    return ["Que pena que tomou essa decisão.\nQual o numero de telfone informado no horario do agendamento?\n*Exemplo:79 99191-6827*"];
  }
  if (msg === "4") {
    banco.db[user].stage = 4;
    return ["Ja irei transferiri agora para um atedente para agilizar o atendimento qual seria o assunto?" ];
  }


  return [
    "Não conseguir entender :( o código esta inválido, digite corretamente",
    "Digite 1,2,3 ou 4",
  ];
}

exports.execute = execute;
