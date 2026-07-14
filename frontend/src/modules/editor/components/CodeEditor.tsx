import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";

import { socket } from "../../../services/socket";

interface Props {
  roomId: string;
}

export default function CodeEditor({
  roomId,
}: Props) {
  const [code, setCode] = useState(`function hello() {
  console.log("Hello DevSync");
}`);

  useEffect(() => {
    socket.on("receive-code", (newCode: string) => {
      setCode(newCode);
    });

    return () => {
      socket.off("receive-code");
    };
  }, []);

  function handleChange(value?: string) {
    const updatedCode = value ?? "";

    setCode(updatedCode);

    socket.emit("code-change", {
      roomId,
      code: updatedCode,
    });
  }

  return (
    <div className="h-full">
      <Editor
        height="100%"
        language="typescript"
        theme="vs-dark"
        value={code}
        onChange={handleChange}
        options={{
          automaticLayout: true,
          fontSize: 15,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
}