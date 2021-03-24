import './App.css';

//const api = {
 // apiKey: "21e0031de06d3587435fcd1eb132ac9b",
 // baseURL: "https://api.openweathermap.org/data/2.5/"
//}

function App() {

  const buildDate = (d) => {
    let date = String(new window.Date())
    date = date.slice(3,15)

    return `${date}`
  }


  return (
    <div className="App">
      <main>
        <div className="Logo">
          LightningWeather
        </div>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Enter a Location..."
              />
          </div>
          <div className="info-box">
            <div className="Date">{buildDate(new Date())}</div>
            <div className="Location"></div>

          </div>

        </main>
      </div>
  );
}

export default App;
