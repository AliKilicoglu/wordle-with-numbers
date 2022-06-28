import Numpad from "../components/Numpad";
import NumberInput from '../components/NumberInput';
import TriedNumbers from '../components/TriedNumbers';

import { useRecoilState } from 'recoil'
import { triedNumbersAtom } from "../atoms/triedNumbersAtom"

export default function Home() {
  const [triedNumbers,setTriedNumbers] = useRecoilState(triedNumbersAtom)
  return (
    <div>
      <h1 className="absolute  bottom-0">{triedNumbers.length} kez denedin</h1>
      <NumberInput/>
      <TriedNumbers/>
      <Numpad/>
    </div>
  )
}
