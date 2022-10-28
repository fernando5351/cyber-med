import React from "react"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {

    if (sessionStorage.getItem("auth") === "true") {
        return children
    } else {
        return <Navigate to="/" />
    }

}