import React from "react"
import Loadable from "@loadable/component"

const LoadableHome = Loadable(() => import("../components/home"))

export default LoadableHome
