import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import BasicDatatable from "./BasicDatatable";
import SimpleDataTable from "./SimpleDataTable";
import ProfileDatatable from "./ProfileDatatable";
import FeesCollection from "./FeesCollection";
import PatientTable from "./PatientTable";

const DataTable = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Mentori" motherMenu="Table" />
      <div className="row">
        <SimpleDataTable></SimpleDataTable>
      </div>
    </Fragment>
  );
};

export default DataTable;
