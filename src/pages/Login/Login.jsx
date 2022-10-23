import React from 'react'
import s from './Login.module.css'
import { useForm } from 'react-hook-form'
import Input from '../../components/Input/Input'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
        },
        mode: 'onSubmit',
    })

    const onSubmit = values => {
        console.log({ ...values, user: 'denis' })
        console.log({ ...register() })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <div>
                <div>
                    <input
                        error={Boolean(errors.login?.message)}
                        helperText={errors.login?.message}
                        placeholder={'login'}
                        type={'text'}
                        {...register('login', {
                            required: 'Укажите логин',
                            minLength: {
                                value: 4,
                                message:
                                    'Логин должен содержать от 4 до 14 символов.',
                            },
                            maxLength: {
                                value: 14,
                                message:
                                    'Логин должен содержать от 4 до 14 символов.',
                            },
                        })}
                    />
                    <label>Login</label>
                </div>
                <p>{errors.login?.message ? errors.login?.message : ''}</p>
            </div>
            <div>
                <div>
                    <input
                        placeholder={'password'}
                        type={'text'}
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
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
                    <label>Password</label>
                    <p>
                        {errors.password?.message
                            ? errors.password?.message
                            : ''}
                    </p>
                </div>
            </div>
            <div>
                <input type={'checkbox'} {...register('remember', {})} />
                <label>remember</label>
            </div>
            <button type='submit'>submit</button>
        </form>
    )
}

export default Login
