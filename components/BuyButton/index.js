import { useEffect, useState } from "react";
import styles from "./BuyButton.module.scss";
import Spinner from "../Spinner";

function BuyButton() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedButton, setHasLoadedButton] = useState(false);

  useEffect(() => {
    try {
      const events = {
        afterInit: function (component) {
          setHasLoadedButton(true);
        },
        afterRender: function (component) {
          setIsLoading(false);
        },
      };

      if (window.ShopifyBuy && !hasLoadedButton) {
        const client = window.ShopifyBuy.buildClient({
          domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN,
          storefrontAccessToken:
            process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        });

        const ui = window.ShopifyBuy.UI.init(client);

        ui.createComponent("product", {
          id: 7205100257476,
          node: document.getElementById("product-component-book"),
          options: {
            product: {
              events: events,
            },
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [hasLoadedButton]);

  const showSpinner = !hasLoadedButton || isLoading;
  return (
    <div className={styles.button}>
      {showSpinner ? <Spinner /> : null}
      <div id="product-component-book" className={styles.button__shopify} />
    </div>
  );
}

export default BuyButton;
