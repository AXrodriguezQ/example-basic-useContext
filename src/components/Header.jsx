import { useContext } from "react"
import { counterContext } from "../context/counterContext"

const Header = () => {

    const { counter, increment } = useContext(counterContext)

    return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => increment()}>Increment</button>
    </div>
  )
}

export default Header