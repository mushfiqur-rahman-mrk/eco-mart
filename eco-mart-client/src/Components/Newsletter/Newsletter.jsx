import { Container } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


const Newsletter = () => {
  return (
    <div className="bg-[#EDF2EE]">
      <Container>
        <div className="mt-24 flex justify-center items-center gap-5 py-14 ">
          <div>
            <h1 className="text-black text-xl font-semibold">Subcribe our Newsletter</h1>
            <p className="text-text font-normal text-sm my-2">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
          </div>
          <div>
            <div className="flex">
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-full md:w-80 px-3 h-10   border-2 border-[#E6E6E6] rounded-l-2xl focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary  text-white rounded-2xl ml-[-20px] px-2 md:px-3 py-0 md:py-1"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <FacebookOutlinedIcon sx={{color:'#4D4D4D',fontSize:'40px',"&:hover": { color: "#00B207" }}}></FacebookOutlinedIcon>
            <FacebookOutlinedIcon sx={{color:'#4D4D4D',fontSize:'40px',"&:hover": { color: "#00B207" }}}></FacebookOutlinedIcon>
            <FacebookOutlinedIcon sx={{color:'#4D4D4D',fontSize:'40px',"&:hover": { color: "#00B207" }}}></FacebookOutlinedIcon>
            <FacebookOutlinedIcon sx={{color:'#4D4D4D',fontSize:'40px',"&:hover": { color: "#00B207" }}}></FacebookOutlinedIcon>
        
             
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
