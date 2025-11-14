import { render, type RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { appTheme } from "@/theme/appTheme";
import type { MockLink } from "@apollo/client/testing";
import type { ReactElement } from "react";
import { MockedProvider } from "@apollo/client/testing/react";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  mocks?: MockLink.MockedResponse[];
}

export function renderWithProviders(
  ui: ReactElement,
  { mocks = [], ...renderOptions }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <MockedProvider mocks={mocks}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MockedProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
