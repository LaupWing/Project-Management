import React from 'react'
import styles from './Detail.module.css'

export default props =>{
    return(
        <div className={styles.Detail}>
            <nav>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 26">
                    <g>
                        <polygon points="46 6.73 22.93 6.73 22.93 0 0 13 22.93 26 22.93 19.27 46 19.27 46 6.73"/>
                    </g>
                </svg>
            </nav>
            <div className={styles.content}>
                <h2>{props.project.name}</h2>
                <p>{props.project.description}</p>
                <div className={styles.today}>
                    <div className={styles.info}>
                        <h3>Today</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}