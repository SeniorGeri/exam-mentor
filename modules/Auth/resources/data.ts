export type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

export interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    phone: string;
    instructor: boolean;
};

export interface ResetPasswordProps {
    token: string;
    email: string;
}

export type ResetPasswordForm = {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
};