import Contact from "@/components/Pages/Contat"
import AppDownload from "@/components/Pages/AppDownload"
import CountInfo from "@/components/Pages/CountInfo"

import { WaveSmall } from "@/utils/wave"

export default function Index() {
    return (
      <>
        <CountInfo id={"countInfor"}/>
        <AppDownload id={"appdownload"}/>
        <WaveSmall/>
        <Contact id={"contact"}/>
      </>
    )
  }