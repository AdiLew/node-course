const geocode = require('./utils/geocode.js'),
    forecast = require('./utils/forecast.js'),
    chalk = require('chalk')


geocode('Tel Aviv', (error, data) => {
    if (error){
        console.log(error)
    }
    else{
        forecast(data.lat,data.lon, (fError, fData)=>{
            if (error){
                console.log(chalk.red.underline('Error!'))
                console.log(fError)
            }
            else {            
                console.log(chalk.cyan.underline(`Current weather in ${data.placeName}`))
                console.log(fData)
            }
        })
    }
})
