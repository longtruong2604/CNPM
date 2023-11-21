import React, { useEffect, useState } from "react";
// import Container from "@mui/material/Container";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import FilterSelect from "../../components/FilterSelect";
import { PrinterListRow } from "../../components/PrinterListRow";
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

export const PrinterList = () => {
  const [search, setSearch] = useState("");
  const [content, setContent] = React.useState({
    venue: "",
    building: "",
    printerStatus: "",
  });
  const [rowNum, setRowNum] = React.useState(5);

  const [filteredData, setFilteredData] = useState(MOCK_DATA);
  const { data, page, totalPages, setPage } = usePagination(
    filteredData,
    rowNum
  );

  useEffect(() => {
    setFilteredData(
      MOCK_DATA.filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.printerName.toLowerCase().includes(search.toLowerCase()) ||
              item.ID.toLowerCase().includes(search.toLowerCase());
      }).filter(
        (item) =>
          (item.venue === content.venue || !content.venue) &&
          (item.building === content.building || !content.building) &&
          (item.printerStatus === content.printerStatus ||
            !content.printerStatus)
      )
    );

    setPage(0);
  }, [search, content]);

  return (
    <Box className="content" margin={2}>
      <User size="small" />

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        mb={1}
      >
        <Grid container>
          <Grid>
            <FilterSelect
              id={"venue"}
              value={"Cơ sở"}
              handleFilter={{ content: content.venue, setContent }}
              items={[...new Set(MOCK_DATA.map((item) => item.venue))]}
            ></FilterSelect>
          </Grid>
          <Grid>
            <FilterSelect
              id={"building"}
              value={"Tòa"}
              handleFilter={{ content: content.building, setContent }}
              items={
                content.venue === ""
                  ? [
                      ...new Set(
                        MOCK_DATA.sort(function (a, b) {
                          if (a.building > b.building) {
                            return 1;
                          }
                          if (b.building > a.building) {
                            return -1;
                          }
                          return 0;
                        }).map((item) => item.building)
                      ),
                    ]
                  : [
                      ...new Set(
                        MOCK_DATA.filter((item) => item.venue === content.venue)
                          .sort(function (a, b) {
                            if (a.building > b.building) {
                              return 1;
                            }
                            if (b.building > a.building) {
                              return -1;
                            }
                            return 0;
                          })
                          .map((item) => item.building)
                      ),
                    ]
              }
            ></FilterSelect>
          </Grid>
          <Grid>
            <FilterSelect
              id={"printerStatus"}
              value={"Tình trạng"}
              handleFilter={{
                content: content.printerStatus,
                setContent,
              }}
              items={[...new Set(MOCK_DATA.map((item) => item.printerStatus))]}
            ></FilterSelect>
          </Grid>
        </Grid>
        <SearchBar handleSearch={{ search, setSearch }}></SearchBar>
      </Grid>
      <Box className="table-container">
        <Box>
          <Grid container>
            <Grid sx={colHeader} lg={2}>
              ID
            </Grid>
            <Grid sx={colHeader} lg={2}>
              Tên
            </Grid>
            <Grid sx={colHeader} lg={1}>
              Cơ sở
            </Grid>
            <Grid sx={colHeader} lg={1}>
              Tòa
            </Grid>
            <Grid sx={colHeader} lg={1}>
              Tầng
            </Grid>
            <Grid sx={colHeader} lg={3}>
              Tình trạng
            </Grid>
          </Grid>
        </Box>
        {data.map((item) => {
          return <PrinterListRow key={item.ID} {...item}></PrinterListRow>;
        })}
      </Box>
      <Box
        className="pagination-container"
        sx={{
          display: "flex",
          marginTop: 3,
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "65px" }}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">Rows/page</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rowNum}
              label="Age"
              onChange={(e) => setRowNum(e.target.value)}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            // width: "100%",
            display: "flex",
            alignItems: "end",
            paddingLeft: "20px",
            // justifyContent: "center",
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
};
