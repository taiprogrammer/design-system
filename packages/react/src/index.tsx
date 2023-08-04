import { styled } from "./styles/index";

const Button = styled("button", {
  fontFamily: "$default",
  background: "$ignite500",
  borderRadius: "$md",
});

export function App() {
  return <Button>Hello world!</Button>;
}
