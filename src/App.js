import './App.css';
import Like from './components/Like/Like';
import Timer from './components/Timer/Timer';
import Fibonacci from './components/Fibonacci/Fibonacci';
import ReverseString from './components/ReverseString/ReverseString';

export default function App() {
  return (
      <>
        <Like />
        <Timer />
        <Fibonacci />
        <ReverseString text='meow'/>
      </>
);
}
