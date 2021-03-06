import './App.css';
import Like from './components/Like/Like';
import Timer from './components/Timer/Timer';
import Fibonacci from './components/Fibonacci/Fibonacci';
import ReverseString from './components/ReverseString/ReverseString';
import Alert from './components/Alert/Alert';
import ReverseStringWithButton from './components/ReverseStringWithButton/ReverseStringWithButton';
import Thermometer from './components/Thermometer/Thermometer';
import TrafficLight from './components/TrafficLight/TrafficLight';
import Counter from './components/Counter/Counter';
import VariableStepCounter from './components/VariableStepCounter/VariableStepCounter';
import SuperCounter from './components/SuperCounter/SuperCounter';
import Selectbox from './components/Selectbox/SelectBox';
import Details from './components/Details/Details';
import ItemGetter from './components/ItemGetter/ItemGetter';

export default function App() {
    return (
        <>
            <Like />
            <Timer />
            <Fibonacci />
            <ReverseString text='meow'/>
            <Alert text='Я скоро спрячусь' delay={5}/>
            <ReverseStringWithButton text='Pain'/>
            <Thermometer temperature={-19}/>
            <TrafficLight />
            <Counter />
            <VariableStepCounter />
            <SuperCounter />
            <Selectbox options={['meow', 'woof', 'bark']} onSelect={value => console.log(value)} />
            <Details shortText="Лицензионное соглашение" text="Настоящее соглашение дает вам нижеследующие права..." />
            <ItemGetter />
        </>
    );
}
