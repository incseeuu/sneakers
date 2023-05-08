import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        style={{maxWidth: '363px', maxHeight: '373px'}}
        viewBox="0 0 363 373"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="7" y="7" rx="3" ry="3" width="342" height="296" />
        <rect x="6" y="313" rx="3" ry="3" width="344" height="53" />
    </ContentLoader>
)

export default Skeleton