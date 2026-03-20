interface GuideCalloutProps {
  children: React.ReactNode;
  type?: "info" | "tip" | "warning";
}

export default function GuideCallout({ children, type = "info" }: GuideCalloutProps) {
  const styles = {
    info: "bg-blue-50 border-blue-100 text-blue-900",
    tip: "bg-green-50 border-green-100 text-green-900",
    warning: "bg-amber-50 border-amber-100 text-amber-900",
  };

  return (
    <div className={`not-prose my-6 rounded-xl border px-5 py-4 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  );
}
