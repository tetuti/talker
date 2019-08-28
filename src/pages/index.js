import React, { useState, useReducer } from "react"

import Layout from "../components/layout"
import VoiceReq from "../components/VoiceReq";

const IndexPage = () => {

  return (
    <Layout>
      {
        typeof window !== `undefined` && <VoiceReq/>
      }
    </Layout>
  )
}

export default IndexPage
