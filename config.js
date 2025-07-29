//===================[ OWNER ]=====================\\
global.owner = [
  "_", // nomer kalian 
  
]
global.ownername = "ShiinKZY"

//===================[ FUNCTION BOT ]=====================\\
global.botname = "Base Bot ShyoID"
global.botver = "V 0.0.1"
global.idchnel = "120363375932047322@newsletter@newsletter"

//===================[ FUNCTION STICKER ]==================\\
global.packname = "Base Bot"
global.author = "By IkyyKzy"

//===================[ FUNCTION OTHER ]=====================\\
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

//===================[ RESPON MESSAGE ]===================\\
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔✅ ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
	owner: '_*Khusus Owner*_',
    premium: '_*Khusus Premium" Mau Prem? Chat Owner*_',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})