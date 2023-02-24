import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={320}
    viewBox="0 0 220 320"
    backgroundColor="#2a5a5a"
    foregroundColor="#F9F5F4"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="220" height="250" /> 
    <rect x="0" y="257" rx="5" ry="5" width="220" height="15" /> 
    <rect x="0" y="278" rx="5" ry="5" width="220" height="15" /> 
    <rect x="20" y="298" rx="5" ry="5" width="180" height="15" />
  </ContentLoader>
)

export default Skeleton

