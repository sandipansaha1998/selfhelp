import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Input = ({
  name,
  label,
  handleChange,
  autoFocus,
  type,
  handleShowPassword,
  value,
  icon,
}) => (
  <div>
    <TextField
      className="col-12 py-3"
      name={name}
      onChange={handleChange}
      variant="standard"
      required
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className="text-dark">
            {icon}
          </InputAdornment>
        ),
      }}
      value={value}
    />
  </div>
);
export default Input;
// name === "password"
//         ? {
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={handleShowPassword}>
//                   {type === "password" ? (
//                     <VisibilityIcon />
//                   ) : (
//                     <VisibilityOffIcon />
//                   )}
//                 </IconButton>
//               </InputAdornment>
//             )
//           }
//         : undefined
