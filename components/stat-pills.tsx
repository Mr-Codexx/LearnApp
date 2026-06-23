export default function StatPills() {
  const stats = [
    ["Courses:", "5"],
    ["Total Pts:", "500"],
    ["Level:", "Gold"],
  ];

  return (
    <div className="flex shrink-0 flex-wrap items-center gap-1.5 px-4 pt-2 sm:gap-2 sm:px-5 sm:pt-3">
      {stats.map(([label, value]) => (
        <div
          key={label}
          className="flex items-center gap-0.5 rounded-full bg-gold px-2 py-0.5 text-[9px] font-semibold text-ink shadow-chip sm:gap-1 sm:px-2.5 sm:py-1 sm:text-[10px]"
        >
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}