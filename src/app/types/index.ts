export interface User {
    id: number;
    /** True, if this user is a bot. Returns in the receiver field only. */
    is_bot?: boolean;
    /** First name of the user or bot. */
    first_name: string;
    /** Last name of the user or bot. */
    last_name?: string;
    /** Username of the user or bot. */
    username?: string;
    /** IETF language tag of the user's language. Returns in user field only. */
    language_code?: string;
    /** True, if this user is a Telegram Premium user. */
    is_premium?: true;
    /** True, if this user added the bot to the attachment menu. */
    added_to_attachment_menu?: true;
    /** True, if this user allowed the bot to message them. */
    allows_write_to_pm?: true;
    /**
     * URL of the user’s profile photo. The photo can be in .jpeg or .svg
     * formats. Only returned for Web Apps launched from the attachment menu.
     */
    photo_url?: string;
}