import React from "react";

function App() {
  const callApi = async () => {
    try {
      const res = await fetch("/api/ping");
      const data = await res.json();
      console.log("API response:", data);
      alert(`API says: ${data.message}`);
    } catch (err) {
      console.error("API error:", err);
      alert("API call failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>SWA API Test</h1>
      <button onClick={callApi}>
        Call API
      </button>
    </div>
  );
}

export default App;
