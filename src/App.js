import logo from "./logo.svg";
import "./App.css";
import ImagePicker from "./components/ImagePicker/ImagePicker";
import MultipleImagePicker from "./components/ImagePicker2/ImagePicker2";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import img1 from "./components/ImageSlider/LeftCurve.png";
import img2 from "./components/ImageSlider/railway.jpg";
import img3 from "./components/ImageSlider/stop.png";
import DemoCarousel from "./components/ResponsiveCarousel/ResponsiveCarousel";
import Carousel from "./components/ImageSlider/ImageSlider";

function App() {
  const images = [img1, img2, img3];
  return (
    <>
      <ImagePicker />
      {/* <MultipleImagePicker onImagesSelected={handleImagesSelected} /> */}
      {/* <Carousel images={images} /> */}
      {/* <DemoCarousel /> */}
    </>
  );
}

export default App;
