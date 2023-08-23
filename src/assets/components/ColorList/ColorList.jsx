import { SingleColor } from "../SingleColor/SingleColor";

export const ColorList = ({ colorList, copyToClipboard }) => {
  return (
    <div className="colors">
      {colorList.map((item, key) => {
        return (
          <SingleColor
            key={key}
            hex={item.hex}
            weight={item.weight}
            copyToClipboard={copyToClipboard}
          />
        );
      })}
    </div>
  );
};
