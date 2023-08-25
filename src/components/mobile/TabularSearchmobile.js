import React from "react";

import { Typography } from "@mui/material";

import"./../../styles1/TabularSearch.css"
import Codedetm from "./Codedetailmobile";
import { Tabscontainerm } from "./TabsContainer";





export const TabularSearchm = (isValueSelected) => {
  return (
    <div className="TabularContainer">
      <Typography
        className="tabshead"
        variant="subtitle1"
        fontFamily={"sans-serif"}
        color={"black"}
        noWrap
      >
        Tabular Search
      </Typography>

      <div>
        <div className="codeHead">
          <Typography
            variant="subtitle1"
            fontFamily={"sans-serif"}
            color={" #4185d2"}
            fontWeight={600}
            sx={{
              borderBottom: "0.5px solid grey",
            }}
          >
            code details
          </Typography>
        </div>

        {isValueSelected && <Codedetm />}
    <Tabscontainerm/>
      </div>
    </div>
  );
};
