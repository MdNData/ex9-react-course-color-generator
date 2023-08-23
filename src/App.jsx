import { useState } from "react";
import { ColorList } from "./assets/components/ColorList/ColorList";
import { Form } from "./assets/components/Form/Form";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [color, setColor] = useState("#000000");
  const [colorList, setColorList] = useState([]);

  const failedSend = (
    text = "Error generating the colors, try with different inputs."
  ) => {
    toast.error(text);
  };

  const emptySend = () => {
    toast.warn("An input must be provided.");
  };

  const copiedSuccess = (text) => {
    toast("Copied " + text);
  };

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      copiedSuccess(text);
    } catch (e) {
      failedSend("Failed to copy! :=(");
    }
  }

  return (
    <section>
      <Form
        color={color}
        setColor={setColor}
        colorList={colorList}
        setColorList={setColorList}
        failedSend={failedSend}
        emptySend={emptySend}
      />
      <ColorList colorList={colorList} copyToClipboard={copyToClipboard} />
      <ToastContainer />
    </section>
  );
};
export default App;
