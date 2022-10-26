import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function Chat() {
  return (
    <>
      <div className="container ">
        <Nav />

        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image="https://4.bp.blogspot.com/-AIm3M0P0Jhg/XKuhScwpL5I/AAAAAAAABM4/lfw3eh9M6TYGW_v_HNKPLAHdLH17WaalACK4BGAYYCw/s640/21751545_483022865404106_5351177888604965062_n.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fundación
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fundación ayudando a los niños con cancer sin animo de lucro
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
