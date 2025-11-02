import Accordion from "../components/Accordion";

const FaqSection = () => {
  return (
    <div className="grid grid-cols-3 w-full min-h-screen px-32 pt-20">
      <div className="col-span-1 flex flex-col p-4 text-right">
        <h1 className="text-header font-bold text-black-900 mb-4">FAQ</h1>
        <h2 className="text-2xl font-bold text-black-500 mb-2">
          سوالات متداولی که از ما می‌پرسید
        </h2>
        <p className="text-base font-medium text-black-500">
          سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده
          اند:
        </p>
      </div>
      <div className="col-span-2 flex flex-col p-4">
        <div className="w-full mx-auto">
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
