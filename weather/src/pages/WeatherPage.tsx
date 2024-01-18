//import Card from "../components/Card";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import cloudy from "../assets/weather-types/cloud_desktop.png";
import rainy from "../assets/weather-types/rainy_desktop.png";
import sunny from "../assets/weather-types/sunny_desktop.png";
import mostly_sunny from "../assets/weather-types/mostly_sunny_desktop.png";

import sunset from "../assets/components/sunset.png";
import sunrise from "../assets/components/sunrise.png";
import { useEffect, useState } from "react";
import { fetchWeatherApi } from "openmeteo";
import uv1 from "../assets/components/UV 1(1).png";
import uv2 from "../assets/components/UV 2(1).png";
import uv3 from "../assets/components/UV 3(1).png";
import uv4 from "../assets/components/UV 4(1).png";
import uv5 from "../assets/components/UV 5(1).png";
import uv6 from "../assets/components/UV 6(1).png";
import uv7 from "../assets/components/UV 7(1).png";
import uv8 from "../assets/components/uv 8.png";
import uv9 from "../assets/components/uv 9.png";
import uv10 from "../assets/components/UV 10(1).png";
import uv11 from "../assets/components/UV 11(1).png";
import uv12 from "../assets/components/UV 11(1).png";
import uv13 from "../assets/components/UV 13(1).png";
import uvfull from "../assets/components/UV FULL(1).png";

//import axios from "axios";

// interface WeatherData {
//   city: string;
//   temperature_2m: number;
//   humidity_2m: number;
//   weathercode: string;
// }

