import { Link } from "react-router-dom";
import routes from "routes/routePaths";
import { Link as MuiLink } from "@mui/material";

type ReturnToLoginLinkProps = {
  text?: string;
};

const ReturnToLoginLink = ({ text }: ReturnToLoginLinkProps) => {
  return (
    <MuiLink component={Link} to={routes.Login}>
      {text || "Wróc do ekranu logowania"}
    </MuiLink>
  );
};

export default ReturnToLoginLink;
