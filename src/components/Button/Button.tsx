interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-amber-400 px-6 py-2 cursor-pointer font-bold rounded-xl text-emerald-950"
    >
      {children}
    </button>
  );
}
