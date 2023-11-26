import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { FILE_STATUS, PRINTER_STATUS } from "../constants";
import dayjs from "dayjs";

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
    case "In xong":
      return FILE_STATUS.DONE;
    case "Đang in":
      return FILE_STATUS.PRINTING;
    case "Chưa in":
      return FILE_STATUS.PENDING;
    case "Chưa xác nhận":
      return FILE_STATUS.PROCESSING;
    default:
      break;
  }
};

export const FileListRow = ({
  id,
  fileName,
  uploadDate,
  fileType,
  fileSize,
  printerID,
  fileStatus,
}) => {
  return (
    <Grid
      container
      columns={14}
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
        {dayjs(uploadDate).format("DD/MM/YYYY")}
      </Grid>
      <Grid sx={item()} lg={2}>
        {id}
      </Grid>
      <Grid sx={item()} lg={2}>
        {fileName}
      </Grid>
      <Grid sx={item()} lg={2}>
        {fileType}
      </Grid>
      <Grid sx={item()} lg={2}>
        {fileSize}
      </Grid>
      <Grid sx={item()} lg={2}>
        {printerID}
      </Grid>
      <Grid sx={item({ color: statusColor(fileStatus) })} lg={2}>
        {fileStatus}
      </Grid>
    </Grid>
    // </Box>
  );
};
