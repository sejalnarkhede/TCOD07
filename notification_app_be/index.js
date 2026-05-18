async function getNotifications(token) {

  try {

    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {

        headers: {
          Authorization: `Bearer ${token}`
        }

      }
    )

    const data = await response.json()

    console.log(data)

  } catch(error) {

    console.log(error)

  }
}

getNotifications("YOUR_TOKEN")