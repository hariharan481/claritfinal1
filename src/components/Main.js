import { Container, Stack, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import "../styles/Main.css";
import { IndexSearch } from "./IndexSearch/IndexSearch";
import { TabularSearch } from "./TabularSearch/TabularSearch";
import { TabularSearchm } from "./mobile/TabularSearchmobile";
import { IndexSearchm } from "./mobile/IndexSearchmobile";


export const Main = () => {
  const matches = useMediaQuery("(max-width:768px)");
  return (
    <>
      {matches ? (
        <div>
          <Container maxWidth="0.5%">
            <Stack direction={"column"} gap={5} mt={2.5} ml={"0.5%"}>
          
<TabularSearchm/>
          <IndexSearchm/>

          
              
            </Stack>
          </Container>
        </div>
      ) : (
        <div>
          <Container maxWidth="0.5%">
            <Stack direction={"row"} gap={"0.5%"} mt={2.5} ml={"1%"}>
            <IndexSearch/>
            <TabularSearch/>
            </Stack>
          </Container>
        </div>
      )}
    </>
  );
};
