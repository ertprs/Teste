
const {google} = require('googleapis');

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
    calendar.events.patch({
        auth: auth,
        calendarId: 'primary',
        eventId:'4dqkjbfnujlmo2i997gkatjio4',
        resource: {
            'summary': 'testeiagoo',
            'description': 'Sample event description',
            'start': {
                'dateTime': '2020-06-30T18:09:39.000Z',
                'timeZone':'utc'
            },
            'end': {
                'dateTime': '2020-06-30T20:09:39.000Z',
                'timeZone':'utc'
            },
            'attendees': [],
            'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 10},
                ],
            },
            'colorId' : 4 ,
            'sendUpdates':'all',
            'status' : 'confirmed' //testando comiit do git
        },
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res.data);
        }
    });
