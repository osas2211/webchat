import React, { useState, useEffect, useMemo } from "react"
import { Box, Button, Typography, TextField } from "@mui/material"
import { Logout, Message, Send } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { LogOut } from "../../features/chatRoom.tsx/user"

export interface MessageObject {
  userID: string
  message: string
  time: string
}

export const ChatRoom = () => {
  const dispatch = useDispatch()
  const userID = useSelector((state: RootState) => state.user.userID)
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages") as string)
  )
  const [message, setMessage] = useState("")
  const sendMsg = () => {
    // Renders message and adds message to local storage
    setMessages([...messages, { userID, message, time: Date() }])
    const msgs = JSON.parse(localStorage.getItem("messages") as string)
    msgs.push({ userID, message, time: Date() })
    localStorage.setItem("messages", JSON.stringify(msgs))
    setMessage("")
  }

  useEffect(() => {
    // REALTIME CHAT
    // Re-renders the component once local storage changes to get up to date messages
    window.addEventListener("storage", () => {
      setMessages(JSON.parse(localStorage.getItem("messages") as string))
    })
  }, [])

  return (
    <Box className="chat-room">
      {/* ==== HEADER ==== */}
      <header className="chat-room_header">
        <Typography variant="h6">
          WebChats - Chat Room <Message />
        </Typography>
        <Button
          startIcon={<Logout />}
          variant="contained"
          color="error"
          onClick={() => {
            dispatch({ type: LogOut.type })
          }}
        >
          Sign Out
        </Button>
      </header>

      {/* ==== MESSAGES ==== */}
      <Box className="messages">
        {messages &&
          messages.map((message: MessageObject) => {
            return (
              <div
                className={`message-box ${message.userID === userID && "user"}`}
                key={message.time}
              >
                <Typography>{message.message}</Typography>
                <div className="time">
                  <span style={{ display: "block" }}>@{message.userID}</span>
                  <span>{message.time}</span>
                </div>
              </div>
            )
          })}
      </Box>
      <div id="current"></div>

      {/* ==== SEND MESSAGE ==== */}
      <Box className="chat-room_sendMessage">
        <TextField
          placeholder="Enter Message"
          sx={{ width: "90%" }}
          multiline
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          startIcon={<Send />}
          sx={{ marginX: "3rem" }}
          variant={"contained"}
          onClick={sendMsg}
          href={"#current"}
          disabled={message === "" ? true : false}
        >
          send
        </Button>
      </Box>
    </Box>
  )
}
