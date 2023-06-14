import type { ReactNode } from "react";

import { screen, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import Test from ".";
import useLanguages from "../../hooks/useLanguages";

jest.mock("../../hooks/useLanguages");

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("Test Component", () => {
  beforeEach(() => {
    useLanguages.mockImplementation(() => ({
      data: undefined,
    }));
  });

  test("no data", () => {
    useLanguages.mockImplementation(() => ({
      data: undefined,
    }));

    render(<Test />, { wrapper });
    const list = screen.queryAllByRole("listitem");
    expect(list.length).toBe(0);
  });

  test("with data", async () => {
    useLanguages.mockImplementation(() => ({
      data: ["java", "javascript"],
    }));

    render(<Test />, { wrapper });

    const list = await screen.findAllByRole("listitem");
    expect(list.length).toBe(2);
  });
});
