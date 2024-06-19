import React, { useEffect } from "react";
import { useState } from "react";
function Home() {
  const [data, setData] = useState({});
  const currency = "usd"
  useEffect(() => {

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response.usd)
      setData(response.usd)
    })

  }, []);

  const arr = Object.keys(data);
  return (
    <div>
      {arr.map((option) => (
        <div>
          {option}
        </div>
      ))}     
    </div>
  )
}

export default Home
