export declare class EmailService {
    private transporter;
    private readonly logger;
    constructor();
    sendWelcomeEmail(to: string): Promise<void>;
    sendLoginAlert(to: string): Promise<void>;
}
