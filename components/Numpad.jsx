import { useRecoilState } from 'recoil'
import { numbersAtom } from "../atoms/numbersAtom"
import { currentInputAtom } from "../atoms/CurrentInputAtom"

export default function Numpad (){
    const keypad = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['0','<','Enter']
    ]
    const [numbers,setNumbers] = useRecoilState(numbersAtom)
    const [currentInput,setCurrentInput] = useRecoilState(currentInputAtom)
    return (
    <div className="absolute bottom-5 w-screen flex flex-row-reverse justify-center">
        {
        keypad.map(keypadRow=>{
            return(
                <div>
                {
                keypadRow.map(number=>{
                    return(
                    <div className="flex">
                        <button onClick={()=>{
                            if(number==='<'){
                                let newNumbers = [...numbers]
                                if(numbers.findIndex((element)=> element === '')=== -1){
                                    newNumbers[2]=''
                                    setCurrentInput(2)
                                    setNumbers(newNumbers)
                                }
                                else{
                                    const lastFilledValue = numbers.findIndex((element)=> element === '')-1
                                    newNumbers[lastFilledValue] = ''
                                    setCurrentInput(lastFilledValue)
                                    setNumbers(newNumbers)
                                }
                            }
                            else {
                                const emptyValue = numbers.findIndex((element)=> element === '')
                                if (emptyValue !== -1){
                                    let newNumbers = [...numbers]
                                    setCurrentInput(emptyValue+1)
                                    newNumbers[emptyValue] = number
                                    setNumbers(newNumbers)
                                }
                            }
                        }} className="btn btn-primary rounded-full  ml-1 mt-1 h-16 w-16 ">{number}</button>
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