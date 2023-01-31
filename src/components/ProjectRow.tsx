import React from "react";
import projectData from "../data/project_data.json";
import companyData from "../data/company_data.json";
import PermitCard from "./PermitCard";

const ProjectRow = () => {
  const { adminCategories } = companyData;
  const { results } = projectData;
  return (
    <>
      {results.map((result) => {
        return (
          <tr className="p-0" key={result.projectId}>
            <td className="p-0">
              <div className="min-h-[302px] flex items-center justify-center border-[1px] border-t-0 font-ibmsans text-[#272A43] text-[14px] leading-[18px] font-normal">
                {result.siteAddress}
              </div>
            </td>
            {adminCategories.map((data, index) => {
              const cell = result.permits.find(
                (e) => e.adminCategoryId == data.categoryId
              );
              if (cell) {
                return (
                  <td className="p-0" key={index}>
                    <PermitCard permit={cell} />
                  </td>
                );
              }
              return (
                <td className="p-0" key={index}>
                  <div className="min-h-[302px] flex items-center justify-center border-b-[1px] border-r-[1px] "></div>
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default ProjectRow;
