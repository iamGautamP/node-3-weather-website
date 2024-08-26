const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=2e0909b745e000d76fafd05ef86d0f8c&query=37.8267,-122.4233'


// const forecast = (lat, long, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=2e0909b745e000d76fafd05ef86d0f8c&query='+String(lat)+','+String(long)+'&units=f'

//     request({url:url, json:true, timeout:10000}, (error, response) => {
//         if (error){
//             callback('Unable to connect to the Weather Services',undefined)
//         }else if (response.body.error){
//             callback('Unable to find the location', undefined)
//         }else {
//             callback(undefined,response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees farenheit out there. " + "and feels like " + response.body.current.feelslike + " degrees farenheit")
//         }
//     })
// }

// using shorthand syntax and desrtucturing
const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2e0909b745e000d76fafd05ef86d0f8c&query='+String(lat)+','+String(long)+'&units=f'

    request({url, json:true, timeout:10000}, (error, {body} = {}) => { // url name is same and so we can use url itself in the object, and response is an object and the only property we use is body
        if (error){
            callback('Unable to connect to the Weather Services',undefined)
        }else if (body.error){
            callback('Unable to find the location', undefined)
        }else {
            callback(undefined,body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees farenheit out there. " + "and feels like " + body.current.feelslike + " degrees farenheit")
        }
    })
}

module.exports = forecast