
const {google} = require('googleapis');


async function teste(inicio){

   
   
  return  new Promise ((resolver, reject) => { 
  
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
        timeMin: `${inicio}`,
        maxResults: 3,
        singleEvents: true,
        orderBy: 'startTime',
        
    },  (err, res) => {
        if (err) {
            console.log(err);
        } else {

            var para = false
            
             const events = res.data.items;
                resolver(events)

           
                   
       //   console.log(events.length)
        
          if(events.length < 3){
            para = true
          }else{
            para = false
          }
          // console.log(events[0])
          



            //console.log(res.data);
        }
});
});
}

function teste2(){
var p1 = Promise.resolve({ 
    then: function(onFulfill, onReject) { onFulfill("fulfilled!"); }
  });
  //console.log(p1 ) // true, object casted to a Promise
  return "ss"
 return p1.then(function(v) {
     // console.log(v); // "fulfilled!"
     
    }, function(e) {
      // not called
  });
}


(async () => {
    const dadosbruto = [];
    var continua = true 
   let inicio = new Date().toISOString()
   const teste2 = await teste(inicio)
    const dadosfinal = [];
    const telefonecliente = "55791916927"
   
   do{ 
        const dadoapi = [];
        const teste2 = await teste(inicio)
        dadoapi.push(await teste(inicio))
        //teste2 = teste2 + await teste(inicio)
        //console.log(teste2) 
        //console.log(teste2.length+"quantudade")
        const agesemcancelar = teste2.filter(function(agendamento) {
             
            return agendamento.attendees[1].responseStatus != "declined";                  
        });

        // no numero do if dever igual ao do limite de requisição 
        if(await teste2.length >= 3){
            //console.log( dadoapi[0][1].start.dateTime)
            inicio = teste2[teste2.length -1].start.dateTime //pegaando a ultima data
            //console.log(dadoapi[0][0].attendees[1].responseStatus)
            

         for (let i=0; i<agesemcancelar.length; i++){



            telefone = agesemcancelar[i].description
            resultaodo = telefone.substring(telefone.indexOf("telefone?:") + 12, telefone.indexOf("Precisa efetua")).replace(/ /g,"").replace(/-/g,"").trim();
            console.log(resultaodo)
          console.log(resultaodo.replace(/ /g,"").replace(/-/g,"").trim().length)

          if(resultaodo.length = 13){
            resultaodo = resultaodo.substring(0,4)+resultaodo.substring(5,14)
          }

            if(resultaodo == telefonecliente){

                const idevent = agesemcancelar[i].id
                const start = agesemcancelar[i].start.dateTime
                const linkreagendar = agesemcancelar[i].substring(telefone.indexOf("Reagendar:") + 10, agesemcancelar[i].indexOf("Desenvolvido po")).trim();
                const linkcancelar = agesemcancelar[i].substring(telefone.indexOf("Cancelar:") + 9, agesemcancelar[i].indexOf("Reagendar")).trim();
                 // telefonecliente
                const nomecliente =

                dadosfinal.push({
                    idevent,
                    start,
                    linkreagendar,
                    linkcancelar,
                    telefonecliente,
                    nomecliente

                  });
                
                
            }
            



            // adiconando
            if(agesemcancelar[i].summary == 'iago e Consultório Lacy Lima'){
                    const idevent = agesemcancelar[i].id
                    const summary = agesemcancelar[i].summary

                

            }
            //adcionando fim


         }

            //console.log(agesemcancelar)
      // dadosbruto.push(await agesemcancelar)

            continua = true
        }else{


            
         for (let i=0; i<agesemcancelar.length; i++){


            if(agesemcancelar[i].summary == 'iago e Consultório Lacy Lima'){
                    const idevent = agesemcancelar[i].id
                    const summary = agesemcancelar[i].summary

                dadosfinal.push({
                    idevent,
                    summary
                  });

            }


         }
            continua = false
        }
       //console.log( dadoapi[0][1])

        
        
       
    //console.log(await dadoapi.length)


    } while (continua  == true)

  console.log(  dadosfinal)
  })()
