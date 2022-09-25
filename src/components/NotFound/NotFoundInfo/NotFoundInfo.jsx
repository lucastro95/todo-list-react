import { NavLink } from "react-router-dom"
import { NotFoundInfoStyle } from "./NotFoundInfoStyle"


const NotFoundInfo = () => {
  return (
    <NotFoundInfoStyle>
        <h3>¡Oooops!</h3>
        <p>Parece que te has perdido. ¡Dejanos ayudarte!</p>
        <button><NavLink to="/">Regresar</NavLink></button>
    </NotFoundInfoStyle>
  )
}

export default NotFoundInfo