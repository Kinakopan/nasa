import { useEffect } from "react"
import axios from "axios";
import Image from "next/image";

export default function Polychromatic() {

  useEffect(() => {
    getPolychromaticData();
  }, [])

  return (
    <>
      Polychromatic
    </>
  )
}
