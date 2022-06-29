import { useRecoilState } from 'recoil'
import { numbersAtom } from "../atoms/numbersAtom"
import { currentInputAtom } from "../atoms/CurrentInputAtom"
import { numberColorsAtom } from "../atoms/numberColorsAtom"
import { triedNumbersAtom } from '../atoms/triedNumbersAtom'

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { app, database } from '../firebaseConfig';

import { useEffect , useState} from 'react';

import { toast } from 'react-hot-toast'

export default function Numpad (){
    const [numbers,setNumbers] = useRecoilState(numbersAtom)
    const [currentInput,setCurrentInput] = useRecoilState(currentInputAtom)
    const [numberColors,setNumberColors] = useRecoilState(numberColorsAtom)
    const [triedNumbers,setTriedNumbers] = useRecoilState(triedNumbersAtom)
    const [todaysNumber,setTodaysNumber] = useState()

    const dbInstance = collection(database, 'numbers');
    const getToday = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        return today
    }
    const getTodaysNumber = () => {
        getDocs(dbInstance)
            .then((data) => {
                setTodaysNumber(data.docs.map(item=>{
                    console.log('DATABASE 👍')
                    return { ...item.data()}
                }))
            })
    }
    const keypad = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['0','<','enter']
    ]
    useEffect(()=>{
        getTodaysNumber()
    },[])
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
                                if(numbers.findIndex((element)=> element === '')=== -1){
                                    let newNumbers = [...numbers]
                                    newNumbers[2]=''
                                    setCurrentInput(2)
                                    setNumbers(newNumbers)
                                }
                                else{
                                    let newNumbers = [...numbers]
                                    const lastFilledValue = numbers.findIndex((element)=> element === '')-1
                                    newNumbers[lastFilledValue] = ''
                                    setCurrentInput(lastFilledValue)
                                    setNumbers(newNumbers)
                                }
                            }
                            else if (number === "enter") {
                                if (numbers[0]==='' || numbers[1]==='' || number[2]===''){
                                    toast.error('sayıda boşluk bulunamaz')
                                }

                                else  {

                                    const today = getToday()
                                    const parseTodaysNumber = Array.from(todaysNumber[0][today])
                                    var colors = ['','','']
                                    for(let i=0;i < 3;i++){
                                        if(numbers[i] === parseTodaysNumber[i]){
                                            colors[i]='green'
                                        }
                                        else if (parseTodaysNumber.findIndex((element)=> element === numbers[i])!== -1){
                                            colors[i]='#B59F3B' //yellow
                                        }
                                        else{
                                            colors[i]='gray'
                                        }
                                    }
                                    setNumberColors(colors)
                                    var triedNumber = [
                                        {
                                            number:'',
                                            color:''
                                        },
                                        {
                                            number:'',
                                            color:''
                                        },
                                        {
                                            number:'',
                                            color:''
                                        },
                                    ]
                                    for (let i=0;i<3;i++){
                                        triedNumber[i].number=numbers[i]
                                        triedNumber[i].color=colors[i]
                                    }
                                    setTriedNumbers([...triedNumbers,triedNumber])
                                    setNumberColors(['gray','gray','gray'])
                                    setNumbers(['','',''])
                                    setCurrentInput(0)
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