import React from 'react'
import styles from './AddProject.module.css'
import Button from '../UI/Button/Button'

export default props =>{
    const [title, setTitle] = React.useState('')
    const [description, setdescription] = React.useState('')
    const [color, setColor] = React.useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit} className={styles.AddProject}>
            <input className={styles.title} type="text" placeholder="Your new Project Title"></input>
            <textarea placeholder="description"></textarea>
            <div className={styles.fieldColor}>
                <div className={styles.colorPreview}>
                    <p>Icon Preview</p>
                </div>
                <input type="text" placeholder="Color"></input>
            </div>
            <Button>Create</Button>
        </form>
    )
}