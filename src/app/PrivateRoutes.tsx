import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "./store"
import { Outlet, Navigate } from "react-router-dom"

export const PrivateRoutes = () => {
  const user = useSelector((state: RootState) => state.user)
  return user.userID ? <Outlet /> : <Navigate to="/" />
}
