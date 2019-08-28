import React from "react"

import Layout from "../components/layout"
import VoiceReq from "../components/VoiceReq";

const IndexPage = () => {
  const voiceReq = typeof window !== `undefined` ? <VoiceReq/> : null
  return (
    <Layout>
      {voiceReq}
    </Layout>
  )
}

export default IndexPage
