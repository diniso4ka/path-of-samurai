import s from './Preloader.module.css'

export const Preloader: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
