import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { PRINTER_STATUS } from "../../../constants";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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
  setInitData,
  initData,
  _id,
  Code,
  printerName,
  venue,
  floor,
  printerStatus,
  building,
}) => {
  const [open, setOpen] = useState(false);

  const handleUpdatePrinter = () => {
    axios
      .put(`http://localhost:5000/api/machine/${Code}`, input)
      .then((response) => {
        console.log(response.data);
        // setInitData((prev) => [...prev, response.data]);
        let arr = initData;
        for (let i = 0; i < initData.length; i++) {
          if (arr[i].Code === Code) {
            arr[i] = response.data;
          }
        }
        console.log(arr);
        setInitData([...arr]);
      })
      .catch((error) => {
        console.error(error);
      });

    handleClose();
  };
  const handleOpen = () => {
    console.log(1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };
  const [input, setInput] = useState({
    Code: Code,
    printerName: printerName,
    venue: venue,
    floor: floor,
    printerStatus: printerStatus,
    building: building,
  });

  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeletePrinter = async () => {
    await axios
      .delete(`http://localhost:5000/api/machine/${Code}`)
      .then((res) => {
        console.log(res.data);
        setInitData(initData.filter((item) => item.Code !== Code));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Grid
      container
      columns={11}
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
        {Code}
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
      <Grid sx={item({ color: statusColor(printerStatus) })} lg={2}>
        {printerStatus}
      </Grid>
      <Grid sx={item()} lg={2}>
        {/* <Link to="/app/student"> */}
        <Button
          sx={item({
            backgroundColor: "#023556",
            color: "#FFFFFF",
            borderRadius: 3,
            textTransform: "capitalize",
            paddingLeft: 2,
            paddingRight: 2,
            marginRight: 4,
            backgroundColor: "red",
          })}
          onClick={handleDeletePrinter}
        >
          Xóa
        </Button>
        <Button
          sx={item({
            backgroundColor: "#023556",
            color: "#FFFFFF",
            borderRadius: 3,
            textTransform: "capitalize",
            paddingLeft: 2,
            paddingRight: 2,
            backgroundColor: "green",
          })}
          onClick={handleOpen}
        >
          Chỉnh Sửa
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <Typography variant="h4">Chỉnh sửa thông tin máy in</Typography>
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </DialogContentText> */}
            <Grid container spacing={2}>
              {[
                {
                  label: "ID",
                  gridSize: 12,
                  defaultValue: Code,
                  name: "Code",
                },
                {
                  label: "Tên",
                  gridSize: 12,
                  defaultValue: printerName,
                  name: "printerName",
                },
                {
                  label: "Cơ sở",
                  gridSize: 12,
                  defaultValue: venue,
                  name: "venue",
                },
                {
                  label: "Tòa",
                  gridSize: 12,
                  defaultValue: building,
                  name: "building",
                },
                {
                  label: "Tầng",
                  gridSize: 12,
                  defaultValue: floor,
                  name: "floor",
                },
                // ,
                // {
                //   label: "Tình trạng",
                //   gridSize: 12,
                //   type: "printerStatus",
                // },
              ].map((item) => (
                <Grid xs={item.gridSize}>
                  <TextField
                    required
                    autoFocus
                    margin="dense"
                    onChange={handleTextFieldChange}
                    id="name"
                    label={item.label}
                    defaultValue={item.defaultValue}
                    name={item.name}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              ))}
              <Grid xs={12}>
                <TextField
                  required
                  autoFocus
                  onChange={handleTextFieldChange}
                  select
                  margin="dense"
                  id="name"
                  label="Tình trạng"
                  name="printerStatus"
                  fullWidth
                  variant="outlined"
                  defaultValue={printerStatus}
                >
                  {[
                    { value: "Rảnh", label: "Rảnh" },
                    { value: "Ít bận", label: "Ít bận" },
                    { value: "Bận", label: "Bận" },
                    { value: "Đang bảo trì", label: "Đang bảo trì" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Hủy</Button>
            <Button onClick={handleUpdatePrinter}>Áp dụng</Button>
          </DialogActions>
        </Dialog>
        {/* </Link> */}
      </Grid>
    </Grid>
    // </Box>
  );
};
