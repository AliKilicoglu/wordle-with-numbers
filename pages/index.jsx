import Numpad from "../components/Numpad";
import NumberInput from '../components/NumberInput';
import TriedNumbers from '../components/TriedNumbers';
export default function Home() {
  return (
    <div>
      <h1 className="absolute  bottom-0">{}</h1>
      <TriedNumbers/>
      <NumberInput/>
      <Numpad/>
    </div>
  )
}
