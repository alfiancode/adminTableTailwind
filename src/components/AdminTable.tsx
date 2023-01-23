import React from "react";
import companyData from "../data/company_data.json";
import Header from "./Header";
import ProjectRow from "./ProjectRow";
const AdminTable = () => {
  const { adminCategories } = companyData;

  return (
    <div>
      <Header />
      <table className="table-fixed">
        <thead>
          <tr>
            <th className=" font-medium text-sm text-[#7657cb] border-y-2 border-b-[#cbdae2] min-w-[236px]"></th>
            {adminCategories.map((data, index) => (
              <th
                className=" font-medium text-sm text-[#7657cb] border-y-2 border-b-[#cbdae2] min-w-[236px] py-3 font-nostromo leading-[19px] tracking-wider"
                key={index}
              >
                <div>{data.title.toUpperCase()}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <ProjectRow />
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
