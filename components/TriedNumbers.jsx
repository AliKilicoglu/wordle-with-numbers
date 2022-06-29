import { useRecoilState } from 'recoil'
import { triedNumbersAtom } from "../atoms/triedNumbersAtom"

export default function TriedNumbers(){
    const [triedNumbers,setTriedNumbers] = useRecoilState(triedNumbersAtom)
    return (
        <div className='absolute bottom-60 w-screen  flex justify-center	'>
            <div >
            {
                triedNumbers.map(triedNumber=>{
                    return (
                        <div className='flex'>
                            <p style={{backgroundColor:triedNumber[0].color}} className="flex   justify-center ml-2 mb-2 h-12 w-12 border-spacing-1 text-2xl" >{triedNumber[0].number}</p>
                            <p style={{backgroundColor:triedNumber[1].color}} className="flex   justify-center ml-2 mb-2 h-12 w-12 border-spacing-1 text-2xl" >{triedNumber[1].number}</p>
                            <p style={{backgroundColor:triedNumber[2].color}} className="flex   justify-center ml-2 mb-2 h-12 w-12 border-spacing-1 text-2xl" >{triedNumber[2].number}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
    
