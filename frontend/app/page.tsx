"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <div>
      <div className="flex gap-6">
        <textarea
          className="p-4 border rounded-xl w-2xl h-[600px] whitespace-pre overflow-x-auto resize-x"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="border p-2 w-2xl h-[450px] whitespace-pre overflow-x-auto">
          {text}
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen gap-12">
        <div>
          <h1 className="text-2xl">入力</h1>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <textarea
              className="p-4 rounded-xl border w-[520px] h-[200px] whitespace-pre overflow-x-auto resize-x"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <textarea
              className="p-4 rounded-xl border w-[520px] h-[200px] whitespace-pre overflow-x-auto resize-x"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <textarea
              className="p-4 rounded-xl border w-[520px] h-[200px] whitespace-pre overflow-x-auto resize-x"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl">出力</h1>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <textarea
              className="p-4 rounded-xl border w-[520px] h-[200px] whitespace-pre overflow-x-auto resize-x"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <textarea
              className="p-4 rounded-xl border w-[520px] h-[200px] whitespace-pre overflow-x-auto resize-x"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <textarea
              className="p-4 rounded-xl border w-[520px] h-[200px] whitespace-pre overflow-x-auto resize-x"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="border-t-2 border-black h-[42px] mt-6"></div>
    </div>
  );
}
