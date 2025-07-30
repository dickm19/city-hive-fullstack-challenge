interface User {
    username: string;
    password: string;
    phone_number: string;
}

interface Message {
    user_id: string;
    content: string;
    timestamp: Date;
}

export type { User, Message };