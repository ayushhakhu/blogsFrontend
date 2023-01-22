import { Alert } from "@mui/material";
import ReactDOM from "react-dom";

export const AlertProvider = ({ severity, text, ...props }) => {
  return ReactDOM.createPortal(
    <Alert
      sx={{ position: "fixed", left: 0, bottom: 0, width: 200 }}
    severity={severity}
      {...props}
    >
      {text}
    </Alert>,
    document.getElementById("portal")
  );
};

export default AlertProvider;
