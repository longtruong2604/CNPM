import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { PRINTER_STATUS } from "../constants";

const item = (additionalStyles = {}) => ({
  textAlign: "center",
  fontSize: 20,
  fontWeight: 500,
  ...additionalStyles,
});

const statusColor = (status) => {
  switch (status) {
    case "Bận":
      return PRINTER_STATUS.BUSY;
    case "Ít bận":
      return PRINTER_STATUS.QUITE_BUSY;
    case "Rảnh":
      return PRINTER_STATUS.IDLE;
    case "Đang bảo trì":
      return PRINTER_STATUS.DOWNED;
    default:
      break;
  }
};

export const PrinterListRow = ({
  ID,
  printerName,
  venue,
  building,
  floor,
  printerStatus,
}) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#E9F3F9",
        opacity: 0.82,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        color: "#023556",
        height: 60,
        marginTop: 2,
      }}
    >
      <Grid sx={item()} lg={2}>
        {ID}
      </Grid>
      <Grid sx={item()} lg={2}>
        {printerName}
      </Grid>
      <Grid sx={item()} lg={1}>
        {venue}
      </Grid>
      <Grid sx={item()} lg={1}>
        {building}
      </Grid>
      <Grid sx={item()} lg={1}>
        {floor}
      </Grid>
      <Grid sx={item({ color: statusColor(printerStatus) })} lg={3}>
        {printerStatus}
      </Grid>
      <Grid sx={item()} lg={2}>
        <Button
          sx={item({
            backgroundColor: "#023556",
            color: "#FFFFFF",
            borderRadius: 3,
            textTransform: "capitalize",
            paddingLeft: 2,
            paddingRight: 2,
          })}
        >
          Chọn
        </Button>
      </Grid>
    </Grid>
    // </Box>
  );
};
