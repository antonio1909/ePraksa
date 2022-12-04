import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import ProfileDatatable from "./ProfileDatatable";

const DataTable = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Datatable" motherMenu="Table" />
      <div className="row">
        <ProfileDatatable></ProfileDatatable>
      </div>
    </Fragment>
  );
};

export default DataTable;
