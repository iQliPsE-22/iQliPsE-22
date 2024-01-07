import React, { useEffect, useState } from "react";
import "./leet.css"
const LeetCode = () => {
  const [rank, setRank] = useState(null);
  const [totalSolved, setTotalSolved] = useState(null);
  useEffect(() => {
    const fetchRank = async () => {
      const url = "https://leetcodeapi.p.rapidapi.com/IQlipse_22/rank";
      const url1 = "https://leetcodeapi.p.rapidapi.com/IQlipse_22/totalSolved";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a3ecef6823msh7a112161d1b16cep1ef573jsndc3ab7a2a9dd",
          "X-RapidAPI-Host": "leetcodeapi.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const response1 = await fetch(url1, options);
        const result = await response.text();
        const result1 = await response1.text();
        setRank(result); // Update the state with the fetched data
        setTotalSolved(result1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRank(); // Call the async function to fetch the data
  }, []); // Empty dependency array to run the effect only once

  return (
    <div id = "leetcode">
      <h2>LeetCode</h2>
      <h3 id = "rank">{rank}</h3>
      <h3>{totalSolved}</h3>
    </div>
  );
};

export default LeetCode;
