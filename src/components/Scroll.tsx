import { PropsWithChildren } from "react";

export default function Scroll(props: PropsWithChildren) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
}
