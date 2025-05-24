import {
    Button,
    Container,
    Field,
    Input,
    VStack,
    Heading,
    TabsRoot,
    TabsList,
    TabsTrigger,
    Flex,
} from "@chakra-ui/react"
import { useState } from "react";

const Login = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }

    return (
        <Container
            minH="100vh"
            maxW="100%"
            bg="#0a1020"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Flex>
                <VStack
                    w="xl"
                    maxW="md"
                    bg="white"
                    px={30}
                    py={10}
                    borderRadius="lg"
                    boxShadow="xl"
                    gap={6}
                >
                    <TabsRoot variant={"line"} defaultValue={"login"} width={"full"}>
                        <TabsList>
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                        </TabsList>
                    </TabsRoot>
                    
                    <Heading size="lg" color="blue.500">Login</Heading>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <VStack gap={4} w="full">
                            <Field.Root>
                                <Field.Label>Email</Field.Label>
                                <Input
                                    name="email"
                                    placeholder="Enter your email"
                                    size="lg"
                                    variant="outline"
                                />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Password</Field.Label>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    size="lg"
                                    variant="outline"
                                />
                            </Field.Root>

                            <Button
                                type="submit"
                                variant={"solid"}
                                bg={"blue.500"}
                                color={"white"}
                                size="lg"
                                width="full"
                                mt={4}
                            >
                                Sign In
                            </Button>
                        </VStack>
                    </form>
                </VStack>
            </Flex>
        </Container>
    )
}

export default Login;
