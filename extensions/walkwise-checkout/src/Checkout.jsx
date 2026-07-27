import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
} from '@shopify/ui-extensions-react/checkout';

// Renders wherever the merchant places the app block in the Checkout editor.
export default reactExtension('purchase.checkout.block.render', () => <WalkWiseReassurance />);

function WalkWiseReassurance() {
  return (
    <BlockStack spacing="base">
      <Banner status="success" title="60-Day Money-Back Guarantee">
        <BlockStack spacing="tight">
          <Text>
            Not fully satisfied? Email help@walkwise.shop for a full refund — no questions asked.
          </Text>
          <Text size="small" appearance="subdued">
            ✓ Free shipping, dispatched within 48h   ✓ Secure SSL-encrypted payment   ✓ Recommended by occupational therapists
          </Text>
        </BlockStack>
      </Banner>
    </BlockStack>
  );
}