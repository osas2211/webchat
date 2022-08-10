import React, { useState, FormEvent } from "react"
import { Button, TextField, Box, Typography, Container } from "@mui/material"
import { Login } from "@mui/icons-material"
import chatSvg from "../assets/svgs/chat.svg"
import { useDispatch } from "react-redux"
import { Join as JoinChat } from "../../features/chatRoom.tsx/user"
import { useNavigate } from "react-router-dom"

export const Join = () => {
  const [userID, setUserID] = useState<string>("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch({ type: JoinChat.type, payload: { userID: userID.toLowerCase() } })
    navigate("/chat-room")
  }
  return (
    <Container>
      <Box sx={{ marginTop: 20 }}>
        <Typography variant="h4" color={"#2E294E"}>
          Join The Chat Room
        </Typography>
        <Typography variant="button">
          If it is your first time, You'll be added to the chat room.
        </Typography>

        <form style={{ marginTop: "2.5rem" }} onSubmit={onSubmit}>
          <TextField
            placeholder="Enter user ID"
            focused
            label="UserID"
            value={userID}
            onChange={(e) => {
              setUserID(e.target.value)
            }}
          />
          <div style={{ marginTop: "0.7rem" }}>
            <Button startIcon={<Login />} variant="contained" type="submit">
              Join
            </Button>
          </div>
        </form>
      </Box>

      <div className="side">
        <img src={chatSvg} alt="Chat Room" />
      </div>
    </Container>
  )
}
