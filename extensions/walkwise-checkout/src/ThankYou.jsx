import {
  reactExtension,
  Banner,
  BlockStack,
  Text,
} from '@shopify/ui-extensions-react/checkout';

// Renders on the Thank-you / Order-status page where the merchant places it.
export default reactExtension('purchase.thank-you.block.render', () => <WalkWiseThankYou />);

function WalkWiseThankYou() {
  return (
    <BlockStack spacing="base">
      <Banner status="success" title="Thank you for choosing WalkWise!">
        <BlockStack spacing="tight">
          <Text>
            Your order ships within 48 hours. You'll get a tracking number by email as soon as it's on its way.
          </Text>
          <Text size="small" appearance="subdued">
            A question? Our team is here Mon–Fri 8:30 AM–7 PM, Sat 10 AM–5 PM · bonjour@walkwise.store
          </Text>
        </BlockStack>
      </Banner>
    </BlockStack>
  );
}