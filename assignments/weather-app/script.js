// let city=document.getElementById("searchbox")
// let resData = fetch('https://jsonplaceholder.typicode.com/posts')
        // // console.log(resData)
        // //then executes only when state is fullfiled
        // //catch executes only when state is rejected

// .then(res=>{ return res.json();})
// .then(data=>{if(data.cod==200)
// {document.getElementById("info").innerHTML=``}
// })
// let input = document.getElementById("searchbox")
let searchicon=document.getElementById("icon")

searchicon.addEventListener("click",function(){
    let input=document.getElementById("searchbox").value;
console.log(input);
let api_key="997440d3ca255ed0be56e4d78da9708c"
let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=metric`;
fetch(url)
// returns a promise which resolves to be an response but it is not the real data 
.then(response=>{
  return response.json()
})
  
.then(data=>
    {
    console.log("weather data:",data)

      if(data){
    document.getElementById("city").innerText = `City: ${data.name}`;
document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°C`;
document.getElementById("weather").innerText = `Weather: ${data.weather[0].main}`;
document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
document.getElementById("speed").innerText = `Wind Speed: ${data.wind.speed} m/s`;
    
let iconCode = data.weather[0].icon;
let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
document.getElementById("weather-icon").innerHTML=`<img src="${iconUrl}">`;
 } 
})
.catch(error=>
    {
        console.log("error wrong city name",error)
    });
});









