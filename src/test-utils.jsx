import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppProviders from "common/providers/AppProviders";
import { BrowserRouter } from "react-router-dom";

const AllTheProviders = ({ children }) => {
  return (
    <AppProviders>
      <BrowserRouter>{children}</BrowserRouter>
    </AppProviders>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render, userEvent };
