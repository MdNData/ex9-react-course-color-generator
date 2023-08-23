import Values from "values.js";

export const Form = ({ color, setColor, colorList, setColorList }) => {
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setColorList(new Values(color).all(10));
  };

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <h4>Color Generator</h4>
      <input type="color" onChange={handleColorChange} value={color} />
      <input
        type="text"
        placeholder="#000000"
        value={color}
        onChange={handleColorChange}
      />
      <button className="btn">Submit</button>
    </form>
  );
};
