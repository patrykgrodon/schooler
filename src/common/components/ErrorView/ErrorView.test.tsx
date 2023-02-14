import { render, screen } from "test-utils";
import ErrorView, { defaultErrorText } from "./ErrorView";

describe("<ErrorView />", () => {
  it("should render default text if no text prop passed", () => {
    render(<ErrorView />);
    expect(screen.getByText(defaultErrorText)).toBeInTheDocument();
  });

  it("should render text from passed text prop", () => {
    const errorText = "error";
    render(<ErrorView text={errorText} />);
    screen.debug();
    expect(screen.getByText(errorText)).toBeInTheDocument();
  });
});
