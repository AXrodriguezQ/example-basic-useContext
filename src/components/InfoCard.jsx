import { useContext } from "react"
import { counterContext } from "../context/counterContext"

const InfoCard = () => {

  const { counter } = useContext(counterContext)

  return (
    <div>{counter}</div>
  )
}

export default InfoCard