import {
    Box,
    Flex,
    Heading,
    Text,
    Container,
    Stack,
    Button,
    Image,
    SimpleGrid,
    Icon,
} from "@chakra-ui/react"
import { FaShieldAlt, FaBug, FaChartLine, FaKey, FaServer, FaUserShield } from "react-icons/fa"
import heroDashboard from "../assets/hero-dashboard.png"
import Footer from "./Footer";
import Header from "./Header";

const features = [
    {
        icon: FaShieldAlt,
        title: "DDoS Protection",
        desc: "Advanced protection against distributed denial-of-service attacks, ensuring your applications remain available even during large-scale attacks.",
    },
    {
        icon: FaBug,
        title: "Zero-Day Vulnerability Protection",
        desc: "Proactive defense against unknown vulnerabilities with AI-powered threat detection and virtual patching technology.",
    },
    {
        icon: FaUserShield,
        title: "OWASP Top 10 Coverage",
        desc: "Comprehensive protection against the most critical web application security risks identified by the Open Web Application Security Project.",
    },
    {
        icon: FaKey,
        title: "API Security",
        desc: "Dedicated protection for your APIs with schema validation, rate limiting, and anomaly detection to prevent abuse and data exfiltration.",
    },
    {
        icon: FaChartLine,
        title: "Real-time Analytics",
        desc: "Detailed insights into traffic patterns, attack vectors, and security events with customizable dashboards and alerts.",
    },
    {
        icon: FaServer,
        title: "Global CDN Integration",
        desc: "Seamless integration with leading content delivery networks to provide both security and performance optimization.",
    },
];

