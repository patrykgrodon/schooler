import { render, screen } from "test-utils";
import RequestButton from "./RequestButton";

describe("<RequestButton />", () => {
  const buttonText = "Utwórz";

  it("should render passed in children", () => {
    render(<RequestButton>{buttonText}</RequestButton>);
    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });

  it("should render loading spinner on loading and disable button", () => {
    render(<RequestButton isLoading={true}>{buttonText}</RequestButton>);
    const buttonWithText = screen.queryByRole("button", { name: buttonText });

    expect(buttonWithText).not.toBeInTheDocument();

    const button = screen.getByRole("button");
    const spinner = screen.getByRole("progressbar");

    expect(spinner).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });
});
