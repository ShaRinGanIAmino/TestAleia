import Weather from "./pages/WeatherPage";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import bg_rainy from "../src/assets/backgrounds/background_rainy.png";
import bg_cloudy from "../src/assets/backgrounds/background_cloudy.png";
import bg_sunny from "../src/assets/backgrounds/background_sunny.png";
import bg_mostly_sunny from "../src/assets/backgrounds/background_mostly_sunny.png";

const App = () => {
  const [condition, setCondition] = useState<string | null>("cloudy");
  const [background, setBackground] = useState<string>(bg_rainy);

  useEffect(() => {
    const backgroundUrl = getBackgroundUrl(condition);
    setBackground(backgroundUrl);
  }, [condition]);

  const getBackgroundUrl = (weatherCondition: string | null): string => {
    switch (weatherCondition?.toLowerCase()) {
      case "cloudy":
        return bg_cloudy;
      case "mostly sunny":
        return bg_mostly_sunny;
      case "rainy":
        return bg_rainy;
      case "sunny":
        return bg_sunny;
      default:
        return bg_rainy;
    }
  };

  return (
    <div
      className="w-screen h-full sm:h-screen flex flex-col justify-center items-center  "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <Weather />
    </div>
  );
};

export default App;
