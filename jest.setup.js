import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const wrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

global.renderWithQuery = (renderComponent) => {
  return render(renderComponent, { wrapper });
};
