/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Router from "../../components/Router";
import { getCurrentPath } from "../../utils/getCurrenPath";

vi.mock("../../utils/getCurrentPath.js", () => {
  return {
    getCurrentPath: vi.fn(),
  };
});

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("should render correctly", () => {
    render(<Router routes={[]} />);
    expect(true).toBe(true);
  });

  it("should render 404 if no route is found", () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText("404")).toBeDefined();
  });

  it('should render "Home" if path is "/"', () => {
    getCurrentPath.mockReturnValue("/");

    render(<Router routes={[{ path: "/", component: () => <h1>Home</h1> }]} />);
    expect(screen.getByText("Home")).toBeDefined();
  });
});
