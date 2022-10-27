import React from 'react'
import s from './Login.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { checkAuthData, loginAuth } from '../../redux/slices/userSlice'
import { Button } from '../../components/Button/Button'

const Login = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onSubmit',
    })

    const onSubmit = async values => {
        await dispatch(loginAuth({ ...values }))
        await dispatch(checkAuthData())
    }

    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <div className={s.login}>
                    <label className={`${s.placeHolder} ${s.activeHolder}`}>
                        Login
                    </label>
                    <div>
                        <input
                            className={`${s.input} ${
                                errors.email?.message && s.inputError
                            }`}
                            type={'text'}
                            {...register('email', {
                                required: 'Укажите email',
                            })}
                        />
                    </div>
                    <p>{errors.email?.message ? errors.email?.message : ''}</p>
                </div>
                <div className={s.password}>
                    <label className={`${s.placeHolder} ${s.activeHolder}`}>
                        Password
                    </label>
                    <div>
                        <input
                            className={`${s.input} ${
                                errors.password?.message && s.inputError
                            }`}
                            type={'text'}
                            {...register('password', {
                                required: 'Укажите пароль',
                                minLength: {
                                    value: 4,
                                    message:
                                        'Пароль должен содержать от 4 до 14 символов.',
                                },
                                maxLength: {
                                    value: 14,
                                    message:
                                        'Пароль должен содержать от 4 до 14 символов.',
                                },
                            })}
                        />

                        <p>{errors.password?.message}</p>
                    </div>
                </div>
                <div>
                    <input type={'checkbox'} {...register('rememberMe', {})} />
                    <label>remember</label>
                </div>
                <Button type={'submit'}>submit</Button>
            </form>
        </div>
    )
}

export default Login
