export async function Log(stack, level, packageName, message) {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuYXJraGVkZXNlanVAZ21haWwuY29tIiwiZXhwIjoxNzc5MDk5NjgwLCJpYXQiOjE3NzkwOTg3ODAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiNzI1OWJkYi0xMmUxLTRhNmYtYThjZS01ODk5NGQzNDhmMmEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzZWphbCIsInN1YiI6Ijg5MTE3OGQ1LWE2YmItNDQwYS1iNTE5LWY1MmVmMmNjOGQyMCJ9LCJlbWFpbCI6Im5hcmtoZWRlc2VqdUBnbWFpbC5jb20iLCJuYW1lIjoic2VqYWwiLCJyb2xsTm8iOiJ0Y29kMDciLCJhY2Nlc3NDb2RlIjoiZnpFUVNRIiwiY2xpZW50SUQiOiI4OTExNzhkNS1hNmJiLTQ0MGEtYjUxOS1mNTJlZjJjYzhkMjAiLCJjbGllbnRTZWNyZXQiOiJhY0ZaRkJDd25lSGdtdW10In0.a4awnSftsM60NpPM0ucTCVlqh1ocr4DEUxORU8J2Hfs"
  const logData = {
    stack: stack,
    level: level,
    package: packageName,
    message: message
  }

  try {

    const response = await fetch(
      "https://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },

        body: JSON.stringify(logData)
      }
    )

    const data = await response.json()

    console.log("Log Success:", data)

  }

  catch(error) {

    console.log("Log Error:", error)

  }

}