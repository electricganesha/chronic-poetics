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
          id: 8447396610312,
          node: document.getElementById("product-component-1708024484915"),
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
      <div
        id="product-component-1708024484915"
        className={styles.button__shopify}
      />
    </div>
  );
}

export default BuyButton;
