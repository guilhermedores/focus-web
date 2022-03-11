type Align = "Left" | "Right" | "Center";

interface TableColumn {
  align : Align,
  key : string,
  title : string
}

export default TableColumn;