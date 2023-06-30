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

type FilmsProps = {
  headers: any;
  rows: Film[];
  loading: boolean;
  error: any;
};
function FilmsHOC({ headers, rows, loading, error }: FilmsProps) {
  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  } else if (error) {
    return <Box sx={{ display: "flex" }}>Oops! Something went wrong</Box>;
  }
  return <TableSW headers={headers} rows={rows} />;
}

export default function FilmsTable() {
  const props = useFilmsTableData();

  return (
    <>
      <FilmsHOC {...props} />
    </>
  );
}
