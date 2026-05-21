import styles from "./keyboard.module.css"


const KEYS = [
  "a","ä","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","ö","p","q","r","s","t",
  "u","ü","v","w","x","y","z"
]


type keyboardProps={
    disabled?: boolean
    activeLetters:string[]
    inactiveLetters:string[]
    addGuessedLetter:(letter:string)=>void
}

export function Keyboard({
    activeLetters,
    disabled = false,
    inactiveLetters,
    addGuessedLetter
}:keyboardProps) {
    
return (
<div
style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit , minmax(70px,1fr))",
    gap:".5em",

}}
>
{
    KEYS.map(key=>{

  const isActive = activeLetters.includes(key)
  const isInactive = inactiveLetters.includes(key)
        return (
        
        <button onClick={()=> addGuessedLetter(key)}
        
         className={`${styles.btn} ${isActive ? styles.active : "" } 
                                   ${isInactive ? styles.inactive : ""}
         
         `}
       
           disabled={isInactive || isActive || disabled}


       
          key={key}
          >
            {key}
        </button>
        )
    })}



</div>
)
}