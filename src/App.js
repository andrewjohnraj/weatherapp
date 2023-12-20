
import './App.css';
import sunshine from "./video/158384 (1080p).mp4"
//import rainy from './src/video/production_id_4767573 (1080p).mp4';
//import cloudy from './src/video/video (2160p).mp4';
import WeatherCard from './weatherCard'
function App() {
  return (
    <div className="App">
      <video src={sunshine} muted autoPlay loop></video>
      <WeatherCard/>
    </div>
  );
}

export default App;
