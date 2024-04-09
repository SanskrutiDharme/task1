import React from "react";
import { Text, Heading } from "./..";

export default function ForEmployersLogo({ rework, ai = "ai", ...props }) {
  return (
    <div {...props}>
      <div className="flex items-center gap-1 flex-wrap">
        <Heading
          size="lg"
          as="h1"
          className="pl-[7px] !text-white-A700_01 tracking-[-0.71px] !font-outfit !text-[35.5px] border-deep_purple-600 border border-solid rounded-[5px]"
        >
          <span className="text-deep_purple-600">r</span>
          <span className="text-deep_purple-600 tracking-[2.84px]">e</span>
          <span className="text-white-A700_01 font-actor font-normal">work</span>
        </Heading>
        <Text size="xs" as="p" className="self-end mb-1 !text-white-A700_01 !font-gilroyregular !text-[11.43px]">
          {ai}
        </Text>
      </div>
    </div>
  );
}
