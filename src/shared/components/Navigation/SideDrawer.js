import React from "react";
import ReactDOM from "react-dom";
/*import { Collapse } from "@mui/material";
import Box from "@mui/material/Box";*/

import "./SideDrawer.css";

const SideDrawer = (props) => {
 /* const nodeRef = useRef(null);*/

  const content = (
    /*<Collapse in={props.show}  sx={{
      transition: 'ease',
    }}>
      <Box
        sx={{ top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100vh',
        width: '100%',
        backgroundColor: "white", zIndex: 4 ,position: 'relative'}}
        onClick={props.onClick}
        ref={nodeRef}
      >
        {props.children}
      </Box>
    </Collapse>*/
    <div className={`navigation-drawer ${props.show ? 'open' : ''}`} onClick={props.onClick}>
      <div className="navigation-drawer-content">
        {props.children}
      </div>
      <div className="navigation-drawer-handle" onClick={props.onClick}>
        {/* Add an icon or other handle for opening/closing the drawer */}
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
