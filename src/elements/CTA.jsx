import { NavLink } from "react-router-dom";
import "./CTA.css";

export default function CTA({
  className = "",
  children,
  to = "/contact",
  ...rest
}) {
  return (
    <NavLink
      className={`${className} CTA`}
      to={to}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : null,
        ...rest.style, // Spreading additional style properties
      })}
      {...rest} // Spreading any other props passed to CTA
    >
      {children}
    </NavLink>
  );
}
