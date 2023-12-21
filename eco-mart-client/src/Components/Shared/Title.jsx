
const Title = ({title,center}) => {

  return (
    <>
      <h1 className={`text-black text-3xl font-semibold my-4 ${center ? 'text-center': ''} `}>{title}</h1>
    </>
  );
};

export default Title;