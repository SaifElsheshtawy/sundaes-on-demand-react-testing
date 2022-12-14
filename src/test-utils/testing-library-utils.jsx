import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../constexts/OrderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

//rexport everything

export * from "@testing-library/react";

// override render method

export { renderWithContext as render };
