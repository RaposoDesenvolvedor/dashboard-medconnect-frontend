import { AlignJustify } from "lucide-react";
import "./InformationPlaceholder.css";

export default function InformationPlaceholder({
  children,
  title = null,
  width = "auto",
  height = "auto",
  flexDirection = "column",
  gap = 0,
  flexGrow = undefined,
  justifyContent = "start",
  alignItems = "start",
}) {
  return (
    <section
      style={{
        width: `${width}`,
        height: `${height}`,
        flexDirection: `${flexDirection}`,
        gap: `${gap}px`,
        flexGrow: `${flexGrow}`,
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
      }}
      className="information-placeholder"
    >
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
