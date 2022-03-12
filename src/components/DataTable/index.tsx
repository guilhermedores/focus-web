import React from 'react';
import { Table } from 'antd';
import moment from 'moment'

export default function DataTable(props : any) {

  function defineTypes (type:string, text: string, record : any)
  {
    switch(type) {
      case 'date' : return moment(new Date(record.birthDate)).format('DD/MM/YYYY'); break;
      default : return text; break;
    }
  }

  function defineAlign (type:string, text: string)
  {
    switch(type) {
      case 'date' : return 'center'; break;
      default : return text; break;
    }
  }

  function defineSorter (type: string, key : string , obja:any, objb: any)
  {
    switch(type) {
      case 'date' : return (new Date(obja[key])) < (new Date(objb[key])); break;
      default : {
        if(obja[key] < objb[key]) { return -1; }
        if(obja[key] > objb[key]) { return 1; }
        return 0;
      } break;
    }
  }

  const mapColumns = props.columns.map((element: any) => {
       return {
           align : defineAlign(element.type, element.align),
           key : element.key,
           dataIndex : element.key,
           title : element.title,
           render : (text: string, record : any) => defineTypes(element.type, text, record),
           sorter : (a: any, b: any) => defineSorter(element.type, element.key, a , b)
         };
   });

  return (
    <>
      <Table dataSource={ props.dataSource } columns={ mapColumns } rowKey = { (record: any) => record.id } />
    </>
  )
}
