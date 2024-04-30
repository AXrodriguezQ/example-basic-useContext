import { useContext } from "react"
import { counterContext } from "../context/counterContext"

const Footer = () => {

    const { reset } = useContext(counterContext)

  return (
    <div>
        <button onClick={() => reset()}>reset</button>
    </div>
  )
}

export default Footer