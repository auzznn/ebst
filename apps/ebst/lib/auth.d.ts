export declare const auth: import("better-auth", { with: { "resolution-mode": "import" } }).Auth<{
    database: (options: import("better-auth", { with: { "resolution-mode": "import" } }).BetterAuthOptions) => import("better-auth", { with: { "resolution-mode": "import" } }).DBAdapter<import("better-auth", { with: { "resolution-mode": "import" } }).BetterAuthOptions>;
    plugins: [{
        id: "username";
        init(ctx: import("better-auth", { with: { "resolution-mode": "import" } }).AuthContext): {
            options: {
                databaseHooks: {
                    user: {
                        create: {
                            before(user: {
                                id: string;
                                createdAt: Date;
                                updatedAt: Date;
                                email: string;
                                emailVerified: boolean;
                                name: string;
                                image?: string | null | undefined;
                            } & Record<string, unknown>, context: import("better-auth", { with: { "resolution-mode": "import" } }).GenericEndpointContext | null): Promise<{
                                data: {
                                    displayUsername?: string | undefined;
                                    username?: string | undefined;
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    email: string;
                                    emailVerified: boolean;
                                    name: string;
                                    image?: string | null | undefined;
                                };
                            }>;
                        };
                        update: {
                            before(user: Partial<{
                                id: string;
                                createdAt: Date;
                                updatedAt: Date;
                                email: string;
                                emailVerified: boolean;
                                name: string;
                                image?: string | null | undefined;
                            }> & Record<string, unknown>, context: import("better-auth", { with: { "resolution-mode": "import" } }).GenericEndpointContext | null): Promise<{
                                data: {
                                    displayUsername?: string | undefined;
                                    username?: string | undefined;
                                    id?: string | undefined;
                                    createdAt?: Date | undefined;
                                    updatedAt?: Date | undefined;
                                    email?: string | undefined;
                                    emailVerified?: boolean | undefined;
                                    name?: string | undefined;
                                    image?: string | null | undefined;
                                };
                            }>;
                        };
                    };
                };
            };
        };
        endpoints: {
            signInUsername: import("better-auth", { with: { "resolution-mode": "import" } }).StrictEndpoint<"/sign-in/username", {
                method: "POST";
                body: import("better-auth", { with: { "resolution-mode": "import" } }).ZodObject<{
                    username: import("better-auth", { with: { "resolution-mode": "import" } }).ZodString;
                    password: import("better-auth", { with: { "resolution-mode": "import" } }).ZodString;
                    rememberMe: import("better-auth", { with: { "resolution-mode": "import" } }).ZodOptional<import("better-auth", { with: { "resolution-mode": "import" } }).ZodBoolean>;
                    callbackURL: import("better-auth", { with: { "resolution-mode": "import" } }).ZodOptional<import("better-auth", { with: { "resolution-mode": "import" } }).ZodString>;
                }, import("better-auth", { with: { "resolution-mode": "import" } }).$strip>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    description: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                            422: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                message: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                token: string;
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                } & {
                    username: string;
                    displayUsername: string;
                };
            }>;
            isUsernameAvailable: import("better-auth", { with: { "resolution-mode": "import" } }).StrictEndpoint<"/is-username-available", {
                method: "POST";
                body: import("better-auth", { with: { "resolution-mode": "import" } }).ZodObject<{
                    username: import("better-auth", { with: { "resolution-mode": "import" } }).ZodString;
                }, import("better-auth", { with: { "resolution-mode": "import" } }).$strip>;
            }, {
                available: boolean;
            }>;
        };
        schema: {
            user: {
                fields: {
                    username: {
                        type: "string";
                        required: false;
                        sortable: true;
                        unique: true;
                        returned: true;
                        transform: {
                            input(value: import("better-auth", { with: { "resolution-mode": "import" } }).DBPrimitive): string | number | boolean | Date | Record<string, unknown> | unknown[] | null | undefined;
                        };
                    };
                    displayUsername: {
                        type: "string";
                        required: false;
                        transform: {
                            input(value: import("better-auth", { with: { "resolution-mode": "import" } }).DBPrimitive): string | number | boolean | Date | Record<string, unknown> | unknown[] | null | undefined;
                        };
                    };
                };
            };
        };
        hooks: {
            before: {
                matcher(context: import("better-auth", { with: { "resolution-mode": "import" } }).HookEndpointContext): boolean;
                handler: (inputContext: import("better-auth", { with: { "resolution-mode": "import" } }).MiddlewareInputContext<import("better-auth", { with: { "resolution-mode": "import" } }).MiddlewareOptions>) => Promise<void>;
            }[];
        };
        options: import("better-auth/plugins", { with: { "resolution-mode": "import" } }).UsernameOptions | undefined;
        $ERROR_CODES: {
            EMAIL_NOT_VERIFIED: import("better-auth", { with: { "resolution-mode": "import" } }).RawError<"EMAIL_NOT_VERIFIED">;
            UNEXPECTED_ERROR: import("better-auth", { with: { "resolution-mode": "import" } }).RawError<"UNEXPECTED_ERROR">;
            INVALID_USERNAME_OR_PASSWORD: import("better-auth", { with: { "resolution-mode": "import" } }).RawError<"INVALID_USERNAME_OR_PASSWORD">;
            USERNAME_IS_ALREADY_TAKEN: import("better-auth", { with: { "resolution-mode": "import" } }).RawError<"USERNAME_IS_ALREADY_TAKEN">;
            USERNAME_TOO_SHORT: import("better-auth", { with: { "resolution-mode": "import" } }).RawError<"USERNAME_TOO_SHORT">;
            USERNAME_TOO_LONG: import("better-auth", { with: { "resolution-mode": "import" } }).RawError<"USERNAME_TOO_LONG">;
            INVALID_USERNAME: import("better-auth", { with: { "resolution-mode": "import" } }).RawError<"INVALID_USERNAME">;
            INVALID_DISPLAY_USERNAME: import("better-auth", { with: { "resolution-mode": "import" } }).RawError<"INVALID_DISPLAY_USERNAME">;
        };
    }];
    emailAndPassword: {
        enabled: true;
        autoSignIn: false;
        minPasswordLength: number;
    };
}>;
