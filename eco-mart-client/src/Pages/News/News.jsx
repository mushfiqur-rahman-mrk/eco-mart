import { Container } from "@mui/material";
import NewsCard from "../../Components/Shared/NewsCard";

const News = () => {

  return (
    <div className="my-10">
       <Container>
        <div className="grid grid-cols-2 gap-5 ">
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
         
        </div>
       </Container>
    </div>
  );
};

export default News;