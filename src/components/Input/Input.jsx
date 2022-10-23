import s from './Input.module.css'
const Input = ({ error, helperText, register, ...otherProps }) => {
    console.log(register)
    return (
        <>
            <input register={register} className={error ? s.error : ''} />
            <label>{helperText}</label>
        </>
    )
}

export default Input
