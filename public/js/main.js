const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const dataHide = document.querySelector('.middle_layer');

const getInfo= async(event)=>{
    event.preventDefault();
    // alert('hii')
   let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Plz write name of your city`;
        dataHide.classList.add('data_hide');
    }

    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f1ebef85c043e0e3544dcc1f4410bbaf`
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];
            temp.innerText = arrData[0].main.temp;
            tempMood = arrData[0].weather[0].main;
            city_name.innerText =`${ arrData[0].name} , ${ arrData[0].sys.country}`;
            dataHide.classList.remove('data_hide');

            //condition to check sunny or cloudy
            if (tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else  if (tempMood == "Clouds"){
                tempMood.itemp_status = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else  if (tempMood == "Rain"){
                tempMood.itemp_status = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }
            else {
                tempMood.itemp_status = "<i class='fas fa-sun' style='color: #f1f2f6;'></i>"
            }

        }catch{
            city_name.innerText = `Plz enter a valid city name`;
            dataHide.classList.add('data_hide');
            
        }
        
    }
}

submitBtn.addEventListener('click',getInfo)