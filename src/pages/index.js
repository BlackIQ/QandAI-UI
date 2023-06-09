import { useState } from "react";

import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";

import API from "@/api";
import { mode } from "@/theme";
import { Form } from "@/components";

export default function Home() {
  const [messages, setMessages] = useState([]);

  const predict = async (callback) => {
    const mes1 = { message: callback.question, who: "user" };

    try {
      const { data } = await API.post("predict", callback);

      const mes2 = { message: data.answer, who: "ai" };

      setMessages([...messages, mes1, mes2]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>QandAI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          w: "100%",
          mb: "7rem",
        }}
      >
        {messages.map((message, index) => {
          return (
            <Box
              key={`Mes-${message.who}-${index}`}
              sx={{
                backgroundColor:
                  message.who === "ai"
                    ? mode === "dark"
                      ? "#333"
                      : "#eee"
                    : mode === "dark"
                    ? "#222"
                    : "#ccc",
                p: 2,
              }}
            >
              <Container>
                <Box sx={{ mx: "1rem" }}>
                  <Typography
                    color={message.who === "user" ? "primary" : "info.main"}
                    variant="h6"
                    gutterBottom
                  >
                    {message.who === "user" ? "You" : "AI"}
                  </Typography>
                  <Typography variant="body1">{message.message}</Typography>
                </Box>
              </Container>
            </Box>
          );
        })}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(to top, ${
              mode === "dark" ? "#222" : "#ccc"
            }, ${mode === "dark" ? "#333" : "#eee"})`,
          }}
        >
          <Container
            sx={{
              my: "1rem",
            }}
          >
            <Form
              name="predict"
              style={{ color: "primary" }}
              callback={predict}
            />
          </Container>
        </Box>
      </Box>
    </>
  );
}
