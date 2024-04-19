'use client'

import { useState } from "react";
import JoinForm from "./join-form";
import { validateSignup } from "@/lib/validations";
import { toast } from "@/components/ui/use-toast";
import { createUserAction, generatePromptForUser } from "@/lib/actions/user";
import { User } from "@/lib/types";

const getTimeZone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
}

export default function Join() {
    const [user, setUser] = useState<User | undefined>({ timezone: getTimeZone() })

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        const { status, message } = await validateSignup(user)
        if (!status) {
            toast({
                variant: "destructive",
                title: "Registration failed",
                description: message,
            })
            return
        }
        const { isSuccess, isError, error, data: createdUser } = await createUserAction(user!);
        if (isSuccess) {
            toast({
                variant: "success",
                title: "Registration successful",
                description: "Thank you for joining affirmations. You will receive an email shortly.",
            })
            generatePromptForUser(createdUser!)
            setUser(undefined)
        } else {
            toast({
                variant: "destructive",
                title: "Registration failed",
                description: error!.message
            })
        }
    }

    return (
        <JoinForm user={user} setUser={setUser} onSubmit={handleSignup} />
    )
}