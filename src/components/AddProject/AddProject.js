import React from 'react'
import styles from './AddProject.module.css'
import Button from '../UI/Button/Button'
import Color from 'color'

export default props =>{
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [color, setColor] = React.useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
    }
    const abbreviation = (name)=>{
        return name.includes(' ') ? name
            .split(' ')
            .map(word=>word[0])
            .join(' ')
            : name[0]
    }
    const createBG = (hex) =>{
        const color = Color(hex)
        const randomGrade = Math.floor(Math.random() * 360) + 1
        setBgState(color.hex())
        setBgGradientState(`linear-gradient(${randomGrade}deg, ${color.hsl().hex()} 0%, ${color.hsl().rotate(-30).hex()} 100%)`)
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
                    {title === '' || color === '' 
                        ?   <p>Icon Preview</p>
                        :   <div>
                                <p>{abbreviation(title)}</p>
                            </div>
                    }
                </div>
                <input type="text" placeholder="Color"></input>
            </div>
            <Button>Create</Button>
        </form>
    )
}