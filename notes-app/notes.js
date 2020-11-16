const chalk = require('chalk')
const log = console.log

const getNotes = function () {
    return log(chalk.green.bgRed.bold('Your notes..'))
}


module.exports = getNotes