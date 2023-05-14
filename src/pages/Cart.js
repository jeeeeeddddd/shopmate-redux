import { useTitle } from "../hooks/useTitle";
import { useSelector } from "react-redux";
import { CartCard } from "../components";

export const Cart = () => {
  useTitle("Cart");
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  return (
    <main>
      <section>
        <div className="cart">
          <h1>Cart Items: {cartList.length}</h1>
          { cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          )) }
        </div>
        <h1 className="totalprice">${total}</h1>        
      </section>
    </main>
  )
}
