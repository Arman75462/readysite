export default function PageTitle({ title }) {
  return (
    <h2
      style={{
        marginBottom: "2em",
        textAlign: "center",
        fontSize: "clamp(4rem, 9vw, 8rem)",
        textShadow: `
          0 0 200px var(--striking-color),
          0 0 150px var(--striking-color),
          0 0 100px var(--striking-color),
          0 0 50px var(--striking-color),
          0 0 25px var(--striking-color)
        `,
        color: "var(--page-main-title-text-color)",
      }}
    >
      {title}
    </h2>
  );
}
