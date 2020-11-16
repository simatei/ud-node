const chalk = require('chalk')
const log = console.log

const getNotes = function () {
    return log(chalk.green.bgRed('Success.'))
}


module.exports = getNotes