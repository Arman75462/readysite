import { NavLink } from "react-router-dom";
import "./CTA.css";

export default function CTA({ className = "", children, ...rest }) {
  return (
    <NavLink
      className={`${className} CTA`}
      to="/contact"
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
