import { useRecoilState } from 'recoil'
import { triedNumbersAtom } from "../atoms/triedNumbersAtom"

export default function TriedNumbers(){
    const [triedNumbers,setTriedNumbers] = useRecoilState(triedNumbersAtom)
    return (
        <div className='flex w-screen'>
        {
            triedNumbers.map((triedNumber)=>{
                return(
                    <div className='absolute flex w-screen top-10 justify-center text-center h-max'>
                        {
                            triedNumber.map((numberValues)=>{
                                console.log(numberValues.color)
                                return  (
                                    <div  style={{backgroundColor:numberValues.color}} className="flex  align-middle justify-center ml-2 h-12 w-12 border-spacing-1">
                                        <p className='text-semibold text-white text-2xl'>{numberValues.number}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )      
            })
      }
      </div>
    )
}
    
