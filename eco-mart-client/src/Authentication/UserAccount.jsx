import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import TestFile from "../Components/Test/TestFile";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function UserAccount() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex justify-center items-center my-10">
      <Container>
        <div className="flex justify-center items-center">
          <Box sx={{ width: "100%",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider",width:'100%'}} className="flex justify-center items-center">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className=""
              >
                <Tab sx={{width:'50%'}} label="Log In" {...a11yProps(0)} />
                <Tab label="Sign Up" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              {/* <TestFile></TestFile> */}
              <Login></Login>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <SignUp></SignUp>
            </CustomTabPanel>
 
          </Box>
        </div>
      </Container>
    </div>
  );
}
