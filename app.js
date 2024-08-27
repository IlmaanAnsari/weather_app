const geocode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address){
    console.log('Please provide an address.')
}
else{
    geocode(address,(error,data)=>  {
        if(error){
            return console.log(error)
        }
        // console.log('Error : ', error)
        console.log('Data : ',data)
    
        forecast(address,  (error,forecastData) =>{
            if(error){
                return console.log(error)
            }
            console.log(address.location)
            console.log(forecastData)
        })  
    })
}





// forecast('New Delhi',  (error,data) =>{
//     console.log('Error : ', error)
//     console.log('Data : ',data)
// })






// const url = 'http://api.weatherstack.com/current?access_key=bc059d0623317bf9d7cecc99e4add4db&query=Mumbai';

// request({url : url, json :true}, (error,response)=>{
//     if(error){
//         console.log('Unable to connect to weather API.');
//     }
//     else if(response.body.error){
//         console.log('Unable to find location.');
//     }
//     else{
//         console.log (  response.body.current.weather_descriptions[0] + '. It feels like '+ response.body.current.temperature + ' degrees');
//     }

// });

// const geoCodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Mumbai.json?access_token=pk.eyJ1IjoiaWxtYWFuIiwiYSI6ImNseDIzY2Z2ZjBnOWkyanM0YXpoM2d6NHMifQ.tozuTPbevHi9Snjk5OAN4g&limit=1';
// request({url : geoCodingURL, json : true}, (error,response) => {
//     if(error){
//         console.log('not valid location.');
//     }
//     else if(response.body.features.length == 0){
//         console.log('Enter proper location.');
//     }
//     else{
//         console.log('Latitude : ' + response.body.features[0].center[0])  ;  
//         console.log('Longitude : ' + response.body.features[0].center[1])  ;  
//     }

// })


// request({url : url, json :false}, (error,response)=>{
//     // const data = JSON.parse(response.body)
//     // console.log(data.current);
//     console.log(response.body.current);
//     // console.log (response);
// });

//http://api.weatherstack.com/current?access_key=bc059d0623317bf9d7cecc99e4add4db&query=28.9845,77.7064