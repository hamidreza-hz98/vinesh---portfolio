import Link from "next/link";

const ShinyText = ({
  text,
  href = "",
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return href ? (
    <Link
      className={`px-4 py-1 rounded-full backdrop-blur-2xl border border-border shiny-text ${disabled ? "disabled" : ""} ${className}`}
      href={href}
    >
      {text}
    </Link>
  ) : (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
