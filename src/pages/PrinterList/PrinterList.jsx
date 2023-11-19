import React, { useEffect, useState } from "react";
// import Container from "@mui/material/Container";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Pagination,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import CircleIcon from "@mui/icons-material/Circle";
import DescriptionIcon from "@mui/icons-material/Description";
import { green } from "@mui/material/colors";
import { PrinterListRow } from "../../components/PrinterListRow";
import { SearchBar } from "../../components/SearchBar";
import BasicSelect from "../../components/BasicSelect";
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

  const [filteredData, setFilteredData] = useState(MOCK_DATA);
  const { data, page, totalPages, setPage } = usePagination(filteredData);

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
      <Grid container spacing={1} className="user-info-container" mb={2}>
        <Grid lg="auto" sx={{}}>
          <Avatar
            sx={{
              height: "100%",
              width: 77.48,
              fontSize: 30,
              backgroundColor: "#E9F3F9",
              color: "#023556",
            }}
          >
            H
          </Avatar>
        </Grid>
        <Grid lg="auto">
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Trương Thành Long
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              <CircleIcon
                sx={{ fontSize: 10, color: green[500], marginRight: 1 }}
              />
              Khoa khoa học và kỹ thuật máy tính
            </Typography>
          </Box>
          <Box>
            <Chip
              size="small"
              icon={<DescriptionIcon sx={{ height: 17 }} />}
              label="100"
              sx={{
                fontWeight: 700,
                backgroundColor: "#E9F3F9",
                opacity: 0.82,
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider
        variant="middle"
        color="black"
        sx={{ height: 2.5, borderRadius: 2 }}
      />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mt={1}
        mb={1}
      >
        <Grid container>
          <Grid>
            <BasicSelect
              id={"venue"}
              value={"Cơ sở"}
              handleFilter={{ content: content.venue, setContent }}
              items={[...new Set(MOCK_DATA.map((item) => item.venue))]}
            ></BasicSelect>
          </Grid>
          <Grid>
            <BasicSelect
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
            ></BasicSelect>
          </Grid>
          <Grid>
            <BasicSelect
              id={"printerStatus"}
              value={"Tình trạng"}
              handleFilter={{
                content: content.printerStatus,
                setContent,
              }}
              items={[...new Set(MOCK_DATA.map((item) => item.printerStatus))]}
            ></BasicSelect>
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
        sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
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
  );
};