import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Title } from "./index";
import type { TitleProps } from "./index"
import { ThemeProvider } from "styled-components";

const TestComponent = (props: TitleProps) => {
  const theme = {
    colors: {
      primary: "#134277",
    }
  }

  return <ThemeProvider theme={theme}><Title {...props} /></ThemeProvider>
}

// should display children text
test("should display children text", () => {
  const { getByText } = render(<TestComponent>Hello World</TestComponent>);
  expect(getByText("Hello World")).toBeInTheDocument();
});

// should be primary color
test("should be primary color", () => {
  const { getByText } = render(<TestComponent>Hello World</TestComponent>);
  expect(getByText("Hello World")).toHaveStyle(`color: #134277`);
});

// should be an h2
test("should be an h2", () => {
  const { getByText } = render(<TestComponent>Hello World</TestComponent>);
  expect(getByText("Hello World").tagName).toBe("H2");
});