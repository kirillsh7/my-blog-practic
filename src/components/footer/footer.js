import styled from 'styled-components'
import { useEffect, useState } from 'react'
function FooterContainer({ className }) {
  const [city, setCity] = useState('')
  const [temperature, setTemperature] = useState('')
  const [weather, setWeather] = useState('')
  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=67804cc4a1f860d7bc57b3c9929da2d7',
    )
      .then((response) => response.json())
      .then(({ main, name, weather }) => {
        setCity(name)
        setTemperature(Math.round(main.temp))
        setWeather(weather[0].description)
      })
  }, [])
  return (
    <footer className={className}>
      <div>
        <div>Блог разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>
          {city}, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
        </div>
        <div>{temperature} °C</div>
        <div>{weather}</div>
      </div>
    </footer>
  )
}

export const Footer = styled(FooterContainer)`
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px 2px 17px #000;
  font-weight: bold;
`
