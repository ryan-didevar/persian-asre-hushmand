import MainContainer from "./MainContainer";
import SliderSection from "./SliderSection";

const Campings = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <MainContainer />
      <div className="w-full h-[430px] bg-[#F9F9F9]">
        <div className="bg-linear-to-b from-[#43217C] to-[#7A3DE2] h-60 w-full">
          <h2 className="text-white text-center py-6 text-1xl font-bold">
            موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
          </h2>
          <div className="px-32">
            <SliderSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campings;
