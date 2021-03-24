const apiKey = '21e0031de06d3587435fcd1eb132ac9b'  // API KEY

window.addEventListener('load', () => {
    let longitude;
    let latitude;
    //Grabbing the location of the user to display the weather information.
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((postion) => {
            //Storting Lat and Long from the users browser to the variables

            const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric'
            longitude = postion.coords.longitude
            latitude = postion.coords.latitude;

            console.log(base);
            fetch(base)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                const { temp } = data.main;
                const place = data.name;
                const { description, icon } = data.weather[0];
                const { sunrise, sunset } = data.sys; 
            });
        });
    };




});
