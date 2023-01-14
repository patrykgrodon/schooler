import { render, screen } from "test-utils";
import UserAvatar from "./UserAvatar";

describe("<UserAvatar />", () => {
  const url = "https://cdn-icons-png.flaticon.com/512/124/124010.png";
  const userInitials = "PT";
  const ariaLabel = "awatar użytkownika";
  it("should render avatar with user initials when url prop is not passed", () => {
    render(<UserAvatar userInitials={userInitials} />);
    const userAvatar = screen.getByLabelText(ariaLabel);
    const image = screen.queryByRole("img");
    expect(image).not.toBeInTheDocument();
    expect(userAvatar).toHaveTextContent(userInitials);
  });
  it("should render avatar as image when url prop is passed", () => {
    render(<UserAvatar userInitials={userInitials} url={url} />);
    const userAvatar = screen.getByLabelText(ariaLabel);
    const image = screen.getByRole("img");
    expect(userAvatar).not.toHaveTextContent(userInitials);
    expect(image).toHaveAttribute("src", url);
  });
});
