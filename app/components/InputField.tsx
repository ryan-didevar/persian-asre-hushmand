import { FormSectionProps } from "../campaigns/FormSection";

interface InputFieldProps {
  label: string;
  placeholder: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type?: string;
  name: keyof FormSectionProps; // Explicitly using keys of FormSectionProps for type safety
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  placeholder,
  icon: Icon,
  type = "text",
  name,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="flex-1 min-w-[250px] relative">
      <label className="mb-4 text-black-900 text-sm font-bold" htmlFor={label}>
        {label}
      </label>
      <div className="relative flex items-center justify-right mt-4">
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
          required
          className="w-full text-right py-3 px-12 border border-gray-200 rounded-2xl text-xs text-black-900 placeholder-gray-700"
        />
        {Icon && (
          <Icon className="absolute top-1/2 -translate-y-1/2 ms-4 h-6 w-6 text-icon-red" />
        )}
      </div>
    </div>
  );
};

export default InputField;
