import {
    Box,
    Pagination,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
  } from "@mui/material";
  import Grid from "@mui/material/Unstable_Grid2/Grid2";
  import React, { useEffect, useRef, useState } from "react";
  import { Button } from "@mui/material";
  import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
  import axios from "axios";
  import FilterSelect from "../../components/FilterSelect";
  import { PrinterListRow } from "./components/admin_ListRow";
  import { SearchBar } from "../../components/SearchBar";
  import User from "../../components/User";
  import usePagination from "../../hooks/usePagination";
  import './components/admin_list.css'

  const id = 'BK046';

  const colHeader = () => ({
    textAlign: "center",
    fontWeight: 700,
    fontSize: 25,
    color: "#023556",
  });
  
  export const Admin = () => {
    const checkFirstRender = useRef(true);
    const [initData, setInitData] = useState([]);
    const [isOpenModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!isOpenModal);
    }
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/machine")
        .then((response) => {
          setInitData(response.data.sort((a, b) => a.Code.localeCompare(b.Code)));
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const [search, setSearch] = useState("");
    const [content, setContent] = useState({
      venue: "",
      building: "",
      printerStatus: "",
    });
  
    const [rowNum, setRowNum] = useState(5);
  
    const [filteredData, setFilteredData] = useState([]);
    const [sort, setSort] = useState({ order: "DSC", col: "Code" });
  
    const { data, page, totalPages, setPage } = usePagination(
      filteredData,
      rowNum
    );
  
    useEffect(() => {
      setFilteredData(
        initData
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.printerName.toLowerCase().includes(search.toLowerCase()) ||
                  item.Code.toLowerCase().includes(search.toLowerCase());
          })
          .filter(
            (item) =>
              (item.venue === content.venue || !content.venue) &&
              (item.building === content.building || !content.building) &&
              (item.printerStatus === content.printerStatus ||
                !content.printerStatus)
          )
      );
      setPage(0);
    }, [search, content, initData]);
  
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
    console.log(filteredData);
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
                items={[...new Set(initData.map((item) => item.venue))]}
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
                          initData
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
                    : [
                        ...new Set(
                          initData
                            .filter((item) => item.venue === content.venue)
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
                items={[...new Set(initData.map((item) => item.printerStatus))]}
              ></FilterSelect>
            </Grid>
          </Grid>
          <Button
            onClick={toggleModal}
            style={
                {
                    backgroundColor: '#023556',
                    color: 'white',
                    width: 120,
                    height: 45,
                    fontSize: 20,
                    borderRadius: 15,
                    marginLeft: -950,
                }
            }
          >
            Thêm
            </Button>
            {isOpenModal&& (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <form>
                        <label>Thêm máy in</label>
                        <label>ID : {id}</label>
                        <label>Tên</label>
                        <input type="text" />
                        <label>Cơ sở</label>
                        <input type="text" />
                        <label>Tòa</label>
                        <input type="text" />
                        <label>Tầng</label>
                        <input type="number"/>
                        <label>Tình trạng</label>
                        <select>
                            <option>Bận</option>
                            <option>Đang Bảo Trì</option>
                            <option>Rảnh</option>
                            <option>Ít bận</option>
                        </select>
                        
                    </form>
                    <button onClick={toggleModal}>Đóng</button>
                    <button> Thêm</button>
                </div>
            </div>)}
          <SearchBar handleSearch={{ search, setSearch }}></SearchBar>
        </Grid>
        <Box className="table-container">
          <Box>
            <Grid container columns={11}>
              {[
                {
                  gridSize: 2,
                  headerName: "ID",
                  colName: "Code",
                },
                {
                  gridSize: 2,
                  headerName: "Tên",
                  colName: "printerName",
                },
                {
                  gridSize: 1,
                  headerName: "Cơ sở",
                  colName: "venue",
                },
                {
                  gridSize: 1,
                  headerName: "Tòa",
                  colName: "building",
                },
                {
                  gridSize: 1,
                  headerName: "Tầng",
                  colName: "floor",
                },
                {
                  gridSize: 2,
                  headerName: "Tình trạng",
                  colName: "printerStatus",
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
            return <PrinterListRow key={item._id} {...item}></PrinterListRow>;
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
  };
  