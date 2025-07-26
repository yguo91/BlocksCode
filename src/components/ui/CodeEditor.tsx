// components/CodeEditor.tsx
"use client";

import dynamic from "next/dynamic";
import { Editor } from "@monaco-editor/react";
import { useRef } from "react";

type Props = {
  defaultCode: string;
};

function EditorClient({ defaultCode }: Props) {
  const editorRef = useRef<any>(null);

  return (
    <>
      <input
        type="hidden"
        name="code"
        value={editorRef.current?.getValue() || defaultCode}
      />
      <Editor
        height="300px"
        defaultLanguage="javascript"
        defaultValue={defaultCode}
        onMount={(editor) => (editorRef.current = editor)}
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
      />
    </>
  );
}

// Export dynamic wrapper
export default dynamic(() => Promise.resolve(EditorClient), { ssr: false });
