interface Props {
  label: string;
  value: string;
  checkedValues: string[] | undefined;
  onChange: (values: string[]) => void;
}
const CheckBox = ({ label, value, checkedValues, onChange }: Props) => {
  const isChecked = checkedValues?.includes(value) ?? false;

  const handleCheck = () => {
    const current = checkedValues || [];

    if (isChecked) {
      onChange(current.filter((v) => v !== value));
    } else {
      onChange([...current, value]);
    }
  };
  return (
    <label className="flex flex-1 cursor-pointer py-2 px-4 rounded-2xl border border-gray-200 bg-white-2 whitespace-nowrap">
      <input
        type="checkbox"
        onChange={handleCheck}
        checked={isChecked}
        name="service"
        value={value}
        className="bg-gray-100 border-[0.5px] border-gray-200 w-6 h-6 rounded-lg l-2"
      />
      <span className="text-sm font-medium mr-2">{label}</span>
    </label>
  );
};

export default CheckBox;
