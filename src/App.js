import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
function App() {
  async function fetchData() {
    try {
      const data = await API.get("mainTestAPI", "/item");
      console.log("ahahhahaha", data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
