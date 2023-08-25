import { Box, Container, Stack, Typography, Tab, Tabs } from "@mui/material";
import React, { useState, useEffect } from "react";
import"../../styles1/IndexSearch.css"
import IndexTables1 from "./IndexTable1";
import NeoplasmTable from "./NeoplasmTable";
import DrugTable from "./DrugTable";




export const IndexSearch = () => {
  console.log("enter main");
  const [value, setValue] = useState(0); // Set initial value to 0
  const [showTable, setShowTable] = useState(false);
  const [showIndx, setShowIndex] = useState(true); // Show IndexTables1 by default
  const [showDrug, setShowdrug] = useState(false);
  const [results1, setResults1] = useState([]); // Define result1 state here
  const [selectedCode, setSelectedCode] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [activeBtn, setActiveBtn] = useState("btn1");
  const handleNavBtnClick = (btnId) => {
    setActiveBtn(btnId);
    setShowIndex(!showIndx);
    setShowTable(false);
    setShowdrug(false);
  };
  const handleNavBtnClick2 = (btnId) => {
    setActiveBtn(btnId);
    setShowTable(!showTable);
    setShowIndex(false);
    setShowdrug(false);
  };
  const handleNavBtnClick3 = (btnId) => {
    setActiveBtn(btnId);
    setShowdrug(!showDrug);
    setShowIndex(false);
    setShowTable(false);
  };
  const handleRefresh = () => {
    // Reset or refresh the relevant state here
    // For example, you can reset the value state to 0
    setValue(0);
    setResults1([]);
    setSelectedCode(null);
    // Optionally, you can perform any other actions needed to refresh the component's data
  };
  useEffect(() => {
    if (selectedCode !== null) {
      handleRefresh();
    }
  }, [selectedCode]);

 

  return (
    

<div className="indexcontainer">
      <button style={{
        width:"100px",
        height:"30px",
        
      }} className={`nav-btn ${activeBtn === "btn1" ? "active" : ""}`}
              onClick={() => handleNavBtnClick("btn1")} 

        >
        {showIndx ? "" : ""}
        Index
      </button>
      <div className="IndexTablecontainer">

      {showIndx && <IndexTables1 setResults1={setResults1}
                  setSelectedCode={setSelectedCode}/>}
      </div>
      <button style={{
        height:"30px",
        width:"100px",
        marginLeft:"5px"
      }}  className={`nav-btn ${activeBtn === "btn2" ? "active" : ""}`}
              onClick={() => handleNavBtnClick2("btn2")} 
      
      >
        {showTable ? "" : ""}
        Neoplasam
      </button>

      <div style={{
        position:"absolute"
      }} className="neoplasmcontainer">

      { showTable && <NeoplasmTable setResults1={setResults1}
                  setSelectedCode={setSelectedCode}/>}
</div>

    
      <button style={{
        height:"30px",
        width:"100px",
        marginLeft:"5px"
      }} className={`nav-btn ${activeBtn === "btn3" ? "active" : ""}`}
              onClick={() => handleNavBtnClick3("btn3")} 
      
    
      >
        {showDrug ? "" : ""}
        Drugs
      </button>
      <div className="drugcontainer">


      {showDrug && <DrugTable  setResults1={setResults1}
                  setSelectedCode={setSelectedCode}/>}
      </div>
    </div>

  )
}
