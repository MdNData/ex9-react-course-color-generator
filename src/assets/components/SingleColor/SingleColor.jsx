export const SingleColor = ({ hex, weight }) => {
  return (
    <article className="color" style={{ backgroundColor: "#" +  hex  }}>
      <p>{hex}</p>
      <p>{weight}</p>
    </article>
  );
};
