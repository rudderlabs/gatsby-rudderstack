import * as rudderanalytics from "rudder-sdk-js"
import React, { useEffect } from "react"

rudderanalytics.load(
  "1fb5eNnAkmmz4BnZuTGiFrh06Ui",
  "https://hosted.rudderlabs.com"
)

const Home = () => {
  useEffect(() => {
    document.title = `Hiiiii`
    rudderanalytics.page()
  })
  return <div>Hello world!</div>
}

export default Home
