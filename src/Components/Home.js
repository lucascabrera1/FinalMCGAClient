import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../feautures/users/authSlice'

function Home() {
  const user = useSelector(selectCurrentUser)
  console.log(user)
  let mensaje = ""
  if (user) {
    mensaje = <p style={{
      backgroundColor: 'green', color:'blanchedalmond'
    }}>bienvenido {`${user.nombre }  ${user.apellido}`}</p>
  }
  return (
    <div>
        <h1>Examen Final</h1>
        <h2>Modelos Computacionales de Gestión Administrativa</h2>
        <h2>Lucas Gabriel Cabrera</h2>
        <h3>Para rendir en el segundo llamado de la mesa de Agosto 2023</h3>
        <Link to='/users'>Ir a la gestión de usuarios</Link>
        {mensaje}
    </div>
  )
}

export default Home