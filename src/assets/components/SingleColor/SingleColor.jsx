export const SingleColor = ({ hex, weight, copyToClipboard }) => {
  return (
    <article
      className="color"
      style={{ backgroundColor: "#" + hex }}
      onClick={() => {
        copyToClipboard("#" + hex);
      }}
    >
      <p>Hex : #{hex}</p>
      <p>Weight : {weight}</p>
    </article>
  );
};
