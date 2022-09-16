import React from "react";
import { render, screen } from "../test-utils";
import { waitFor } from "@testing-library/react";
import { getProductsHandler } from "../../api-mocks/handlers";

import { mswServer } from "../../api-mocks/msw-server";
import Home from "@pages/index";

describe("Home", () => {
  // TODO it should remove selected products on delete
  // TODO it should render a button with number of items selected

  it("should render the heading", () => {
    render(<Home />);
    const heading = screen.getByText(/POQ/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render a List of Products", async () => {
    mswServer.use(getProductsHandler);
    render(<Home />);
    let products;
    await waitFor(() => (products = screen.getAllByRole("listitem")));
    expect(products.length).toBe(3);
  });

  it("should display, name, image, price of first product in list", async () => {
    mswServer.use(getProductsHandler);
    render(<Home />);

    const productName = await screen.findByText(
      /Rose Gold Shimmer Clutch Bag/i,
    );
    const productPrice = await screen.findByText(/9.09/i);
    const productImg = await screen.getAllByRole("img")[0];

    await waitFor(() => expect(productName).toBeInTheDocument());
    await waitFor(() => expect(productPrice).toBeInTheDocument());
    await waitFor(() => expect(productImg).toBeInTheDocument());
  });
});
