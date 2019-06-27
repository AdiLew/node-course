const geocode = require('./utils/geocode.js'),
    forecast = require('./utils/forecast.js'),
    chalk = require('chalk')


const location = process.argv[2];
if (process.argv.length == 2){
    return console.log('Please provide a location');
}

geocode(location, (error, {lat, lon, placeName}) => {
    if (error) {
        return console.log(error)
    }

    forecast(lat, lon, (error, forecast) => {
        if (error) {
            return console.log(`${chalk.red.underline('Error!')}\n${error}`)
        }

        console.log(chalk.cyan.underline(`Current weather in ${placeName}`))
        console.log(forecast)
    })
})


