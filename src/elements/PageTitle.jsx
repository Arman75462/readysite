export default function PageTitle({ title }) {
  return (
    <h2
      style={{
        marginBottom: "2em",
        textAlign: "center",
        fontSize: "clamp(4rem, 9vw, 8rem)",
        textShadow: `
            0 0 200px rgba(255, 0, 0, 1),
            0 0 150px rgba(255, 0, 0, 0.9),
            0 0 100px rgba(255, 0, 0, 0.8),
            0 0 50px rgba(255, 0, 0, 0.7),
            0 0 25px rgba(255, 0, 0, 0.6)
          `,
      }}
    >
      {title}
    </h2>
  );
}
