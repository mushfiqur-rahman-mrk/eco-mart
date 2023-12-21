import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const LeftBar = () => {
  return (
    <>
      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          marginBottom: "15px",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: "#1A1A1A",
              fontWeight: "500",
              fontSize: "18px",
              fontFamily: "poppins",
            }}
          >
            All Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <div className="flex flex-col justify-center gap-3 mb-4">
              <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 rounded-[50%] bg-red-400 text-blue-600   border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600  "
              />
              <label className="ms-2 text-xm  text-black  ">
                Vegetable
              </label>
              </div>
              <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 rounded-[50%] bg-red-400 text-blue-600   border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600  "
              />
              <label className="ms-2 text-xm  text-black  ">
                Fresh Fruit
              </label>
              </div>
              <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 rounded-[50%] bg-red-400 text-blue-600   border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600  "
              />
              <label className="ms-2 text-xm  text-black  ">
                Cookings
              </label>
              </div>
              <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 rounded-[50%] bg-red-400 text-blue-600   border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600  "
              />
              <label className="ms-2 text-xm  text-black  ">
                Bread & Bakery
              </label>
              </div>

               
              
              
               
               
              
 
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ boxShadow: "none", marginBottom: "15px", outline: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <div>
        <img src="/src/assets/sideshop.png" alt="" />
      </div>
    </>
  );
};

export default LeftBar;
