interface User {
    username: string;
    password: string;
    phone_number: string;
}

interface Message {
    content: string;
    recipient_number: string;
}

export type { User, Message };