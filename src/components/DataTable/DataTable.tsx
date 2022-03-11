import React from 'react';
import { Table } from 'antd';
import TableColumn from './TableColumn'
import { ColumnsType } from 'antd/lib/table';

interface DataTableProps{
  dataSource: any,
  column : TableColumn[]
}

export default function DataTable({ dataSource, column } : DataTableProps ) {

  const mapColumns = column.map((element : TableColumn) => {
      return { 
          align : element.align ,
          key : element.key,
          title : element.key
        };
  });

  return (
    <>
      <Table dataSource={ dataSource } columns={ mapColumns } />;
    </>
  );
}
