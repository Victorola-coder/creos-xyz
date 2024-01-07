
const TRANSACTION_DESC_TYPES = {
    MEMBERSHIP_FEE: 'MEMBERSHIP_FEE'
}
const TRANSACTION_TYPES = {
    WW: 'WW', // Wallet to Wallet
    WE: 'WE', // Wallet to External
    EW: 'EW' // External to Wallet
}

export const appConfig = {
    CONTACT_EMAIL: 'elijahsoladoye@rocketmail.com',
    ERROR_MESSAGES: {
        InvalidCredentialsProvided: 'Invalid Credentials Provided.',
        AuthenticationError: 'Authentication Error.',
        BadRequestError: 'Bad Request Error.',
        InternalServerError: 'Internal Server Error.',
        UserAlreadyExists: 'This email address provided is associated with an existing account.',
        InvalidLinkProvided: 'The link provided is either invalid or has expired.',
        ResourceNotFound: 'Unable to process. Resource not found.',
        AlreadyInWaitlist: 'You\'re already in the waitlist.',
        AlreadySubscribed: 'You have already subcribed to our newsletter.',
        AlreadyLinked: 'You have already submitted your LinkedIn Profile, thank you.',
        AlreadySubmitted: 'You have already submitted this form, thank you.',
    },
    STRINGS: {
        RegistrationSuccessful: 'Registration successful.',
        PasswordLinkSent: 'A password reset link has been sent to your email account.',
        PasswordResetSuccessful: 'Password has been reset successfully.',
        PasswordChangeSuccessful: 'Password changed successfully.',
        PasswordLinkEmailTitle: 'Password reset.',
        NewContactSubmission: 'New Contact Submission.',
        JoinedWaitlistSuccessfully: 'Congratulations! you\'ve joined the waitlist successfully.',
        SubscribedSuccessfully: 'Congratulations! you\'ve subscribed to our newsletter successfully.',
        LinkedInSuccessfully: 'Thank you! we\'ve received your LinkedIn URL, we\'ll be in touch.',
        SubmittedSuccessfully: 'Thank you! we\'ve received your submission, we\'ll be in touch.',
        Success: 'Success'
    },
    PRODUCT_OPTIONS: ['Creos Edu', 'Creos Lab', 'Creos Token'],
    GENDERS: ['M', 'F'],
    ROLES: ['user', 'admin'],
    MEMBERSHIP_FEE: 50000,
    TRANSACTION_DESC_TYPES,
    TRANSACTION_TYPES,
    TRANSACTION_DESC_TYPES_ENUM: [
        TRANSACTION_DESC_TYPES.MEMBERSHIP_FEE
    ],
    TRANSACTION_TYPES_ENUM: [
        TRANSACTION_TYPES.WW,
        TRANSACTION_TYPES.WE,
        TRANSACTION_TYPES.EW
    ]
}