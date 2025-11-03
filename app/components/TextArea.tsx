interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea = ({ value, onChange }: TextAreaProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-bold text-black-900">
        در مورد درخواست خود برای ما بنویسید:
      </h2>
      <textarea
        id="description"
        name="description"
        placeholder="توضیحات (اختیاری)"
        onChange={onChange}
        value={value}
        className="w-full h-40 p-4 border border-gray-200 rounded-2xl text-xs text-gray-700 placeholder-black-200 resize-none"
      />
    </section>
  );
};

export default TextArea;
