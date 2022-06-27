export default function TriedNumbers({colors,numbers}){
    numbers.map((number,i)=>{
        return (
            <div style={{backgroundColor:numberColors[i]}} className="flex  align-middle justify-center ml-2 h-15 w-15 border-spacing-1">
                <p  className="text-3xl text-white " id={i}> {number} </p>
            </div>
        )
    })
}