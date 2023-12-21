import { Breadcrumbs, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import breadImage from '/src/assets/Breadcrumbs.png';
import Link from '@mui/material/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';


const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Link
          key={crumb}
          underline="hover"
          color="white"
          href={currentLink}
        >
          {crumb}
        </Link>
      );
    });

  return (
    <div className="py-5  bg-[url('/src/assets/Breadcrumbs.png')] bg-cover bg-center">
        {/* <img src="/src/assets/Breadcrumbs.png" alt="" /> */}
     <Container>
     <Breadcrumbs
     separator={<ChevronRightIcon fontSize="small" />}
     aria-label="breadcrumb" sx={{color:'white'}} className="py-2 flex items-center uppercase ">

        <Link underline="hover" color="#ffffff" href="/">
         <HomeIcon ></HomeIcon>
        </Link>
        {crumbs}
 
      </Breadcrumbs>
     </Container>
    </div>
  );
};

export default BreadCrumbs;
