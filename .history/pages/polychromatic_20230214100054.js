import { useEffect } from "react"
import axios from "axios";
import Image from "next/image";

export default function Polychromatic() {
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [time, setTime] = useState('Loading');
  const [data, setData] = useState('');
  const [coords, setCoords] = useState({});

  const apiKey = "g3pY1Tdptf741ASB2RGAcEStDHNcWE3lqJUZlQSe";
  const url = `https://epic.gsfc.nasa.gov/api/natural?api_key=${apiKey}`

  const getPolychromaticData = async() => {
    const res = await axios.get(url);
    const info = await res.data;
    console.log(info);
    setData(info);
  }

  useEffect(() => {
    getPolychromaticData();
  }, [])

  return (
    <>
      Polychromatic
    </>
  )
}
