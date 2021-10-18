/* Copyright (C) 2021 ws virus Fucker.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
VIRUS - FUCKER
*/

const Stefanie = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var THERI_on = ''
    var THERI_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'turn on & off anti-badword To remove members when they use bad words'        
        THERI_on = 'ʙᴀᴅ ᴡᴏʀᴅ ʀᴇᴍᴏᴠɪɴɢ ɪꜱ ᴛᴜʀɴᴇᴅ ᴏɴ'
        THERI_off = 'ʙᴀᴅ ᴡᴏʀᴅ ʀᴇᴍᴏᴠɪɴɢ ɪꜱ ᴛᴜʀɴᴇᴅ ᴏꜰꜰ'
    }
   
   
    if (config.LANG == 'ML') {
        l_dsc = 'അംഗങ്ങൾ നൽകിയ മോശം വാക്ക് ഉപയോഗിക്കുമ്പോൾ അവരെ നീക്കം ചെയ്യാൻ'
        THERI_on = 'മോശം വാക്ക് നീക്കംചെയ്യൽ ഓണാക്കി'
        THERI_off = 'മോശം വാക്ക് നീക്കംചെയ്യൽ ഓഫാക്കി'
    }
   
    Stefanie.addCommand({pattern: 'antibadword ?(.*)', fromMe: true, desc: l_dsc, usage: '.antibadword on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_BAD']: 'false'
                    } 
                });
                await message.sendMessage(THERI_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_BAD']: 'true'
                    } 
                });
                await message.sendMessage(THERI_on)
        }
    }));
