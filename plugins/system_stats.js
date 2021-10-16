/* Copyright (C) 2021 ws virus Fucker.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
VIRUS - FUCKER
*/

const Stefanie = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let am = Config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('system_stats');

    Stefanie.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```💕 Hey Bro!! I am still alive & kicking 😙```\n\n*✅Version :► 8.2 (Public Release)*\n*✅Branch  :► Main*\n*✅Developer :► Virus Fucker*\n*✅About :► Stefanie Is a Powerfull Bot For Whatsapp.*\n*✅Github Link :►https://tinyurl.com/yz3437mp*\n\n*💫©Join Our Group*\n*▷📑News & Update Report*\n_◈https://chat.whatsapp.com/KlpSnFrspoaEu2kRrjx8v4*\n▷⚡Official Pluggins Group* \n ◈https://chat.whatsapp.com/BnjLaEOiiruJ6m1Rz4V04p*\n\n```💕 Copyright © 2021 💞\n Also Feel free to contribute & issue ( report issues & feature request on issue session of the ropo ).. ( https://kaweeshachamodk.github.io/STEFANIE-V5.2 BETA_/ ) 🙂❤️```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👩‍🦰Powered By Virus Fucker*' })
     }
    }));

    Stefanie.addCommand({pattern: 'sysd', fromMe: am, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

 if (Config.WORKTYPE == 'public') {

    Stefanie.addCommand({pattern: 'alive', fromMe: false, dontAddCommandList:true}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```💕 Hey Bro!! I am still alive & kicking 😙```\n\n*✅Version :► 8.2 (Public Release)*\n*✅Branch  :► Main*\n*✅Developer :► Virus Fucker*\n*✅About :► Stefanie Is a Powerfull Bot For Whatsapp.*\n*✅Github Link :►https://tinyurl.com/yz3437mp*\n\n*💫©Join Our Group*\n*▷📑News & Update Report*\n_◈https://chat.whatsapp.com/KlpSnFrspoaEu2kRrjx8v4*\n▷⚡Official Pluggins Group* \n ◈https://chat.whatsapp.com/BnjLaEOiiruJ6m1Rz4V04p*\n\n```💕 Copyright © 2021 💞\n Also Feel free to contribute & issue ( report issues & feature request on issue session of the ropo ).. ( https://kaweeshachamodk.github.io/STEFANIE-V5.2 BETA_/ ) 🙂❤️```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👩‍🦰Powered By Virus Fucker*' })
     }
    }));

    Stefanie.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
