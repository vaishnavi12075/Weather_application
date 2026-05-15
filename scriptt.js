const api="https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"
const my="5ef7df83aa8ab188766efb69d835cb86";
let input=document.querySelector(".input");
let wind=document.querySelector(".spee-value");
let temp=document.querySelector(".temp-value");
let desc=document.querySelector(".des-value");
function inp(e){
    e.preventDefault();
    const word=document.querySelector("#inputvalue").value;
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${my}`

    ).then((res)=>{
        return res.json()

    }).then((data)=>{
        console.log(data);
        var descr=data.weather[0].description
        var tempt=data.main.temp
        var windspeed=data.wind.speed
        let tempC=(tempt-273.15).toFixed(2);
        wind.innerText=windspeed;
        temp.innerText=tempC +" C";
        desc.innerText=descr;

    });
}
input.addEventListener("submit",inp);
