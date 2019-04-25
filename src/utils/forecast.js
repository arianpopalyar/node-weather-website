const request = require('request')

const forecast = (lati, longi ,callback) =>{
    const url = 'https://api.darksky.net/forecast/8027c30fa43b74c416991af02067579a/'+lati+','+longi+'?key=value&unit=si'
    request({url, json: true}, (error, {body}) => {
    if(error){
        callback('There is no internet connection',undefined)
    } else if (body.error){
        callback('wrong values',undefined)
    } else{
        callback(undefined,body.daily.data[0].summary+' It is currently ' + body.currently.temperature + ' degrees out. There is a '+ body.currently.precipProbability +'% chance of rain. \n and high temperature: '+body.daily.data[0].temperatureHigh+' and low temperature: '+body.daily.data[0].temperatureLow)
    }
    
    })
}
module.exports = forecast