import { UseFormRegister } from "react-hook-form";
import { FormDataSchema } from "../schemas/formAuthority";

interface TextAreaProps {
  register: UseFormRegister<FormDataSchema>;
}
const TextArea = ({ register }: TextAreaProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-bold text-black-900">
        در مورد درخواست خود برای ما بنویسید:
      </h2>
      <textarea
        {...register("description")}
        placeholder="توضیحات (اختیاری)"
        className="w-full h-40 p-4 border border-gray-200 rounded-2xl text-xs text-gray-700 placeholder-black-200 resize-none"
      ></textarea>
    </section>
  );
};

export default TextArea;
