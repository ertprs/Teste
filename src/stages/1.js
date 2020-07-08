const cardapio = require("../cardapio");
const banco = require("../banco");
const linkagendamento = "https://calendly.com/lacylima/consulta"
function execute(user, msg) {
  if (msg === "1") {
    banco.db[user].stage = 0;
    return [`Oii, vi que você quer agendar uma consulta!!\n\nVou te mandar um link para você escolher qual horário melhor se encaixa na sua agenda!\n${linkagendamento} \n\nQualquer duvida estarei por aqui para te auxiliar.🤳🏼`];
  }

  if (msg === "2") {
    banco.db[user].stage = 2;
    return ["Sem problemas vamos agendar um novo horário agora memso!","Para consultar seu horário, preciso do número de telefone.\n\n Digite *1*- Se o número de telefone for este que estamos conversando.\n\n Caso seja outro número, digite-o com o DDD conforme este exemplo\n *79 98801-1234*"];
  }
  if (msg === "3") {
    banco.db[user].stage = 3;
    return ["Que pena que tomou esta decisão.\n Para consultar seu horário, preciso do número de telefone.\n\n Digite *1*- Se o número de telefone for este que estamos conversando.\n\n Caso seja outro número, digite-o com o DDD conforme este exemplo\n *79 98801-1234*"];
  }
  if (msg === "4") {
    banco.db[user].stage = 4;
    return ["Só um minuto que vou chamar a humana!👩🏻‍💻", "\n Para que eu possa transferir, qual assunto deseja tratar?" ];
  }


  return [
    "Desculpe! \nNão consegui entender! 😔 \n\nO código pode estar inválido, favor escolher uma destas opções:\n\n",
    "Digite *1*- Agendar uma nova consulta.📅 \n\nDigite *2*- Reagendar Consulta.📆 \n\nDigite *3*- Cancelar consulta.❌ \n\nDigite *4*- Para falar com a secretária.👩🏻‍💻\n\n",
  ];
}

exports.execute = execute;
