import React, { useEffect, useState } from "react";
import dateFormater from "../utils/dateFormater";
import makeBold from "../utils/makeBold";
import removeAsterisks from "../utils/removeAsterik";
import parse from "html-react-parser";
import dateBold from "../utils/dateBold";
import projectData from "../data/project_data.json";
interface Props {
  permit: typeof projectData["results"][0]["permits"][0];
}
const PermitCard = ({ permit }: Props) => {
  const { status, comments } = permit;
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    if (permit.status === "P") {
      setIsRed(true);
    }
  }, [permit.status]);
  let stylePermitCard = {
    bgColor: "",
    commentColor: "",
    colorBase: "",
    titleColor: "",
  };
  const layoutPermitCard =
    "w-[173px] h-[204px] px-[13px] flex flex-col rounded-md ";
  if (status === "D") {
    stylePermitCard = {
      bgColor: "#7949FF",
      commentColor: "white",
      colorBase: "",
      titleColor: "",
    };
  } else if (status == "W") {
    stylePermitCard = {
      bgColor: "bg-[#ffc14a] " + layoutPermitCard,
      commentColor: "white",
      colorBase: "text-[#624714]",
      titleColor: "text-[#BC8A2C]",
    };
  } else if (status == "C") {
    stylePermitCard = {
      bgColor: "bg-[#34d6ab]  " + layoutPermitCard,
      commentColor: "text-white",
      colorBase: "text-[#117B5F]",
      titleColor: "text-[#117B5F]",
    };
  } else if (status == "P") {
    stylePermitCard = {
      bgColor: "bg-[#df2f2f]  " + layoutPermitCard,
      commentColor: "white",
      colorBase: "text-white",
      titleColor: "text-[#7D0303]",
    };
  }

  return (
    <div className="h-[302px] flex flex-col items-center justify-center border-b-[1px] border-r-[1px]  ">
      <div className={stylePermitCard.bgColor}>
        {comments.length > 0 ? (
          <>
            {isRed ? (
              <div className="relative ">
                <div className="absolute right-0 top-2 ">
                  <img src="commentAlert.png" alt="alert.png" />
                </div>
                <div className="">
                  <p className="text-[6px] text-white w-[72px] p-[1px] bg-[#ff6a6a] absolute -right-16 -top-4 rounded-sm ">
                    Please ensure you apply for building and demo
                  </p>
                </div>
              </div>
            ) : null}
            <div className="mt-[26px] ml-[px] z-50 overflow-y-auto overflow-x-clip">
              <div
                className={`${stylePermitCard.titleColor} text-xs leading-4 font-ibmsans`}
              >
                {comments[0].user.firstName.toUpperCase()}{" "}
                {comments[0].user.lastName.toUpperCase()} :
              </div>
              <hr className="h-[0.3px]  bg-zinc-700 border-0  mb-[15px] mt-1"></hr>
              {comments.map(
                (
                  comment: { commentText: string; timeStamp: string },
                  index: React.Key | null | undefined
                ) => (
                  <div key={index}>
                    <div>
                      <div
                        className={` font-ibmmono tracking-wide text-[10px] leading-3  ${stylePermitCard.commentColor}`}
                      >
                        {parse(makeBold(dateBold(comment.commentText)))}
                      </div>
                      <div
                        className={`${stylePermitCard.colorBase} text-[9px] leading-3  tracking-widest my-2  font-ibmmono`}
                      >
                        {dateFormater(comment.timeStamp)}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        ) : (
          <div className="bg-[#7949FF]  w-[173px] h-[204px] px-[13px] flex flex-col justify-center items-center rounded-lg">
            <p className=" text-white text-[10px] leading-3  tracking-widest">
              Not Started
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PermitCard;
