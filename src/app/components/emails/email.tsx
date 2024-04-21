import { Button, Html, Text } from '@react-email/components';

type EmailProps = {
    url: string,
    content: string
}

export default function Email({ url, content }: EmailProps) {

    return (
        <Html lang="en">
            <Text>{content}</Text>
            <Button href={url}>Click me</Button>
        </Html>
    );
}