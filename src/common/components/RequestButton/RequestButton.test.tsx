import { render, screen } from "@testing-library/react";
import MuiThemeProviders from "common/providers/MuiThemeProviders";
import RequestButton from "./RequestButton";

describe("<RequestButton />", () => {
  const buttonText = "Utwórz";

  it("should render passed in children", () => {
    render(
      <MuiThemeProviders>
        <RequestButton>{buttonText}</RequestButton>
      </MuiThemeProviders>
    );
    const button = screen.getByRole("button", { name: buttonText });

    expect(button).toBeInTheDocument();
  });

  it("should render loading spinner on loading and disable button", () => {
    render(
      <MuiThemeProviders>
        <RequestButton isLoading={true}>{buttonText}</RequestButton>
      </MuiThemeProviders>
    );
    const buttonWithText = screen.queryByRole("button", { name: buttonText });

    expect(buttonWithText).not.toBeInTheDocument();

    const button = screen.getByRole("button");
    const spinner = screen.getByRole("progressbar");

    expect(spinner).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });
});
