import { render } from "@testing-library/react";
import App from "@/pages/_app";
import RoadmapPage from "@/pages/roadmap";

it("renders roadmap unchanged", () => {
  const { container } = render(<App Component={RoadmapPage} pageProps={{}} />);
  expect(container).toMatchSnapshot();
});
