export default function Separator({ position }) {
  switch (position) {
    case "vertical":
      return (
        <div
          style={{
            width: "2px",
            height: "80%",
            backgroundColor: "var(--primary-color)",
            opacity: "0.3",
            margin: "0 5px",
          }}
        ></div>
      );

    case "horizontal":
      return (
        <div
          style={{
            width: "80%",
            height: "2px",
            backgroundColor: "var(--primary-color)",
            opacity: "0.3",
            margin: "0 5px",
          }}
        ></div>
      );

    default:
      break;
  }
}
