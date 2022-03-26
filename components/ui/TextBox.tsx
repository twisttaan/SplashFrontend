export default function TextBox(props: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  disabled?: boolean;
  id?: string;
}) {
  return (
    <input
      type={props.type || "text"}
      placeholder={props.placeholder}
      id={props.id}
      className={`p-2 w-96 bg-zinc-800 text-white placeholder-gray-400 border-2 rounded-lg border-zinc-700 ${props.className}`}
      onChange={(e) => props.onChange && props.onChange(e.target.value)}
      value={props.value}
    />
  );
}
