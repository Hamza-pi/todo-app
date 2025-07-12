import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Checkbox, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const columns: GridColDef[] = [
  { field: "title", headerName: "Title" },
  { field: "description", headerName: "Description" },
  {
    field: "completed",
    headerName: "Completed",
    type: "boolean",
    renderCell: (params) => (
      <Checkbox
        checked={params.value}
        onChange={(e) => console.log(params.value)}
      />
    ),
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
  },
  {
    field: "id",
    type: "actions",
    renderCell: () => {
      return (
        <div>
          <IconButton color="success">
            <Edit />
          </IconButton>
          <IconButton color="error">
            <Delete />
          </IconButton>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    title: "Snow",
    description: "Jon",
    completed: false,
    date: new Date(),
  },
  {
    id: 2,
    title: "Snow",
    description: "Jon",
    completed: true,
    date: new Date(),
  },
  {
    id: 3,
    title: "Snow",
    description: "Jon",
    completed: false,
    date: new Date(),
  },
  {
    id: 4,
    title: "Snow",
    description: "Jon",
    completed: true,
    date: new Date(),
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const TaskList = () => {
  return (
    <Paper sx={{ margin: "1rem" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
      />
    </Paper>
  );
};
export default TaskList;
