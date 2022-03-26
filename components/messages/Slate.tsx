import { TextField } from "@mui/material";

export default function Slate(props: {
  onChange: (value: string) => void;
  onReturn: () => void;
  label: string;
}) {
  return (
    <div className="p-5 bg-zinc-800 my-44 flex flex-col rounded-xl drop-shadow-2xl w-2/3">
      <TextField
        id="standard-basic"
        onChange={(e) => props.onChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            props.onReturn();
          }
        }}
        label={props.label}
        variant="standard"
      />
    </div>
  );
}
