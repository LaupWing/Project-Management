import React from 'react'
import styles from './AddProject.module.css'
import Button from '../UI/Button/Button'

export default props =>{
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [color, setColor] = React.useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit} className={styles.AddProject}>
            <input 
                className={styles.title} 
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)} 
                placeholder="Your new Project Title"
            ></input>
            <textarea 
                placeholder="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
            <div 
                className={styles.fieldColor}
                value={color}
                onChange={(e)=>setColor(e.target.value)}
            >
                <div className={styles.colorPreview}>
                    <p>Icon Preview</p>
                </div>
                <input type="text" placeholder="Color"></input>
            </div>
            <Button>Create</Button>
        </form>
    )
}