const WeatherPage: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());
  const [condition, setCondition] = useState<string | null>("Rainy");
  const [uvLevel, setUVLevel] = useState<number>(9);
  const [uvImage, setUVImage] = useState<string>(uv1);

  useEffect(() => {
    const getUVImage = (level: number): string => {
      switch (level) {
        case 1:
          return uv1;
        case 2:
          return uv2;
        case 3:
          return uv3;
        case 4:
          return uv4;
        case 5:
          return uv5;
        case 6:
          return uv6;
        case 7:
          return uv7;
        case 8:
          return uv8;
        case 9:
          return uv9;
        case 10:
          return uv10;
        case 11:
          return uv11;
        case 12:
          return uv12;
        case 13:
          return uv13;
        case 14:
          return uvfull;
        default:
          return uvfull;
      }
    };

    const image = getUVImage(uvLevel);
    setUVImage(image);
  }, [uvLevel]);

  //const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });

  const params = {
    latitude: 52.52,
    longitude: 13.41,
    hourly: "temperature_2m",
  };
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWeatherApi(url, params);

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getWeatherIcon = () => {
    let iconSrc = null;

    switch (condition?.toLowerCase()) {
      case "cloudy":
        iconSrc = cloudy;
        break;
      case "mostly sunny":
        iconSrc = mostly_sunny;
        break;
      case "rainy":
        iconSrc = rainy;
        break;
      case "sunny":
        iconSrc = sunny;
        break;
      default:
        break;
    }
    return iconSrc ? (
      <img
        src={iconSrc}
        alt="Weather Icon"
        className=" sm:w-full sm:h-full object-contain w-[170px] h-[130px]"
      />
    ) : null;
  };

  return (
    <section className=" w-[100%] h-[100%] flex flex-col sm:flex-row">
      <section className=" border-0 sm:border-r-[1px] border-[#85BCF1] w-4/4  sm:w-1/4 flex flex-col gap-2 justify-start items-center p-10 ">
        <h1
          className={`font-comf font-normal text-[26px] ${
            condition === "sunny" || condition === "mostly_sunny"
              ? "black-text"
              : "text-white"
          }`}
        >
          {formattedDateTime}
        </h1>
        <div className=" custom-card h-[250px] flex justify-center items-center w-[300px] sm:w-full p-8">
          {getWeatherIcon()}
        </div>
        <h2
          className={`font-comf font-normal text-[70px] ${
            condition === "sunny" || condition === "mostly_sunny"
              ? "black-text"
              : "text-white"
          }`}
        >
          16°C
        </h2>
        <h1
          className={`font-comf font-normal text-[20px] ${
            condition === "sunny" || condition === "mostly_sunny"
              ? "black-text"
              : "text-white"
          }`}
        >
          {condition}
        </h1>
        <div className="flex gap-2 ">
          <div
            className={`flex gap-1 justify-center items-center ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            }`}
          >
            <FaArrowUpLong />
            <h2>22°</h2>
          </div>
          <div
            className={`flex gap-1 justify-center items-center ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            }`}
          >
            <FaArrowDownLong />
            <h2>12°</h2>
          </div>
        </div>
        <div className=" border-b-[1px] border-[#85BCF1] w-full mt-4"></div>
      </section>
      <section className=" w-4/4 sm:w-3/4 flex justify-center items-center sm:items-start flex-wrap m-10 pb-40 sm:pb-0 gap-4 ">
        <div className=" custom-card layout flex flex-col gap-2 justify-start items-center">
          <h1 className=" title">Uv index</h1>
          <div className="relative">
            <img
              src={uvImage}
              alt={`UV Level ${uvLevel}`}
              className="ml-4 w-32 h-32"
            />
            <h2
              className={`absolute mt-5 ml-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 font-comf font-normal text-[50px] ${
                condition === "sunny" || condition === "mostly_sunny"
                  ? "black-text"
                  : "text-white"
              }`}
            >
              {uvLevel}
            </h2>
          </div>

          <h2
            className={`font-comf ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            } text-[20px]`}
          >
            High level{" "}
          </h2>
        </div>
        <div className=" custom-card layout">
          <h1 className=" title">Wind statut</h1>
          <h3
            className={`font-comf font-normal text-[50px] mt-12 ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            }`}
          >
            13.7 km/h
          </h3>
        </div>
        <div className=" custom-card layout">
          <h1 className=" title">Sunrise & Sunset</h1>
          <div className=" flex flex-row justify-center items-center gap-14 mt-8">
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src={sunrise}
                alt="sunrise"
                className=" w-20 object-contain"
              />
              <h2
                className={` font-comf ${
                  condition === "sunny" || condition === "mostly_sunny"
                    ? "black-text"
                    : "text-white"
                }`}
              >
                07:32
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img src={sunset} alt="sunset" className=" w-20 object-contain" />
              <h2
                className={` font-comf ${
                  condition === "sunny" || condition === "mostly_sunny"
                    ? "black-text"
                    : "text-white"
                }`}
              >
                17:15
              </h2>
            </div>
          </div>
        </div>
        <div className=" custom-card layout">
          <h1 className=" title">Predictions</h1>
          <h3
            className={`font-comf font-normal text-[30px] mt-8 mb-4 ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            } text-center leading-10`}
          >
            <span className="text-[50px]">100mm </span> <br />
            in the last 24h
          </h3>
          <h1
            className={` font-comf ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            } font-light text-[18px] w-4/5 text-center`}
          >
            650 mm in the next 6 days
          </h1>
        </div>
        <div className=" custom-card layout">
          <h1 className=" title">Humidity</h1>
          <h3
            className={`font-comf font-normal text-[30px] mt-12 mb-8 ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            } text-center leading-10`}
          >
            <span className="text-[50px]">71 % </span> <br />
          </h3>
          <h1
            className={` font-comf ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            } font-light text-[18px] w-4/5 text-center`}
          >
            the dew point is 11°
          </h1>
        </div>
        <div className=" custom-card layout">
          <h1 className=" title">Visibility</h1>
          <h3
            className={`font-comf font-normal text-[30px] mt-12 mb-8 ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            } text-center leading-10`}
          >
            <span className="text-[50px]">10 km </span> <br />
          </h3>
          <h1
            className={` font-comf ${
              condition === "sunny" || condition === "mostly_sunny"
                ? "black-text"
                : "text-white"
            } font-light text-[18px] w-4/5 text-center`}
          >
            the sky is partially clear
          </h1>
        </div>
      </section>
    </section>
  );
};

export default WeatherPage;
