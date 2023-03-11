import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfirmationDialog from "./ConfirmationDialog";

describe("<ConfirmationDialog />", () => {
  const props = {
    type: "success" as const,
    open: true,
    title: "Success!",
    mainButtonText: "Move to",
    handleClose: jest.fn(),
    handleClick: jest.fn(),
  };

  beforeEach(() => {
    render(<ConfirmationDialog {...props} />);
  });

  it("should correctly render dialog with passed in texts", async () => {
    const dialogTitle = await screen.findByRole("heading", {
      name: props.title,
    });
    const actionButton = await screen.findByRole("button", {
      name: props.mainButtonText,
    });
    const closeIconButton = screen.getByRole("button", { name: "Zamknij" });

    expect(dialogTitle).toBeInTheDocument();
    expect(actionButton).toBeInTheDocument();
    expect(closeIconButton).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  it("should render only one action button when oneAction prop is true", async () => {
    render(<ConfirmationDialog {...props} oneAction />);

    const actionButton = await screen.findByRole("button", {
      name: props.mainButtonText,
    });
    const buttons = await screen.findAllByRole("button");

    expect(actionButton).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });

  it("should call main action on primary button click", async () => {
    const actionButton = screen.getByRole("button", {
      name: props.mainButtonText,
    });

    await act(async () => userEvent.click(actionButton));

    expect(props.handleClick).toBeCalledTimes(1);
  });

  it("should close dialog on secondary button click", async () => {
    const SECONDARY_BUTTON_TEXT = /Zamknij/;

    const secondaryButton = screen.getByRole("button", {
      name: SECONDARY_BUTTON_TEXT,
    });

    await act(async () => userEvent.click(secondaryButton));
    expect(props.handleClose).toBeCalledTimes(1);
    expect(props.handleClick).not.toBeCalled();
  });
  it("should close dialog on close icon button", async () => {
    const closeIconButton = screen.getByRole("button", { name: "zamknij" });

    await act(async () => userEvent.click(closeIconButton));
    expect(props.handleClose).toBeCalledTimes(1);
    expect(props.handleClick).not.toBeCalled();
  });
});
