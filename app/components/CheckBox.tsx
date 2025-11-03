interface Props {
  label: string;
  value: string;
  checkedValues: boolean;
  onChange: (values: string) => void;
}
const CheckBox = ({ label, value, checkedValues, onChange }: Props) => {
  return (
    <label className="flex flex-1 cursor-pointer py-2 px-4 rounded-2xl border border-gray-200 bg-white-2 whitespace-nowrap">
      <input
        id={`checkbox-${value}`}
        type="checkbox"
        onChange={() => onChange(value)}
        checked={checkedValues}
        name="service"
        value={value}
        className="bg-gray-100 border-[0.5px] border-gray-200 w-6 h-6 rounded-lg l-2"
      />
      <span className="text-sm font-medium mr-2">{label}</span>
    </label>
  );
};

export default CheckBox;
