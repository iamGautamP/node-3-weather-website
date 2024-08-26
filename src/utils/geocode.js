const request = require('request') 

// const url = 'http://api.positionstack.com/v1/forward?access_key=f95b748f2190c92171b3a5440dffa6d6&query=600 Los Angeles, California, united States1&limit=1'



// const geocode = (address, callback) => {
//     const url = 'http://api.positionstack.com/v1/forward?access_key=f95b748f2190c92171b3a5440dffa6d6&query='+encodeURIComponent(address)+'&limit=1' // or simply we can pass address unless address has special characters

//     request({url:url, json:true}, (error, response) => { //remember request is a asynchronous function
//         if (error){
//             callback("Unable to connect to location services", undefined)
//         }else if (response.body.error){
//             callback('Unable to find location. Try another search', undefined)
//         }else {
//             callback(undefined, {
//                 latitude : response.body.data[0].latitude,
//                 longitude : response.body.data[0].longitude,
//                 location : response.body.data[0].locality // run the url in chrome and see
//             })
//         }

//     })
// }

// using destructuring and short hand syntax: see the forecast file to understand better


const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=f95b748f2190c92171b3a5440dffa6d6&query='+encodeURIComponent(address)+'&limit=1' // or simply we can pass address unless address has special characters

    request({url, json:true}, (error, {body} = {}) => { //remember request is a asynchronous function
        if (error){
            callback("Unable to connect to location services", undefined)
        }else if (body.error){
            callback('Unable to find location. Try another search', undefined)
        }else {
            callback(undefined, {
                latitude : body.data[0].latitude,
                longitude : body.data[0].longitude,
                location : body.data[0].locality // run the url in chrome and see
            })
        }

    })
}



module.exports = geocode