// src/components/Footer.tsx
import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => (
    <Box as="footer" bg="#181f36" py={6}>
        <Flex maxW="container.xl" mx="auto" px={8} justify="space-between" align="center">
            <Text color="gray.400" fontSize="sm">
                © {new Date().getFullYear()} F-Guard WAF. All rights reserved.
            </Text>
            <Text color="gray.500" fontSize="sm">
                Built with Chakra UI
            </Text>
        </Flex>
    </Box>
);

export default Footer;