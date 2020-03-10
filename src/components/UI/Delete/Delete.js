import React from 'react'
import styles from './Delete.module.css'

export default props =>(
    <svg 
        onClick={props.clicked} 
        className={styles.Delete} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 141 191"
    >
        <path d="M10.5,49.77H131c.09,1.91.26,3.67.26,5.43q0,63.19,0,126.4c0,8.16-1.44,9.59-9.66,9.59q-51.21,0-102.42,0c-7.45,0-9-1.43-9-8.62q0-64,0-127.91C10.19,53.15,10.37,51.68,10.5,49.77Zm38.34,70.37c0-15.65-.12-31.31.09-47,0-4-1.3-5.53-5.16-5.11a22.94,22.94,0,0,1-2.49,0c-6.94,0-6.94,0-6.94,6.68q0,44.47,0,88.94c0,9.27-1.25,8.81,8.82,9,4.28.07,5.83-1.08,5.76-5.6C48.67,151.46,48.83,135.8,48.84,120.14Zm29.05,0c0-15.66-.13-31.31.09-47,.06-4-1.37-5.47-5.15-5.11-.83.08-1.67,0-2.5,0-6.88.09-6.9.09-6.9,6.75q0,44.22,0,88.43c0,10.56-1,9.11,9.33,9.44,3.87.13,5.26-1.14,5.21-5.13C77.78,151.76,77.89,135.93,77.89,120.12Zm14.61.55h0c0,15.48,0,31,0,46.45,0,1.58.37,4.45.88,4.53a44.79,44.79,0,0,0,11.72.44c.86-.11,1.79-3.83,1.8-5.89.12-29.63.09-59.27.08-88.9,0-9.55,0-9.42-9.46-9.31-3.81.05-5.2,1.27-5.15,5.23C92.61,89,92.5,104.85,92.5,120.67Z"/>
        <path d="M.73,38a7.68,7.68,0,0,1-.52-1.48C-.31,23.12-1,14.44,19.65,15.62c8.63.5,17.31.05,26,0a9.16,9.16,0,0,0,1.59-.4c.11-2.21.21-4.63.36-7,.34-5.26,3.25-8.37,8.51-8.45,9.65-.17,19.31-.16,29,0,5.51.07,8.52,3.23,8.75,8.74.08,2.13,0,4.27,0,7.25H102c8.82,0,17.65,0,26.47,0,8.18,0,12.23,3.93,12.6,12.16.15,3.29,0,6.58,0,10.17Z"/>
    </svg>
)