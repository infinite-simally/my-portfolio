import { RefObject } from "react";

const scrollToBottom = (bottomEl: RefObject<HTMLDivElement>) => {
  bottomEl?.current?.scrollIntoView({ behavior: "smooth" });
};

export default scrollToBottom;
