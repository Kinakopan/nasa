import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'
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
    const date = data[0].date.split(" ")[0];

    const date_formatted = date.replaceAll("-", "/")
    console.log(date_formatted);

    let times = [];
    let images = [];

    for(let i = 0; i < data.length; i++) {
      let time = data[i].date.split(" ")[1];
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
      <main className={`${styles.main} ${styles.main_polychromatic}`}>
        <div className={styles.bgImgCont}>
          <span className={styles.polyBg}></span>
          <span className={styles.polyBg}></span>
          <span className={styles.polyBg}></span>
          <span className={styles.polyBg}></span>
          <span className={styles.polyBg}></span>
        </div>

        <h1
          href="/polychromatic"
          className={styles.heading1}>
            Polychromatic
        </h1>
        <ul className={`${styles.item_list} ${styles.item_list_ul}`}>
          <li>{time}</li>
          <li>{coords[0]}</li>
          <li>{coords[1]}</li>
          <li className={`${styles.item_image} ${styles.item_imageShadow}`}>
            <Image
              className={styles.earthImg}
              src={image}
              alt={image}
              width={200}
              height={200}/>
          </li>
          <li>
            <p className={styles.description}>
              Click View down below. See the result on the left.
            </p>
            <button className={styles.btn}>
              View
            </button>
          </li>
        </ul>

        <table className={styles.item_cont}>
          <thead className={styles.thread}>
            <tr className={styles.item_list}>
              <th>Time</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th className={styles.item_image}>Image</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {
              images.map((e, i) => {
                return(
                  <tr
                    key={i}
                    className={styles.item_list}
                    >
                    <td>{e.time}</td>
                    <td>{e.coords.lat}</td>
                    <td>{e.coords.lon}</td>
                    <td className={`${styles.item_image} ${styles.item_imageShadow}`}>
                      <Image
                        className={styles.earthImg}
                        src={e.image}
                        alt={i}
                        width={200}
                        height={200}/>
                    </td>
                    <td>
                      <button
                        className={styles.btn}
                        onClick={() => {
                          setImage(e.image);
                          setTime(e.time);
                          setCoords([e.coords.lat, e.coords.lon])
                          console.log(images[i].image)
                          document.body.scrollIntoView({ behavior: "smooth" });
                        }}>View</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </main>
    </>
  )
}
