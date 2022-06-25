export default function Numpad (){
    const keypad = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['0','','<']
    ]
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
                        <button className="btn btn-primary rounded-full  ml-1 mt-1 h-16 w-16 ">{number}</button>
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