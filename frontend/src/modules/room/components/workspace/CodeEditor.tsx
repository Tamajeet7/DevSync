import { Editor, useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string | undefined) => void;
}

export default function CodeEditor({ code, language, onChange }: CodeEditorProps) {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("devsync-dark", {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "", background: "030005" }, // Match our dark purple bg
        ],
        colors: {
          "editor.background": "#00000000", // Transparent to let our bg show
          "editor.lineHighlightBackground": "#ffffff08",
          "editorLineNumber.foreground": "#ffffff40",
          "editor.selectionBackground": "#9333ea40", // Purple selection
        },
      });
      monaco.editor.setTheme("devsync-dark");
    }
  }, [monaco]);

  const mapLanguage = (lang: string) => {
    const l = lang.toLowerCase();
    if (l === "node.js" || l === "javascript") return "javascript";
    if (l === "python") return "python";
    if (l === "c++" || l === "cpp") return "cpp";
    if (l === "java") return "java";
    if (l === "go") return "go";
    if (l === "rust") return "rust";
    return "javascript"; // fallback
  };

  return (
    <div className="flex-1 overflow-hidden relative">
      <div className="absolute inset-0 bg-[#030005]/40 backdrop-blur-sm z-0 pointer-events-none" />
      <Editor
        height="100%"
        language={mapLanguage(language)}
        value={code}
        onChange={onChange}
        theme="devsync-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          padding: { top: 20 },
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: "smooth",
          cursorSmoothCaretAnimation: "on",
          formatOnPaste: true,
          suggest: {
            showIcons: true,
            showStatusBar: true,
          },
        }}
        className="relative z-10"
      />
    </div>
  );
}
