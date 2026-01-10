import React from "react";

function App() {
  const callApi = async () => {
    try {
      const res = await fetch("/api/ping");
      const data = await res.json();
      alert(`API says: ${data.message}`);
    } catch (err) {
      alert("API call failed");
    }
  };

  const callHello = async () => {
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      alert(`${data.message} ${data.mood}`);
    } catch (err) {
      alert("Hello failed");
    }
  };

  const readServerFile = async () => {
  try {
    const res = await fetch("/api/readfile");
    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert("Failed to read server file");
  }
};


  return (
    <div style={{ padding: "2rem" }}>
      <h1>SWA API Test</h1>

      <button onClick={callApi}>
        Call API
      </button>
      <br /><br />
      <button onClick={callHello}>
        Call Hello
      </button>
      <br /><br />
      <button onClick={readServerFile}>
        Read Server File
      </button>


    </div>
  );
}

export default App;
