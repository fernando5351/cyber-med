import React from 'react'
import Style from "../../css/notFound.module.css"
import Img from "../../img/pageNotFound/Error404.png"

const NotFound = () => {
    return (
        <div className={Style.container}>
            <div className={Style.content}>
                <img className={Style.Img} src={Img} alt="Error 404....page not found" />
            </div>
        </div>
    )
}

export default NotFound