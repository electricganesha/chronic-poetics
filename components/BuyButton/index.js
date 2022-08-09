import Script from "next/script";
import { useEffect } from "react";
import styles from "./BuyButton.module.scss";

function BuyButton() {
  useEffect(() => {
    try {
      if (window.ShopifyBuy) {
        const client = window.ShopifyBuy.buildClient({
          domain: "my-shop.myshopify.com",
          storefrontAccessToken: "your-storefront-access-token", // previously apiKey, now deprecated
        });

        const ui = window.ShopifyBuy.UI.init(client);

        ui.createComponent("product", {
          id: 1234567,
          node: document.getElementById("product-component-1659885178594"),
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className={styles.button}>
      <Script
        id="script/shopify-buy-button"
        key="script/shopify-buy-button"
        src="http://sdks.shopifycdn.com/buy-button/1.0.0/buybutton.js"
        // dangerouslySetInnerHTML={{ __html: script }}
      />
      <div id="product-component-1659885178594" />
    </div>
  );
}

export default BuyButton;
