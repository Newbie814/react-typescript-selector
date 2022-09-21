type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: string[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {}
