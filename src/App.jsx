import { useState } from "react";
import { ColorList } from "./assets/components/ColorList/ColorList";
import { Form } from "./assets/components/Form/Form";

const App = () => {
  const [color, setColor] = useState("#000000");
  const [colorList, setColorList] = useState([]);
  return (
    <section>
      <Form
        color={color}
        setColor={setColor}
        colorList={colorList}
        setColorList={setColorList}
      />
      <ColorList colorList={colorList} />
    </section>
  );
};
export default App;
