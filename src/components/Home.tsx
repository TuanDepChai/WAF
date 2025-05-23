import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    Stack,
    Flex,
} from "@chakra-ui/react"

const Home = () => {
    return (
        <Box minH="100vh">
            {/* Hero Section */}
            <Container maxW="container.xl" py={20}>
                <Stack gap={8} align="center" textAlign="center">
                    <Heading size="2xl">
                        Welcome to Our Platform
                    </Heading>
                    <Text fontSize="xl" color="gray.600" maxW="2xl">
                        A powerful solution for managing your projects, tasks, and team collaboration.
                        Get started today and experience the difference.
                    </Text>
                    <Flex gap={4}>
                        <Button size="lg" colorScheme="blue" className="text-black!">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline" className="text-black!">
                            Learn More
                        </Button>
                    </Flex>
                </Stack>
            </Container>

            {/* Features Section */}
            <Box bg="gray.50" py={20}>
                <Container maxW="container.xl">
                    <Stack gap={12}>
                        <Heading textAlign="center" mb={8}>
                            Key Features
                        </Heading>
                        <Flex gap={8} wrap="wrap">
                            {[
                                {
                                    title: "Project Management",
                                    description: "Organize and track your projects with ease"
                                },
                                {
                                    title: "Team Collaboration",
                                    description: "Work together seamlessly with your team"
                                },
                                {
                                    title: "Task Tracking",
                                    description: "Keep track of all your tasks and deadlines"
                                }
                            ].map((feature, index) => (
                                <Box
                                    key={index}
                                    flex="1"
                                    minW="300px"
                                    p={6}
                                    bg="white"
                                    borderRadius="lg"
                                    shadow="sm"
                                >
                                    <Heading size="md" mb={4}>
                                        {feature.title}
                                    </Heading>
                                    <Text color="gray.600">
                                        {feature.description}
                                    </Text>
                                </Box>
                            ))}
                        </Flex>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Home