import { render } from "@testing-library/react";
import App from "@/pages/_app";
import HomePage from "@/pages/index";

it("renders homepage unchanged", () => {
  const { container } = render(<App Component={HomePage} pageProps={{}} />);
  expect(container).toMatchSnapshot();
});
