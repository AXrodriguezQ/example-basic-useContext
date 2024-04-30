import { useContext } from "react"
import { counterContext } from "../context/counterContext"

const TopBar = () => {

  const { decrement } = useContext(counterContext)

  return (
    <div>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  )
}

export default TopBar