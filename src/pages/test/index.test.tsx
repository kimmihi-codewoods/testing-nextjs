import type { JSX, ReactNode } from "react";
import type { RenderOptions } from "@testing-library/react";
import type { LanguagesHooksReturn } from "../../hooks/useLanguages";

import { screen, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import Test from ".";
import useLanguages from "../../hooks/useLanguages";

declare global {
  const renderWithQuery: (renderComponent: ReactNode) => RenderOptions;
}

jest.mock("../../hooks/useLanguages");

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("Test Component", () => {
  const mockedUseLanguages =
    useLanguages as unknown as jest.Mock<LanguagesHooksReturn>;
  beforeEach(() => {
    mockedUseLanguages.mockImplementation(() => ({
      data: undefined,
    }));
  });

  test("no data", () => {
    mockedUseLanguages.mockImplementation(() => ({
      data: undefined,
    }));

    render(<Test />, { wrapper });
    const list = screen.queryAllByRole("listitem");
    expect(list.length).toBe(0);
  });

  test("with data", async () => {
    mockedUseLanguages.mockImplementation(() => ({
      data: ["java", "javascript"],
    }));

    renderWithQuery(<Test />);

    const list = await screen.findAllByRole("listitem");
    expect(list.length).toBe(2);
  });
});
