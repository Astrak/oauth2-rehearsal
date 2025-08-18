interface IButtonProps {
  text: string;
}

export default function Button({ text }: IButtonProps) {
  return (
    <button className="bg-amber-400 px-6 py-2 cursor-pointer font-bold rounded-xl text-emerald-950">
      {text}
    </button>
  );
}
