import React from 'react'
import s from './AddPostBlock.module.css'

interface IAddPostBlockProps {
    createPost: () => void
    onPostChange: (text: string) => void
    newPostText: string
}

const AddPostBlock: React.FC<IAddPostBlockProps> = ({
    createPost,
    onPostChange,
    newPostText,
}) => {
    const newPostElement = React.useRef(null)

    return (
        <section className={s.wrapper}>
            <input
                ref={newPostElement}
                value={newPostText}
                onChange={() => onPostChange(newPostElement.current.value)}
                type='text'
            />
            <button onClick={createPost}>send</button>
        </section>
    )
}

export default AddPostBlock
