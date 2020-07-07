const bot = require("venom-bot");
const googleeventos = require("./stages/consultaeventosgoogle.js");



async function teste(){
    console.log(await  googleeventos.eventesgoogleapi()+"sssssssssssss")
    
}
teste()