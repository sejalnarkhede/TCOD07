import { useEffect, useState } from "react"
import { Log } from "./logger"

function App() {

  const [notifications, setNotifications] = useState([])
  const [filter, setFilter] = useState("All")

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYXJraGVkZXNlanVAZ21haWwuY29tIiwiZXhwIjoxNzc5MDk5NjgwLCJpYXQiOjE3NzkwOTg3ODAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiNzI1OWJkYi0xMmUxLTRhNmYtYThjZS01ODk5NGQzNDhmMmEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzZWphbCIsInN1YiI6Ijg5MTE3OGQ1LWE2YmItNDQwYS1iNTE5LWY1MmVmMmNjOGQyMCJ9LCJlbWFpbCI6Im5hcmtoZWRlc2VqdUBnbWFpbC5jb20iLCJuYW1lIjoic2VqYWwiLCJyb2xsTm8iOiJ0Y29kMDciLCJhY2Nlc3NDb2RlIjoiZnpFUVNRIiwiY2xpZW50SUQiOiI4OTExNzhkNS1hNmJiLTQ0MGEtYjUxOS1mNTJlZjJjYzhkMjAiLCJjbGllbnRTZWNyZXQiOiJhY0ZaRkJDd25lSGdtdW10In0.a4awnSftsM60NpPM0ucTCVlqh1ocr4DEUxORU8J2Hfs"

  useEffect(() => {

    fetch(
      "https://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    .then(res => res.json())

    .then(data => {

      const allNotifications = data.notifications || []

      setNotifications(allNotifications)

      Log(
        "frontend",
        "info",
        "api",
        "Notifications fetched successfully"
      )

    })

    .catch(error => {
      console.log(error)
    })

  }, [])


  const buttonStyle = {
    padding: "12px 24px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "#1f2a48",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s"
  }


  return (

    <div style={{
      padding: "30px",
      background: "linear-gradient(to right, #0f172a, #111827)",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial"
    }}>

      <h1 style={{
        textAlign: "center",
        fontSize: "55px",
        marginBottom: "10px"
      }}>
        Campus Notifications
      </h1>

      <p style={{
        textAlign: "center",
        color: "#94a3b8",
        marginBottom: "40px"
      }}>
        Smart Notification Dashboard
      </p>


      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginBottom: "40px",
        flexWrap: "wrap"
      }}>

        <button
          style={buttonStyle}
          onClick={() => {

            setFilter("All")

            Log(
              "frontend",
              "info",
              "component",
              "All filter selected"
            )

          }}
        >
          All
        </button>


        <button
          style={buttonStyle}
          onClick={() => {

            setFilter("Event")

            Log(
              "frontend",
              "info",
              "component",
              "Event filter selected"
            )

          }}
        >
          Event
        </button>


        <button
          style={buttonStyle}
          onClick={() => {

            setFilter("Placement")

            Log(
              "frontend",
              "info",
              "component",
              "Placement filter selected"
            )

          }}
        >
          Placement
        </button>


        <button
          style={buttonStyle}
          onClick={() => {

            setFilter("Result")

            Log(
              "frontend",
              "info",
              "component",
              "Result filter selected"
            )

          }}
        >
          Result
        </button>

      </div>


      {
        notifications.length === 0
        ?
        <h2 style={{textAlign:"center"}}>
          Loading Notifications...
        </h2>
        :

        notifications
        .filter(notification =>
          filter === "All"
          ? true
          : notification.Type === filter
        )
        .slice(0,10)
        .map((notification,index) => (

          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "25px",
              margin: "20px auto",
              borderRadius: "18px",
              maxWidth: "850px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
              borderLeft: notification.Type === "Placement"
                ? "8px solid #22c55e"
                : notification.Type === "Result"
                ? "8px solid #3b82f6"
                : "8px solid #f59e0b"
            }}
          >

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px"
            }}>

              <h2>
                {notification.Type}
              </h2>

              <span style={{
                background: "#334155",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px"
              }}>
                Priority Alert
              </span>

            </div>


            <p style={{
              fontSize: "18px",
              lineHeight: "1.6"
            }}>
              {notification.Message}
            </p>


            <small style={{
              color: "#94a3b8"
            }}>
              {notification.Timestamp}
            </small>

          </div>

        ))
      }

    </div>

  )
}

export default App
