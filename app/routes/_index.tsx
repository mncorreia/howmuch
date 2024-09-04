import { Container, Heading, VStack } from "@chakra-ui/react";
import type { MetaFunction } from "@vercel/remix";
import { HowMuchForm } from "~/components/HowMuchForm";
import { Location } from "~/components/Location";

export const meta: MetaFunction = () => {
  return [
    { title: "How much?" },
    { name: "description", content: "How much that item in my currency?" },
  ];
};

export default function Index() {
  return (
    <Container maxW="md" css={{height: '100vh'}}>
      <VStack spacing={8} py={12}>
        <Heading as="h1" textAlign="left" size="2xl" width="100%">Quanto custa?</Heading>
        <Location />
        <HowMuchForm toExchangeRate={5.63} fromExchangeRate={0.1822} fee={0.065} />
      </VStack>
    </Container>
  );
}
