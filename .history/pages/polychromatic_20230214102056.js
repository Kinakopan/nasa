import { useEffect, useState } from 'react';
import axios from "axios";
import Image from "next/image";

export default function Polychromatic() {
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [time, setTime] = useState('Loading');
  const [date, setDate] = useState('');
  const [coords, setCoords] = useState({});

  const apiKey = "g3pY1Tdptf741ASB2RGAcEStDHNcWE3lqJUZlQSe";
  const url = `https://epic.gsfc.nasa.gov/api/natural?api_key=${apiKey}`

  const getPolychromaticData = async() => {
    const res = await axios.get(url);
    const data = await res.data;
    console.log(data);

    const caption = data[0].caption;
    const date = data[0].date.split("")[0];

    const date_formatted = date.replaceAll("-", "/")
    console.log(date_formatted);

    let times = [];
    let images = [];

    for(let i = 0; i < data.ength; i++) {
      let time = data[i].date.split("")[1];
      let coords = data[i].centroid_coordinates;
      let imagePath = data[i].image;
      let image = `https://epic.gsfc.nasa.gov/archive/natural/${date_formatted}/png/${imagePath}.png`

      times.push(time);
      images.push({
        image: image,
        time: time,
        coords: coords
      })
    }

    setDate(date);
    setImages(images);
    setImage(images[0].image);
    setTime(time[0]);
    setCoords([images[0].coords.lat, images[0].coords.lon])

    console.log(image);
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
