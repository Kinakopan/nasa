import { useEffect } from "react"
import axios from "axios";
import Image from "next/image";

export default function Polychromatic() {
  const [image, setImage] = useState([]);
  const [images, setimages] = useState([]);
  const [time, setTime] = useState('Loading');
  const [data, setData] = useState('');
  const [coords, setCoords] = useState({});

  useEffect(() => {
    getPolychromaticData();
  }, [])

  return (
    <>
      Polychromatic
    </>
  )
}
