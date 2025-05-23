import {
    Box,
    Flex,
    Heading,
    Text,
    Container,
    Stack,
} from "@chakra-ui/react"

const Dashboard = () => {
    return (
        <Box minH="100vh">
            {/* Header */}
            <Box as="header" py={4} px={8} borderBottom="1px" borderColor="gray.200">
                <Flex justify="space-between" align="center">
                    <Heading size="lg">Dashboard</Heading>
                </Flex>
            </Box>

            {/* Main Content */}
            <Container maxW="container.xl" py={8}>
                <Stack gap={6}>
                    <Box p={6} bg="white" borderRadius="lg" shadow="sm">
                        <Heading size="md" mb={4}>Welcome Back</Heading>
                        <Text color="gray.600">
                            This is your dashboard overview. You can add more content here.
                        </Text>
                    </Box>

                    <Box p={6} bg="white" borderRadius="lg" shadow="sm">
                        <Heading size="md" mb={4}>Quick Stats</Heading>
                        <Flex gap={4}>
                            <Box flex={1} p={4} bg="blue.50" borderRadius="md">
                                <Text fontWeight="bold">Total Users</Text>
                                <Text fontSize="2xl">1,234</Text>
                            </Box>
                            <Box flex={1} p={4} bg="green.50" borderRadius="md">
                                <Text fontWeight="bold">Active Projects</Text>
                                <Text fontSize="2xl">42</Text>
                            </Box>
                            <Box flex={1} p={4} bg="purple.50" borderRadius="md">
                                <Text fontWeight="bold">Tasks</Text>
                                <Text fontSize="2xl">89</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Dashboard 