const Dashboard = () => {
    // Hardcoded dark theme colors
    const bg = "#0a1020";
    const statBg = "#232b47";
    const statColor = "#fff";
    return (
        <>
            <Header />
            <Box minH="150vh" bg={bg} px={0} py={0}>
                {/* Header */}
                <Box
                    py={10}
                    bgGradient="linear(to-r, #1e3a8a, #0a1020)"
                    borderBottom="1px"
                    borderColor="#232b47"
                    boxShadow="lg"
                    width="100vw"
                >
                    <Container maxW="container.xl" px={8}>
                        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={10}>
                            <Box flex={1}>
                                <Heading size="4xl" color="white" mb={4} fontWeight={"bold"}>
                                    Protect Your Web Applications with <Box as="span" color="#3b82f6">F-Guard WAF</Box>
                                </Heading>
                                <Text color="gray" fontSize="lg" mb={6}>
                                    A modern Web Application Firewall solution designed to protect your web applications from cyber attacks.
                                </Text>
                                <Flex gap={4}>
                                    <Button colorScheme="blue" size="lg" className="text-black!">
                                        Get Started For Free
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        Learn More
                                    </Button>
                                </Flex>
                            </Box>
                            <Box flex={1} display={{ base: "none", md: "block" }}>
                                <Image
                                    src={heroDashboard}
                                    alt="Dashboard Preview"
                                    borderRadius="lg"
                                    boxShadow="2xl"
                                />
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                {/* Stats Section */}
                <Container maxW="container.xl" py={12}>
                    <Stack gap={8}>
                        <Heading size="lg" color="white" mb={2} fontWeight={"medium"} textAlign={"center"}>
                            Advanced Protection
                        </Heading>
                        <Text color="gray" fontSize="3xl" fontWeight={"bold"} textAlign={"center"} mb={10}>
                            Comprehensive Security Features
                        </Text>
                        <Flex gap={6} flexWrap="wrap">
                            <Box
                                flex={1}
                                minW="220px"
                                p={6}
                                bg={statBg}
                                borderRadius="lg"
                                boxShadow="md"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "scale(1.05)",
                                    boxShadow: "2xl",
                                    bg: "#16213e",
                                }}
                            >
                                <Text fontWeight="bold" color="#3b82f6">
                                    Total Users
                                </Text>
                                <Text fontSize="3xl" color={statColor} fontWeight="extrabold">
                                    1,234
                                </Text>
                            </Box>
                            <Box
                                flex={1}
                                minW="220px"
                                p={6}
                                bg={statBg}
                                borderRadius="lg"
                                boxShadow="md"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "scale(1.05)",
                                    boxShadow: "2xl",
                                    bg: "#153e2e",
                                }}
                            >
                                <Text fontWeight="bold" color="#4ade80">
                                    Active Projects
                                </Text>
                                <Text fontSize="3xl" color={statColor} fontWeight="extrabold">
                                    42
                                </Text>
                            </Box>
                            <Box
                                flex={1}
                                minW="220px"
                                p={6}
                                bg={statBg}
                                borderRadius="lg"
                                boxShadow="md"
                                transition="all 0.3s"
                                _hover={{
                                    transform: "scale(1.05)",
                                    boxShadow: "2xl",
                                    bg: "#2a1e3a",
                                }}
                            >
                                <Text fontWeight="bold" color="#a78bfa">
                                    Key Sold
                                </Text>
                                <Text fontSize="3xl" color={statColor} fontWeight="extrabold">
                                    89
                                </Text>
                            </Box>
                        </Flex>
                    </Stack>
                </Container>

                {/* Features/Protection Cards */}
                <Container maxW="container.xl" py={8}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                        {features.map((feature, idx) => (
                            <Box
                                key={idx}
                                bg={statBg}
                                borderRadius="lg"
                                boxShadow="md"
                                p={6}
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-8px) scale(1.03)",
                                    boxShadow: "2xl",
                                    bg: "#181f36",
                                }}
                            >
                                <Flex align="center" mb={4}>
                                    <Icon as={feature.icon} w={8} h={8} color="#3b82f6" mr={3} />
                                    <Heading size="md" color="white">{feature.title}</Heading>
                                </Flex>
                                <Text color="gray.300" mb={4}>{feature.desc}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>

                {/* Pricing Plans */}
                <Container maxW="container.xl" py={12}>
                    <Heading size="lg" color="white" mb={2} fontWeight="medium" textAlign="center">
                        Pricing Plans
                    </Heading>
                    <Text color="gray.300" fontSize="lg" textAlign="center" mb={10}>
                        Enterprise-grade WAF protection with flexible pricing options to meet your organization's security needs
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                        {/* Business Plan */}
                        <Box bg="#181f36" borderRadius="lg" boxShadow="md" p={8} color="white" border="1px solid #232b47">
                            <Heading size="md" mb={2}>Business</Heading>
                            <Text color="gray.400" mb={4}>For small to medium businesses with standard security needs</Text>
                            <Text fontSize="3xl" fontWeight="bold" color="#3b82f6" mb={1}>$1,499<Text as="span" fontSize="md" color="gray.300">/month</Text></Text>
                            <Text fontWeight="bold" mt={4} mb={2}>Included features:</Text>
                            <Stack gap={1} fontSize="md" mb={4}>
                                <Text>✔ Up to 10 web applications</Text>
                                <Text>✔ Basic DDoS protection</Text>
                                <Text>✔ OWASP Top 10 protection</Text>
                                <Text>✔ SSL/TLS encryption</Text>
                                <Text>✔ 5 custom security rules</Text>
                                <Text>✔ Basic reporting</Text>
                                <Text>✔ Email support (business hours)</Text>
                                <Text>✔ 99.9% uptime SLA</Text>
                            </Stack>
                            <Text fontWeight="bold" mb={2}>Not included:</Text>
                            <Stack gap={1} fontSize="md" color="gray.500" mb={6}>
                                <Text>✗ Advanced bot protection</Text>
                                <Text>✗ API security</Text>
                                <Text>✗ Virtual patching</Text>
                                <Text>✗ Custom integrations</Text>
                            </Stack>
                            <Button colorScheme="blue" width="100%" className="text-black!">Get Started</Button>
                        </Box>

                        {/* Enterprise Plan */}
                        <Box bg="#181f36" borderRadius="lg" boxShadow="md" p={8} color="white" border="2px solid #3b82f6" position="relative">
                            <Box position="absolute" top={4} right={4} bg="#3b82f6" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="bold">
                                Popular
                            </Box>
                            <Heading size="md" mb={2}>Enterprise</Heading>
                            <Text color="gray.400" mb={4}>For organizations with advanced security requirements</Text>
                            <Text fontSize="3xl" fontWeight="bold" color="#3b82f6" mb={1}>$3,999<Text as="span" fontSize="md" color="gray.300">/month</Text></Text>
                            <Text fontWeight="bold" mt={4} mb={2}>Included features:</Text>
                            <Stack gap={1} fontSize="md" mb={4}>
                                <Text>✔ Up to 50 web applications</Text>
                                <Text>✔ Advanced DDoS protection</Text>
                                <Text>✔ OWASP Top 10 protection</Text>
                                <Text>✔ SSL/TLS encryption</Text>
                                <Text>✔ Zero-day attack prevention</Text>
                                <Text>✔ API security</Text>
                                <Text>✔ Virtual patching</Text>
                                <Text>✔ 25 custom security rules</Text>
                                <Text>✔ Advanced reporting & analytics</Text>
                                <Text>✔ 24/7 email and phone support</Text>
                                <Text>✔ 99.95% uptime SLA</Text>
                                <Text>✔ Dedicated security engineer</Text>
                            </Stack>
                            <Text fontWeight="bold" mb={2}>Not included:</Text>
                            <Stack gap={1} fontSize="md" color="gray.500" mb={6}>
                                <Text>✗ Custom integrations</Text>
                            </Stack>
                            <Button colorScheme="blue" className="text-black!" width="100%" variant="solid" bgGradient="linear(to-r, #3b82f6, #2563eb)">Get Started</Button>
                        </Box>

                        {/* Ultimate Plan */}
                        <Box bg="#181f36" borderRadius="lg" boxShadow="md" p={8} color="white" border="1px solid #232b47">
                            <Heading size="md" mb={2}>Ultimate</Heading>
                            <Text color="gray.400" mb={4}>For large enterprises with mission-critical applications</Text>
                            <Text fontSize="3xl" fontWeight="bold" color="#3b82f6" mb={1}>10,000$</Text>
                            <Text fontWeight="bold" mt={4} mb={2}>Included features:</Text>
                            <Stack gap={1} fontSize="md" mb={4}>
                                <Text>✔ Unlimited web applications</Text>
                                <Text>✔ Premium DDoS protection</Text>
                                <Text>✔ OWASP Top 10 protection</Text>
                                <Text>✔ SSL/TLS encryption</Text>
                                <Text>✔ Zero-day attack prevention</Text>
                                <Text>✔ Advanced API security</Text>
                                <Text>✔ Virtual patching</Text>
                                <Text>✔ Unlimited custom security rules</Text>
                                <Text>✔ Real-time threat intelligence</Text>
                                <Text>✔ Advanced reporting & analytics</Text>
                                <Text>✔ 24/7 priority support</Text>
                                <Text>✔ 99.99% uptime SLA</Text>
                                <Text>✔ Dedicated security team</Text>
                                <Text>✔ Custom integrations</Text>
                                <Text>✔ On-site deployment option</Text>
                            </Stack>
                            <Button colorScheme="blue" className="text-black!" width="100%" variant="outline">Contact Sales</Button>
                        </Box>
                    </SimpleGrid>
                </Container>

                {/* Example: Recent Activity/Logs */}
                <Container maxW="container.xl" py={8}>
                    <Heading size="md" color="white" mb={4}>Recent Activity</Heading>
                    <Box bg={statBg} borderRadius="lg" p={6} color="gray.200">
                        <Text>• [12:01] Blocked suspicious login attempt from 192.168.1.10</Text>
                        <Text>• [11:45] New API key generated for user JohnDoe</Text>
                        <Text>• [11:30] DDoS attack mitigated (2,000 requests/sec)</Text>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Dashboard 