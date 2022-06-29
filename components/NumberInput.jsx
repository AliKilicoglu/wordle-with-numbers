import { useState } from "react"
import { atom , useRecoilState} from 'recoil'
import { currentInputAtom } from "../atoms/CurrentInputAtom"
import { numbersAtom } from "../atoms/numbersAtom"
import { numberColorsAtom } from "../atoms/numberColorsAtom"

export default function NumberInput(){
    const [currentInput,setCurrentInput] = useRecoilState(currentInputAtom)
    const [numbers,setNumbers] = useRecoilState(numbersAtom)
    const [numberColors,setNumberColors] = useRecoilState(numberColorsAtom)

    return ( 
        <>
        <div className="absolute flex w-screen top-24 justify-center text-center">
        
            {
                numbers.map((number,i)=>{
                    if(i === currentInput){
                        return (
                            <div style={{backgroundColor:numberColors[i]}} className="flex  align-middle justify-center ml-2 h-15 w-15 border-spacing-1">
                                <p  className="text-3xl text-white " key={i} id={i}> _ </p>
                            </div>
                                )
                    }
                    else {
                        return (
                            <div style={{backgroundColor:numberColors[i]}} className="flex  align-middle justify-center ml-2 h-15 w-15 border-spacing-1">
                                <p  className="text-3xl text-white " id={i}> {number} </p>
                            </div>
                                )
                        }
                    
                })
            }
        </div>
        </>
    )
} 