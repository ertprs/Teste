const banco = require("../banco");
const bot = require("venom-bot");



  async function execute(user, msg) {
  
  const {google} = require('googleapis');
    

 
   if (msg.replace(/ /g,"").replace(/-/g,"").trim().length == 10) {
    console.log(msg.replace(/ /g,"").replace(/-/g,"").trim().length)
    banco.db[user].stage = 0;
    console.log("aqui10")
    const telefonecliente = "55" + msg.replace(/ /g,"").replace(/-/g,"").trim();
    console.log(telefonecliente)
    

   
      
   
      var linkagendamento = await reagendamento(telefonecliente).then(value => {
        console.log(`priceBTC.: ${value}`)    
      
       var  iagoteste = value
        return [value];
    })
    .catch(err => {
        console.log(`Error.: ${err} `)    
        return err;
    });
    


   // const testejj = await iagoteste
   // console.log(await iagoteste + "resultado da teste")
      console.log( await linkagendamento + "resultado da fucion")
       return  [ `Segue link para agendamento:${linkagendamento} `];
        
      }



      if (msg.replace(/ /g,"").replace(/-/g,"").trim().length == 12) {
        banco.db[user].stage = 0;
        return ["Segue link para agendamento:"];
      } 
      if (msg  == 0) {
        banco.db[user].stage = 1;
        return [
          "O que você deseja fazer?",
          `Digite *1* Nova Consulta \nDigite *2* Reagendar Consulta \nDigite *3* Cancelar agendamento \nDigite *4* Para falar com a secretaria\n`,
        ];;
  }
 

  //return [ "Favor informar o numero conforme o exemplo \nExemplo:*79 99191-6827*\nDigite *0* para voltar ao menu anterior"];



  function reagendamento(telefonecliente){
    //-------teste
    
    return new Promise ((resolver, reject) => {
    const teste = [];
  
 
    let auth = new google.auth.OAuth2(
    '870663151768-c0l3va3eplbr4j3ht3ffnpn19b6pcenr.apps.googleusercontent.com',
    'AjKYFQ-s3RjW_451P5jVuszo',
    'https://www.googleapis.com/auth/calendar.events'
    );
        // Now use OAuth response to get an user authenticated API client
    let credentials = {
        access_token:'ya29.a0AfH6SMA8Ki1I8v7qRNAnFZxPebjYkjyjrDvvXq4CTSzke5C3H6xE_MblQPnptZKzAO3U2zrPVFQ03LgdxG6efe3ziEZziAwg0bl6dfYlX842y4jcfugDjozfxmJUTJOswpWeq6swUGfMdWPOJg3Rs2byOC7N_gOKou4',
        token_type:'Bearer', // mostly Bearer
        refresh_token:'1//04eDix4Vz08x8CgYIARAAGAQSNwF-L9IrM3Q9gq2_QDOJeziWCU_nTpFQe2j91p_2ndRAlpAKY8ddQHh9Vz3zDAP2NIh-vdlG4Lc',
        expiry_date:'3599'
    };
    auth.setCredentials(credentials);
  
  
  
    let calendar = google.calendar({version: 'v3', auth});
        calendar.events.list({
            auth: auth,
            calendarId: 'primary',
            timeMin: (new Date()).toISOString(),
        
            singleEvents: true,
            orderBy: 'startTime',
            
        }, (err, res) => {
            if (err) {
                console.log(err);
            } else {

            
              
                const events = res.data.items;
                    
                        
                    for(i=0;i<events.length;i++){
                      
                        telefone = events[i].description
                        resultaodo = telefone.substring(telefone.indexOf("telefone?:") + 12, telefone.indexOf("Precisa efetua"));
                        console.log(resultaodo.replace(/ /g,"").replace(/-/g,"").trim())
                      console.log(resultaodo.replace(/ /g,"").replace(/-/g,"").trim().length)
                        if (resultaodo.replace(/ /g,"").replace(/-/g,"").trim().length == 12 ){
                      const telefonefinal = resultaodo.replace(/ /g,"").replace(/-/g,"").trim()
                        if(telefonefinal == telefonecliente){
                            console.log("dentro")
                            const cancelar = telefone.substring(telefone.indexOf("Cancelar:") + 9, telefone.indexOf("Reagendar"));
                            console.log(cancelar)
                            
                        }
                        }
                        if (resultaodo.replace(/ /g,"").replace(/-/g,"").trim().length == 13 ){
                          const resultaodobruto = (resultaodo.replace(/ /g,"").replace(/-/g,"").trim());
                          console.log(resultaodobruto+"bruto")
                                        
                            const telefonefinal = resultaodobruto.substring(0,4)+resultaodobruto.substring(5,14)
                            console.log(telefonefinal+"final")
                            console.log(telefonecliente+"cliete")
                            if(telefonefinal == telefonecliente){
                                console.log("dentrosss")
                                const cancelar = telefone.substring(telefone.indexOf("Cancelar:") + 9, telefone.indexOf("Reagendar")).trim();
                                console.log(cancelar)

                                

                                
                                
                                var reagendar = telefone.substring(telefone.indexOf("Reagendar:") + 10, telefone.indexOf("Desenvolvido po")).trim();
                                console.log(reagendar) ;  
                                
                                
                                resolver(reagendar)
                             
                                
                                
  
                            }
                           
                            }
                            
                    }
            
  
  
                   
                
                 
                //console.log(res.data);
            }
        });
       
    
         });
    

        
        }
     
      
}




exports.execute = execute;
