import { Box, Container, Heading, Text, VStack, Image, Link, Flex, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="header" py={4} borderBottom="1px" borderColor="gray.200" alignItems="center">
        <Heading as="h1" size="lg" color="brand.800">Financial Times</Heading>
        <Spacer />
        <Link href="#" color="brand.700" fontWeight="bold" mx={2}>Home</Link>
        <Link href="#" color="brand.700" fontWeight="bold" mx={2}>World</Link>
        <Link href="#" color="brand.700" fontWeight="bold" mx={2}>Business</Link>
        <Link href="#" color="brand.700" fontWeight="bold" mx={2}>Tech</Link>
        <Link href="#" color="brand.700" fontWeight="bold" mx={2}>Markets</Link>
        <Link href="#" color="brand.700" fontWeight="bold" mx={2}>Opinion</Link>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/financial-times-main.jpg" alt="Main News" borderRadius="md" />
          <Heading as="h2" size="md" mt={4}>Main Headline</Heading>
          <Text mt={2}>This is the main headline of the Financial Times. It covers the most important news of the day.</Text>
        </Box>

        <Flex w="full" direction={{ base: "column", md: "row" }} spacing={4}>
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" mr={{ md: 4 }}>
            <Heading as="h3" size="sm">Secondary Headline 1</Heading>
            <Text mt={2}>This is a secondary headline. It covers other important news.</Text>
          </Box>
          <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" ml={{ md: 4 }}>
            <Heading as="h3" size="sm">Secondary Headline 2</Heading>
            <Text mt={2}>This is another secondary headline. It covers more important news.</Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;