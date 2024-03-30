let $ = document;

let boxWeather = $.getElementById ("box_data_weather");
let inputSearch = $.getElementById ("input_search");
let btnSearch = $.getElementById ("icon_sch");
let citysName = $.getElementById ("citys_name");
let tempText = $.getElementById ("temp");
let desText = $.getElementById ("des")
let humidityText = $.getElementById ("humidity");
let windspeedText = $.getElementById ("windspeed");

let dataWeather = [
    {Id : 1 , Name : "tabriz" , temp : 15 , des : "Sunny" , humidity : 2 , windspeed : 3},
    {Id : 2 , Name : "tehran" , temp : 5 , des : "Cloudy" , humidity : 12 , windspeed : 11},
    {Id : 3 , Name : "shiraz" , temp : 2 , des : "Rain" , humidity : 11 , windspeed : 15},
    {Id : 4 , Name : "gilan" , temp : 4 , des : "RainBow" , humidity : 14 , windspeed : 13},
    {Id : 5 , Name : "sfahan" , temp : 6 , des : "Cloudy" , humidity : 12 , windspeed : 13},
    {Id : 6 , Name : "zanjan" , temp : 17 , des : "Sunny" , humidity : 1 , windspeed : 4},
]

btnSearch.addEventListener ("click" , () => {
    let valueInputSearch = inputSearch.value.toLowerCase();
    // console.log(valueInputSearch);
    let checkOfData = dataWeather.find ((weather) => {
        return weather.Name === valueInputSearch;
    })
    // console.log(checkOfData);
    citysName.innerHTML = 'Weather in '+checkOfData.Name;
    tempText.innerHTML = checkOfData.temp+'C';
    desText.innerHTML = checkOfData.des;
    humidityText.innerHTML = 'Humidity : ' + checkOfData.humidity + '%';
    windspeedText.innerHTML = 'Windspeed : ' + checkOfData.windspeed + 'km/h';

    boxWeather.style.display = "flex";
    boxWeather.style.height = "350px";
    boxWeather.classList.add ("animationWR");
})