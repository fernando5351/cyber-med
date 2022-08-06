import React from 'react'
import Style from "../../css/notFound.module.css"

const NotFound = () => {
    return (
        <div className={Style.container}>
            <div className={Style.content}>
                <h2 className={Style.err}>404</h2>
                <p className={Style.NotFound}>PAGE NOT FOUND</p>
            </div>
        </div>
    )
}

export default NotFound