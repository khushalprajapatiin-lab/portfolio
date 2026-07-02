export default function ThumbnailsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "#000",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4rem)",
            marginBottom: "12px",
          }}
        >
          Coming Soon 🚀
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            color: "#b3b3b3",
            maxWidth: "500px",
            lineHeight: 1.6,
          }}
        >
          I'm currently working on this section. Check back soon to see my
          latest YouTube thumbnail designs.
        </p>
      </div>
    </main>
  );
}