import React from "react"
import { createSlice } from "@reduxjs/toolkit"

export interface MessageObject {
  userID: string
  message: string
  time: string
}

export const chatRoom = createSlice({
  name: "chatRoom",
  //initialState is set to the messages already stored in Local Storage
  initialState: JSON.parse(
    localStorage.getItem("messages") as string
  ) as Array<MessageObject>,
  reducers: {
    sendMesssage: (state, action) => {
      const { userID, message, time }: MessageObject = action.payload
      state.push({ userID, message, time })
      localStorage.setItem("messages", JSON.stringify(state))
    },
  },
})

export const { sendMesssage } = chatRoom.actions
export const chatRoomReducer = chatRoom.reducer
