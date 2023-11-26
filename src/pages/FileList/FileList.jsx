import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Pagination,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { FileListRow } from "../../components/FileListRow";
import FilterSelect from "../../components/FilterSelect";
import { SearchBar } from "../../components/SearchBar";
import User from "../../components/User";
import usePagination from "../../hooks/usePagination";
import { MOCK_DATA } from "./MOCK_DATA";

const colHeader = () => ({
  textAlign: "center",
  fontWeight: 700,
  fontSize: 25,
  color: "#023556",
});

export default function FileList() {
  const [cleared, setCleared] = React.useState({ start: false, end: false });
  React.useEffect(() => {
    if (cleared.end) {
      const timeout = setTimeout(() => {
        setCleared({ ...cleared.prev, end: false });
      }, 1500);
      return () => clearTimeout(timeout);
    }
    if (cleared.start) {
      const timeout = setTimeout(() => {
        setCleared({ ...cleared.prev, start: false });
      }, 1500);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);
  const [search, setSearch] = useState("");
  const [content, setContent] = React.useState({
    startDate: "",
    endDate: "",
    fileType: "",
    fileStatus: "",
  });
  const [rowNum, setRowNum] = React.useState(5);

  const [filteredData, setFilteredData] = useState(
    [...MOCK_DATA].sort((a, b) => (a.uploadDate < b.uploadDate ? 1 : -1))
  );

  const [sort, setSort] = useState({ order: "ASC", col: "uploadDate" });

  const { data, page, totalPages, setPage } = usePagination(
    filteredData,
    rowNum
  );

  useEffect(() => {
    setFilteredData(
      filteredData
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.printerID.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase()) ||
                item.fileName.toLowerCase().includes(search.toLowerCase());
        })
        .filter(
          (item) =>
            (item.uploadDate >= content.startDate || !content.startDate) &&
            (item.uploadDate <= content.endDate || !content.endDate) &&
            (item.fileType === content.fileType || !content.fileType) &&
            (item.fileStatus === content.fileStatus || !content.fileStatus)
        )
    );

    setPage(0);
  }, [search, content]);

  const handleSort = (name) => {
    if (name === sort.col) {
      if (sort.order !== "DSC") {
        setFilteredData(
          [...filteredData].sort((a, b) => (a[name] > b[name] ? 1 : -1))
        );
        setSort((prev) => ({ ...prev, order: "DSC" }));
      } else {
        setFilteredData(
          [...filteredData].sort((a, b) => (a[name] < b[name] ? 1 : -1))
        );
        setSort((prev) => ({ ...prev, order: "ASC" }));
      }
    } else {
      setFilteredData(
        [...filteredData].sort((a, b) => (a[name] > b[name] ? 1 : -1))
      );
      setSort({ col: name, order: "DSC" });
    }
  };
  return (
    <Box className="content" padding={2}>
      <User size="small" />

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        mb={1}
      >
        <Grid container>
          <Grid padding={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày bắt đầu"
                format="DD/MM/YYYY"
                slotProps={{
                  textField: { size: "small" },
                  field: {
                    clearable: true,
                    onClear: () =>
                      setCleared((prev) => ({ ...prev, start: true })),
                  },
                }}
                sx={{
                  backgroundColor: "#E9F3F9",
                  width: "12rem",
                }}
                onChange={(e) => {
                  setContent((prev) => ({
                    ...prev,
                    startDate: e == null ? "" : dayjs(e).format("YYYY-MM-DD"),
                  }));
                  console.log(content);
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid padding={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày kết thúc"
                format="DD/MM/YYYY"
                slotProps={{
                  textField: { size: "small" },
                  field: {
                    clearable: true,
                    onClear: () => {
                      setCleared((prev) => ({ ...prev, end: true }));
                    },
                  },
                }}
                sx={{
                  backgroundColor: "#E9F3F9",
                  width: "12rem",
                }}
                onChange={(e) => {
                  setContent((prev) => ({
                    ...prev,
                    endDate: e == null ? "" : dayjs(e).format("YYYY-MM-DD"),
                  }));
                  console.log(content);
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid>
            <FilterSelect
              id={"fileType"}
              value={"Định dạng"}
              handleFilter={{ content: content.fileType, setContent }}
              items={
                content.venue === ""
                  ? [
                      ...new Set(
                        MOCK_DATA.sort(function (a, b) {
                          if (a.fileType > b.fileType) {
                            return 1;
                          }
                          if (b.fileType > a.fileType) {
                            return -1;
                          }
                          return 0;
                        }).map((item) => item.fileType)
                      ),
                    ]
                  : [
                      ...new Set(
                        MOCK_DATA.filter((item) => item.venue === content.venue)
                          .sort(function (a, b) {
                            if (a.fileType > b.fileType) {
                              return 1;
                            }
                            if (b.fileType > a.fileType) {
                              return -1;
                            }
                            return 0;
                          })
                          .map((item) => item.fileType)
                      ),
                    ]
              }
            ></FilterSelect>
          </Grid>
          <Grid>
            <FilterSelect
              id={"fileStatus"}
              value={"Tình trạng"}
              handleFilter={{
                content: content.fileStatus,
                setContent,
              }}
              items={[...new Set(MOCK_DATA.map((item) => item.fileStatus))]}
            ></FilterSelect>
          </Grid>
        </Grid>
        <SearchBar handleSearch={{ search, setSearch }}></SearchBar>
      </Grid>
      <Box className="table-container">
        <Box>
          <Grid container columns={14}>
            {[
              {
                gridSize: 2,
                headerName: "Ngày Upload",
                colName: "uploadDate",
              },
              {
                gridSize: 2,
                headerName: "ID",
                colName: "id",
              },
              {
                gridSize: 2,
                headerName: "Tên",
                colName: "fileName",
              },
              {
                gridSize: 2,
                headerName: "Định dạng",
                colName: "fileType",
              },
              {
                gridSize: 2,
                headerName: "Kích thước",
                colName: "fileSize",
              },
              {
                gridSize: 2,
                headerName: "ID máy in",
                colName: "printerID",
              },
              {
                gridSize: 2,
                headerName: "Tình trạng",
                colName: "fileStatus",
              },
            ].map((item) => (
              <Grid
                sx={colHeader}
                lg={item.gridSize}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    fontSize: "23px",
                    transform:
                      sort.col === item.colName
                        ? sort.order === "ASC"
                          ? "rotate(-90deg)"
                          : "rotate(90deg)"
                        : "",
                    transition: "transform 150ms ease",
                  }}
                  onClick={() => handleSort(item.colName)}
                />
                {item.headerName}
              </Grid>
            ))}
          </Grid>
        </Box>
        {data.map((item) => {
          return <FileListRow key={item.ID} {...item}></FileListRow>;
        })}
      </Box>
      <Box
        className="pagination-container"
        sx={{
          display: "flex",
          marginTop: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" pr={1}>
            Hàng/trang:
          </Typography>
          <ToggleButtonGroup
            value={rowNum}
            color="primary"
            exclusive
            onChange={(e, newValue) => {
              if (newValue !== null) setRowNum(newValue);
            }}
          >
            <ToggleButton sx={{ height: "2rem", width: "2rem" }} value={5}>
              5
            </ToggleButton>
            <ToggleButton sx={{ height: "2rem", width: "2rem" }} value={10}>
              10
            </ToggleButton>
            <ToggleButton sx={{ height: "2rem", width: "2rem" }} value={25}>
              25
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "50%",
            transform: "translate( 50%,0)",
          }}
        >
          <Pagination
            page={page + 1}
            count={totalPages}
            onChange={(event, value) => {
              setPage(value - 1);
            }}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
}
