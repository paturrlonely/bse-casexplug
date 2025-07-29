/*

✨Credits: ShyoID 
✨Fix Base: ShyoCannn

*/

//===================[ TEMPAT MODULE ]=====================\\
require("./config")
const { downloadContentFromMessage,
proto,
generateWAMessage,
getContentType,
prepareWAMessageMedia,
generateWAMessageFromContent,
GroupSettingChange, 
jidDecode,
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
generateMessageID,
jidNormalizedUser,
generateForwardMessageContent,
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
delay,
WA_DEFAULT_EPHEMERAL,
WADefault,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const path = require ('path');

module.exports = async (Shyo, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

//================[ TEMPAT CONST LIB ]==================\\
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')

//===========[ TAMPAT PREFIX / ADMIN / OWNER ]==========\\
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Shyo.user.id.split(':')[0]+'@s.whatsapp.net' || Shyo.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Shyo.decodeJid(Shyo.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Shyo.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//=================[ TEMPAT FUNCTION DATABASE ]====================\\


//===================[ TAMPILAN CONSOLE ]=====================\\
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

//==================[ FUNCTION FITUR ]=====================\\
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Shyo.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

Shyo.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await Shyo.getFile(path, true)
        let {
            res,
            data: file,
            filename: pathFile
        } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw {
                    json: JSON.parse(file.toString())
                }
            }
            catch (e) {
                if (e.json) throw e.json
            }
        }
        let opt = {
            filename
        }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '',
            mimetype = type.mime,
            convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime))(
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'

        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage

        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: {
                url: pathFile
            },
            mimetype
        }
        let m
        try {
            m = await Shyo.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        }
        catch (e) {
            //console.error(e)
            m = null
        }
        finally {
            if (!m) m = await Shyo.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options
            })
            file = null
            return m
        }
    }

//===================[ FUNCTION REPLY ]=====================\\


const reply = (teks) => { 
Shyo.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "ShyoID", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://www.youtube.com/@ShyoCannn", 
"sourceUrl": "https://chat.whatsapp.com/CIg0VdlnwYn7U47at4i8Ab" }}}, { quoted: m }) }

const reply2 = (teks) => {
Shyo.sendMessage(from, { text : teks }, { quoted : m })
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

//==================[ FUNCTION WAKTU ]======================\\
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}


//================== [ PLUGINS ] ==================//
  /*!-======[ Plugins Imports ]======-!*/
const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const handler = { Shyo,
m,
prefix,
isCmd,
command,
text,
sender,
botNumber,
senderNumber,
isCreator,
pushname,
isBot,
quoted,
mime,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reSize,
fkethmb,
smsg,
fetchJson,
getBuffer,
fetchBuffer,
getGroupAdmins,
TelegraPh,
isUrl,
hitungmundur,
sleep,
clockString,
checkBandwidth,
runtime,
tanggal,
getRandom,
reply,
reply2,
hariini,
timee,
waktuucapan,
example }
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, kyykzy)
}
}
if (!pluginsDisable) return


//=================[ TEMPAT CASE DI BAWAH INI ]=================\\
switch(command) {


case 'menu': case 'help': case 'shyo':{
let anu = `
*INFO BOT*
NAMA: ${botname}
OWNER: ${ownername}
VERSI : ${botver}
TYPE: CASE x PLUGIN

*乂 MENU OWNER*
> • self
> • public
> • clearsession
> • upch

*乂 MENU PlUGINS*
> • addplugins
> • delplugins
> • getplugins
> • listplugins
> • saveplugins

*乂 MENU DOWNLOAD*
> • play

> © ShyoID
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
reply(anu)
 }
break;


//===================[ TEMPAT CASE MENU OWNER ]=====================\\
case 'self': {
if (!isCreator) return m.reply(mess.OnlyOwner)
Shyo.public = false
m.reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return m.reply(mess.OnlyOwner)
Shyo.public = true
m.reply('Sukses Change To Public Mode')
}
break


//===================[ TEMPAT CASE MENU DOWNLOAD ]=====================\\

case 'play': {
if (!text) return reply(`${prefix + command} Cupid`);

      let convert = await yts({ search: text, hl: 'id', gl: 'ID' });

      if (convert === 0) {
         return reply('Lagu Kamu Cari Tidak Di Temukan Sayang, Coba Cari Judul Lain...');
      }

      let result = convert.all[0];
      let lily = `*YOUTUBE PLAY*\n`;
      lily += `*Judul*: ${result.title}\n`;
      lily += `*Id*: ${result.videoId}\n`;
      lily += `*Durasi*: ${result.timestamp}\n`;
      lily += `*Upload*: ${result.ago}\n`;
      lily += `*Deskripsi*: ${result.description}\n`;
      lily += `*URL*: ${result.url}\n\n`;
      lily += `*Audio Sedang Dikirim*\n`;

      await Shyo.sendMessage(m.chat, {
         text: lily,
         contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
               title: result.title,
               mediaType: 1,
               previewType: 1,
               body: `✅ Base-MD : ${hariini} | Ini View: ${result.views}`,
               thumbnailUrl: result.image,
               renderLargerThumbnail: true,
               mediaUrl: result.url,
               sourceUrl: result.url
            }
         }
      }, { quoted: m });

      try {
         await Shyo.sendMessage(m.chat, { 
            audio: { url: `https://ytdl.nvlgroup.my.id/audio?url=${result.url}&bitrate=128` }, 
            mimetype: 'audio/mpeg' 
         }, { quoted: m });
      } catch (e) {
         reply('❌ Maaf, terjadi kesalahan...');
         console.error(e);
      }
   }
break

case 'upchmp3':
case 'upchaudio': {
    if (!isCreator) return reply(mess.OnlyOwner);
    if (!/video/.test(mime) && !/audio/.test(mime)) 
        return reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`);
    if (!quoted) 
        return reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`);
    await Shyo.sendMessage(m.chat, { 
        react: { text: "⏱️", key: m.key }
    });
    let media = await quoted.download();
    let { toAudio } = require('./lib/converter');
    let audio = await toAudio(media, 'mp4');
    await Shyo.sendMessage(global.idchnel, { 
        audio, 
        mimetype: 'audio/mpeg', 
        ptt: true,
        contextInfo: {
            mentionedJid: [m.sender], 
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idchnel,
                newsletterName: `SOUND RANDOM`,
                serverMessageId: 145
            }
        }
    }, { quoted: m });
    await Shyo.sendMessage(m.chat, { 
        react: { text: "✅", key: m.key } 
    });
    }
    break;


//===================[ BATAS CASE ]=====================\\
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
