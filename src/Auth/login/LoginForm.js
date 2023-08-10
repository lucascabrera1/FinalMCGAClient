import { useState } from "react";
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Input from "../../Components/Common/Input";
import Button from "../../Components/Common/Button";
import styles from '../../Components/style.module.css'
import { login } from "../../feautures/users/authSlice";

const Login = () =>{

    const {register, handleSubmit, formState : {errors}} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errMsg, setErrMsg] = useState('')

    const SubmitUser = async (user) => {
        console.log(user)
        const userData = await dispatch(login(user)).unwrap()
        console.log(userData)
        if (userData) {
            navigate("/home")
        } else {
            setErrMsg("Credenciales inválidas")

        }
    }
    
    return (
        <form onSubmit={handleSubmit(SubmitUser)}>
            <p className="error">{errMsg}</p>
            <Input
                type='email'
                name='email' 
                label='Correo Electrónico'
                register={register}
                registerOptions= {{
                    required: true
                }}
                errors= {errors}
                optionMsgErrors={{
                    required: "el correo electrónico es obligatorio"
                }}
            />
            <Input
                type='password'
                name='contraseña'
                label='contraseña'
                register={register}
                registerOptions= {{
                    required: true, minLength: 6
                }}
                errors= {errors}
                optionMsgErrors={{
                    required: "la contraseña es requerida",
                    minLength: "minimo 6 caracteres",
                }}
            />
            <Button 
                type="submit"
                className={`${styles.bgindigo600} ${styles.py1} ${styles.px2}`}>
            Iniciar Sesión </Button>
        </form>
    )
}

export default Login;