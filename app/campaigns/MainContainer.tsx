import Image from "next/image";
import Main from "@/public/main.svg";
const MainContainer = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-5 w-full mx-auto p-6 text-center">
      <div className="flex flex-col md:w-full mt-20 mx-10 md:mx-0 text-right col-span-2">
        <h2 className="text-2xl font-bold text-black-900 mb-4">
          کمپین‌های بازاریابی و تبلیغاتی
        </h2>
        {/* Paragraph 1 */}

        <p className="text-black-500 font-bold text-lg leading-loose mb-4">
          آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما
          به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را
          بردارید!
        </p>
        {/* Paragraph 2 (Smaller text for sub-info) */}
        <p className="text-black-400 font-bold text-base mb-8">
          جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید:
        </p>
        {/* Call to Action Button */}
        <button className="bg-[#7A3DE2] text-white text-lg font-bold w-[141px] h-12 rounded-lg hover:bg-[#993de9] transition">
          دریافت مشاوره
        </button>
      </div>
      <Image className="col-span-3" src={Main} alt="main" />
    </div>
  );
};

export default MainContainer;
