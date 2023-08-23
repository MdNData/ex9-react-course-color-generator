import { useState } from "react";
import { ColorList } from "./assets/components/ColorList/ColorList";
import { Form } from "./assets/components/Form/Form";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [color, setColor] = useState("#000000");
  const [colorList, setColorList] = useState([]);

  const successSend = (text) => {
    toast.success("Generated successfully for " + text);
  };

  const failedSend = () => {
    toast.error("Error generating the colors, try with different inputs. ");
  };

  const emptySend = () => {
    toast.warn("An input must be provided.");
  };

  return (
    <section>
      <Form
        color={color}
        setColor={setColor}
        colorList={colorList}
        setColorList={setColorList}
        successSend={successSend}
        failedSend={failedSend}
        emptySend={emptySend}
      />
      <ColorList colorList={colorList} />
      <ToastContainer />
    </section>
  );
};
export default App;
