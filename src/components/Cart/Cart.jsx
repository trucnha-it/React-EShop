import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length <= 0) {
              return <EmptyCart />;
            } else {
              return (
                <React.Fragment>
                  <Title name="your" title="cart"></Title>
                  <CartColumns cart={cart}></CartColumns>
                  <CartList value = {value}></CartList>
                  <CartTotals value={value} history={this.props.history}></CartTotals>
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
