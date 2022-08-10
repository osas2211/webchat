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

      <Box className="messages">
        <div className="message-box">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
        </div>
        <div className="message-box user">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
          <div className="time">
            <span>{Date()}</span>
          </div>
        </div>
        <div className="message-box">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
        </div>
        <div className="message-box">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
        </div>
        <div className="message-box user">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
          <div className="time">
            <span style={{ display: "block" }}>@osas2211</span>
            <span>{Date()}</span>
          </div>
        </div>
        <div className="message-box">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
        </div>
        <div className="message-box">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
        </div>
        <div className="message-box user">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
          <div className="time">
            <span>{Date()}</span>
          </div>
        </div>
        <div className="message-box">
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in,
            amet exercitationem minima aut maxime provident cumque{" "}
          </Typography>
        </div>
      </Box>

      <Box className="chat-room_sendMessage">
        <TextField
          placeholder="Enter Message"
          sx={{ width: "90%" }}
          multiline
        />
        <Button
          startIcon={<Send />}
          sx={{ marginX: "3rem" }}
          variant={"contained"}
        >
          send
        </Button>
      </Box>
    </Box>
  )
}
