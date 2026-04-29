export function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C8AA6E]/60" />
      <div className="w-2 h-2 rotate-45 bg-[#C8AA6E]" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C8AA6E]/60" />
    </div>
  );
}
