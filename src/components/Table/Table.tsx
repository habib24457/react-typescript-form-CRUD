import react, { useState, useEffect } from "react";
import {
  DetailsList,
  SelectionMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { IListData } from "../Interfaces";
import MockData from "./Mock.json";
import "./Table.css";

const Table = () => {
  const defaultData: IListData = {
    id: 0,
    name: "",
    email: "",
    jobTitle: "",
    companyName: "",
    phone: "",
    city: "",
    modifiedDate: "",
  };
  const [tableData, setTableData] = useState<IListData[]>([]);

  console.log(MockData);

  useEffect(() => {
    //setTableData(MockData);
  }, []);

  const handleEditContact = (rowId: number) => {};

  const handleDeleteContact = (rowId: number) => {};

  const buildTableColumn = (): IColumn[] => {
    const columns: IColumn[] = [];

    columns.push({
      key: "name",
      minWidth: 50,
      maxWidth: 150,
      name: "name",
      isMultiline: true,
      onRenderHeader: () => {
        return <div>Name </div>;
      },
      onRender: (item: IListData) => {
        return item.name;
      },
    });

    columns.push({
      key: "Email",
      minWidth: 50,
      maxWidth: 150,
      name: "Email",
      isMultiline: true,
      onRenderHeader: () => {
        return <div>E-Mail</div>;
      },
      onRender: (item: IListData) => {
        return item.email;
      },
    });

    columns.push({
      key: "Company",
      minWidth: 50,
      maxWidth: 150,
      name: "Company",
      isMultiline: true,
      onRenderHeader: () => {
        return <div>Company</div>;
      },
      onRender: (item: IListData) => {
        return (
          <div>
            <p>{item.companyName}</p>
          </div>
        );
      },
    });

    columns.push({
      key: "Job",
      minWidth: 50,
      maxWidth: 200,
      name: "JobTitle",
      isMultiline: true,
      onRenderHeader: () => {
        return <div>Job Title</div>;
      },
      onRender: (item: IListData) => {
        return item.jobTitle;
      },
    });

    columns.push({
      key: "City",
      minWidth: 50,
      maxWidth: 150,
      name: "City",
      isMultiline: true,
      onRenderHeader: () => {
        return <div>City</div>;
      },
      onRender: (item: IListData) => {
        return item.city;
      },
    });

    columns.push({
      key: "LastEdited",
      minWidth: 50,
      maxWidth: 100,
      name: "modified",
      isMultiline: true,
      onRenderHeader: () => {
        return <div>Last Edited </div>;
      },
      onRender: (item: IListData) => {
        const date: any = new Date(item.modifiedDate).toLocaleDateString();
        return <div>{date}</div>;
      },
    });

    columns.push({
      key: "MoreOption",
      minWidth: 50,
      maxWidth: 100,
      name: "more",
      isMultiline: true,
      onRenderHeader: () => {
        return <div>More </div>;
      },
      onRender: (item: IListData) => {
        return (
          <div>
            <button
              onClick={() => handleEditContact(item.id)}
              className="btn-edit"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteContact(item.id)}
              className="btn-edit"
            >
              Delete
            </button>
          </div>
        );
      },
    });

    return columns;
  };

  return (
    <div className="container">
      <div className="top-section">
        <button className="btn-design">Add New User</button>
      </div>
      <div className="table-wrapper">
        <DetailsList
          selectionMode={SelectionMode.none}
          items={MockData}
          columns={buildTableColumn()}
        />
      </div>
    </div>
  );
};

export default Table;
