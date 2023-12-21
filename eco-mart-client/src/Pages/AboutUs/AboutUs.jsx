const AboutUs = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 justify-center items-center">
        <div className="relative">
          <img src="/src/assets/about.png" alt="" />
          <div>
          <img src="/src/assets/about1.png" className="absolute bottom-0 h-96 right-0 object-cover object-center" alt="" />
          </div>
        </div>
        <div >
          <h1 className="text-[#002603] text-3xl font-semibold">100% Trusted<br/>Organic Food Store</h1>
          <p className="text-text font-normal text-sm my-3">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.{" "}
          </p>
          <div className="grid grid-cols-2 my-5  gap-5">

          <div className="flex items-center gap-3">
            <div className="bg-soft-primary bg-opacity-30 rounded-full">
              <img src="/src/assets/leaf 2.png" className="p-2" alt="" />
            </div>
            <div>
              <h3 className="text-black text-lg font-normal">100% Organic food</h3>
              <p className="text-text mt-1 text-sm">healthy & Fresh food.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-soft-primary bg-opacity-30 rounded-full p-3">
              <img src="/src/assets/leaf 2.png" alt="" />
            </div>
            <div>
              <h3 className="text-black text-lg font-normal">100% Organic food</h3>
              <p className="text-text mt-1 text-sm">healthy & Fresh food.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-soft-primary bg-opacity-30 rounded-full p-3">
              <img src="/src/assets/leaf 2.png" alt="" />
            </div>
            <div>
              <h3 className="text-black text-lg font-normal">100% Organic food</h3>
              <p className="text-text mt-1 text-sm">healthy & Fresh food.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-soft-primary bg-opacity-30 rounded-full p-3">
              <img src="/src/assets/leaf 2.png" alt="" />
            </div>
            <div>
              <h3 className="text-black text-lg font-normal">100% Organic food</h3>
              <p className="text-text mt-1 text-sm">healthy & Fresh food.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-soft-primary bg-opacity-30 rounded-full p-3">
              <img src="/src/assets/leaf 2.png" alt="" />
            </div>
            <div>
              <h3 className="text-black text-lg font-normal">100% Organic food</h3>
              <p className="text-text mt-1 text-sm">healthy & Fresh food.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-soft-primary bg-opacity-30 rounded-full p-3">
              <img src="/src/assets/leaf 2.png" alt="" />
            </div>
            <div>
              <h3 className="text-black text-lg font-normal">100% Organic food</h3>
              <p className="text-text mt-1 text-sm">healthy & Fresh food.</p>
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
