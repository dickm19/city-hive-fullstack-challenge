interface User {
    username: string;
    password: string;
    phone_number: string;
    id?: string;
}

interface Message {
    content: string;
    recipient_number: string;
    sent_at?: string;
    formatted_phone_number?: string;
    id: string;
}

export type { User, Message };