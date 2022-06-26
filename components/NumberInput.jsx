import { useState } from "react"
import { atom , useRecoilState} from 'recoil'
import { currentInputAtom } from "../atoms/CurrentInputAtom"
import { numbersAtom } from "../atoms/numbersAtom"

export default function NumberInput(){
    const [currentInput,setCurrentInput] = useRecoilState(currentInputAtom)
    const [numbers,setNumbers] = useRecoilState(numbersAtom)
    return ( 
        <div className="absolute flex w-screen top-24 justify-center ">
            {
                numbers.map((number,i)=>{
                    if(i === currentInput){
                        return <p className="text-3xl" id={i}>_</p>
                    }
                    else {
                        return <p className="text-3xl" id={i}>{number}</p>
                    }
                    
                })
            }
        </div>
    )
} 