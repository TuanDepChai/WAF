import {
    Button,
    Field,
    Fieldset,
    Input,
    Stack,
} from "@chakra-ui/react"

const Login = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <form onSubmit={handleSubmit}>
            <Fieldset.Root size="lg" maxW="md">
                <Stack>
                    <Fieldset.Legend>Login</Fieldset.Legend>
                </Stack>

                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>Email</Field.Label>
                        <Input name="email" />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Password</Field.Label>
                        <Input name="password" type="password" />
                    </Field.Root>

                </Fieldset.Content>

                <Button type="submit" alignSelf="flex-start" className="w-100 bg-blue-500! text-black!">
                    Submit
                </Button>
            </Fieldset.Root>
        </form>
    )
}

export default Login;
