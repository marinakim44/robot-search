export default function Scroll(props) {
  console.log(props);
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
