// src/components/Header.tsx
import { Box, Flex, Button, Image, useDisclosure } from "@chakra-ui/react";
import AuthModal from "./AuthModal";

const Header = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="100"
      bg="#0a1020"
      borderBottom="1px solid #232b47"
      boxShadow="sm"
      px={0}
      py={2}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        align="center"
        justify="space-between"
        px={8}
      >
        <Flex align="center" gap={3}>
          <Image src={logo} alt="Logo" boxSize="36px" />
          <Box fontWeight="bold" color="#3b82f6" fontSize="xl">
            F-Guard WAF
          </Box>
        </Flex>
        <Button colorScheme="blue" size="md" className="text-black!" onClick={onOpen}>
          Log in
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;