interface LanguageSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const languages = [
  "typescript",
  "javascript",
  "python",
  "java",
  "cpp",
  "c",
  "go",
  "rust",
];

export default function LanguageSelect({
  value,
  onChange,
}: LanguageSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-sm outline-none transition focus:border-blue-500"
    >
      {languages.map((language) => (
        <option
          key={language}
          value={language}
        >
          {language.charAt(0).toUpperCase() +
            language.slice(1)}
        </option>
      ))}
    </select>
  );
}