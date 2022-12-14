import React from 'react'
import s from './Login.module.css'
import { useForm } from 'react-hook-form'
import { checkAuthData, loginAuth } from '../../redux/slices/userSlice'
import { Button, ButtonType } from '../../components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const Login: React.FC = () => {
    const [valueLogin, setValueLogin] = React.useState<string>('')
    const [loginFocus, setLoginFocus] = React.useState<boolean>(false)
    const [valueRegister, setValueRegister] = React.useState<string>('')
    const [registerFocus, setRegisterFocus] = React.useState<boolean>(false)
    const dispatch = useAppDispatch()
    const asyncValidError = useAppSelector(state => state.user.validError)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
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
                    <span
                        className={`${s.placeHolder} ${
                            valueLogin || loginFocus ? s.activeHolder : ''
                        }`}
                    >
                        Login
                    </span>
                    <div>
                        <input
                            onFocus={() => setLoginFocus(true)}
                            className={`${s.input} ${
                                errors.email?.message && s.inputError
                            }`}
                            type={'text'}
                            {...register('email', {
                                required: 'Укажите email',
                                value: valueLogin,
                                onChange: e => setValueLogin(e.target.value),
                                onBlur: () => setLoginFocus(false),
                            })}
                        />
                    </div>
                    <p>{errors.email?.message ? errors.email?.message : ''}</p>
                </div>
                <div className={s.password}>
                    <span
                        className={`${s.placeHolder} ${
                            valueRegister || registerFocus ? s.activeHolder : ''
                        }`}
                    >
                        Password
                    </span>
                    <div>
                        <input
                            className={`${s.input} ${
                                errors.password?.message && s.inputError
                            }`}
                            onFocus={() => setRegisterFocus(true)}
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
                                value: valueRegister,
                                onChange: e => setValueRegister(e.target.value),
                                onBlur: () => setRegisterFocus(false),
                            })}
                        />
                        <p>{errors.password?.message || asyncValidError}</p>
                    </div>
                </div>
                <div className={s.remember}>
                    <input type={'checkbox'} {...register('rememberMe', {})} />
                    <label>remember</label>
                </div>
                <Button type={ButtonType.SUBMIT}>submit</Button>
            </form>
        </div>
    )
}

export default Login
