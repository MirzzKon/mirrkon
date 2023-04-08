const fs = require('fs')

const chalk = require('chalk')

// EDIT DISINI

global.owner = ['6285730118420'] // nomer mu

global.packname = '© Sticker By Mirzz-13' // nama pack sticker

global.author = 'Mirzz-14'// nama author 

let file = require.resolve(__filename)

fs.watchFile(file, () => {

fs.unwatchFile(file)

console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))

delete require.cache[file]

require(file)

})
