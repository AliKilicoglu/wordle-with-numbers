import Numpad from "../components/Numpad";
import NumberInput from '../components/NumberInput';
import TriedNumbers from '../components/TriedNumbers';

import { useRecoilState } from 'recoil'
import { triedNumbersAtom } from "../atoms/triedNumbersAtom"

export default function Home() {
  const [triedNumbers,setTriedNumbers] = useRecoilState(triedNumbersAtom)
  return (
    <div>
      <h1 className="absolute  top-6 text-xl">{triedNumbers.length} kez denedin {5 - triedNumbers.length} hakkın kaldı</h1>
      <NumberInput/>
      <TriedNumbers/>
      <Numpad/>
      <h1 className="absolute top-0 underline cursor-pointer text-xl">Nasıl oynanır</h1>
    </div>
  )
}
