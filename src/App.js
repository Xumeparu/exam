import './App.css';
import Like from './components/Like/Like';
import Timer from './components/Timer/Timer';
import Fibonacci from './components/Fibonacci/Fibonacci';
import ReverseString from './components/ReverseString/ReverseString';
import Alert from './components/Alert/Alert';
import ReverseStringWithButton from './components/ReverseStringWithButton/ReverseStringWithButton';
import Thermometer from './components/Thermometer/Thermometer';
import TrafficLight from './components/TrafficLight/TrafficLight';

export default function App() {
  return (
      <>
          <Like />
          <Timer />
          <Fibonacci />
          <ReverseString sourceString='meow'/>
          <Alert text='Я скоро спрячусь' delay={5}/>
          <ReverseStringWithButton text='Pain'/>
          <Thermometer temperature={-19}/>
          <TrafficLight />
      </>
);
}
