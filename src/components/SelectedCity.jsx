/* eslint-disable react/prop-types */

const SelectedCity = ({ weather, error }) => (
  <div>
    {error && <p className="error">{error}</p>}
    {weather ? (
      <div className="weather-info">
        <h2>Condizioni attuali</h2>
        <p>Temperatura: {weather.temp}°C</p>
        <p>Temperatura percepita: {weather.feels_like}°C</p>
        <p>Umidità: {weather.humidity}%</p>
      </div>
    ) : (
      <p>Seleziona una città per visualizzare il meteo.</p>
    )}
  </div>
);

export default SelectedCity;
