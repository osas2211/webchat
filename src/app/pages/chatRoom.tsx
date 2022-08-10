import React from "react"
import { Box, Button, Typography, TextField } from "@mui/material"
import { Logout, Message, Send } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { LogOut } from "../../features/chatRoom.tsx/user"

export const ChatRoom = () => {
  const dispatch = useDispatch()
  return (
    <Box className="chat-room">
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
    </Box>
  )
}
