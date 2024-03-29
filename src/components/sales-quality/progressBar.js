"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({ name, value }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">{"Evaluation in: " + name}</Typography>
      <Rating name="read-only" value={value} readOnly max={10} />
    </Box>
  );
}
