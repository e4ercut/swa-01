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

const [name, setName] = React.useState("");
const [message, setMessage] = React.useState("");
const submitForm = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, message })
    });

    const data = await res.json();

    if (data.success) {
      alert("Submitted!");
      setName("");
      setMessage("");
    } else {
      alert("Error submitting");
    }
  } catch {
    alert("Submission failed");
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
      <br /><br />
      <form onSubmit={submitForm}>
  <div>
    <input
      placeholder="Name"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  </div>

  <div>
    <textarea
      placeholder="Message"
      value={message}
      onChange={e => setMessage(e.target.value)}
    />
  </div>

  <button type="submit">Submit</button>
</form>

    </div>
  );
}

export default App;
