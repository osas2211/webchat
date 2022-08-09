import React from "react"
import { Button, TextField, Box, Typography, Container } from "@mui/material"
import { Login } from "@mui/icons-material"
import chatSvg from "../assets/svgs/chat.svg"

export const Join = () => {
  return (
    <Container>
      <Box sx={{ marginTop: 20 }}>
        <Typography variant="h4" color={"#2E294E"}>
          Join The Chat Room
        </Typography>
        <Typography variant="button">
          If it is your first time, You'll be added to the chat room.
        </Typography>

        <form style={{ marginTop: "2.5rem" }}>
          <TextField placeholder="Enter user ID" focused label="UserID" />
          <div style={{ marginTop: "0.7rem" }}>
            <Button startIcon={<Login />} variant="contained">
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
