import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarx from "./components/Navbarx";
import Selection from "./components/Selection";

import { useState, useEffect } from "react";
import SelectedCity from "./components/SelectedCity";

const App = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "838556691450b0921eaa370ca3dd0198";

  const fetchWeather = async (selectedLocation) => {
    if (!selectedLocation) {
      setError("Seleziona una località.");
      return;
    }

    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather(data.main); // Aggiorna lo stato con i dati meteo
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Errore nel recupero dei dati meteo.");
    }
  };

  // Aggiorna il meteo automaticamente quando cambia la città selezionata
  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location]);

  return (
    <>
      <Navbarx />
      <div className="weather-app">
        <h1>Meteo</h1>
        <Selection setLocation={setLocation} />
        <SelectedCity weather={weather} error={error} />
      </div>
    </>
  );
};

export default App;
