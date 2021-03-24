import { useState, useEffect } from "react";
import { Stage, Layer, Text, Image } from "react-konva";
import useImage from "use-image";
import { defaultContext, getCurrentCounter } from "./Context";
import seedrandom from "seedrandom";

const ImageComponent = () => {
  const currentCounter = getCurrentCounter(defaultContext);
  const [counter, setCounter] = useState(currentCounter);
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(getCurrentCounter(defaultContext));
      const rand = seedrandom(counter)();
      const imageNumber = Math.floor(rand * defaultContext.imageNumber);
      setImage(`/img/background/${imageNumber}.png`);
      const textNumber = Math.floor(rand * defaultContext.textNumber);
      setText(`/img/text/${textNumber}.png`);
    }, defaultContext.interval);
    return () => clearInterval(interval);
  }, [counter]);
  const [img] = useImage(image);
  const [txt] = useImage(text);
  return (
    <Stage width={500} height={500}>
      <Layer>
        {image != null ? <Image image={img} /> : undefined}
        {text != null ? <Image image={txt} /> : undefined}
        <Text text={`Image #${counter}`} />
      </Layer>
    </Stage>
  );
};

export default ImageComponent;
