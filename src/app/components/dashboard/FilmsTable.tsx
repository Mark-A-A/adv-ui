import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import TableSW from "../table/TableSW";
import { useFilmsTableData } from "../../hooks/useSWFilms";

type Film = {
  title: string;
  episode_id: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
};

export default function FilmsTable() {
  const { headers: headers, rows, loading } = useFilmsTableData();

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableSW headers={headers} rows={rows} />
      )}
    </>
  );
}
