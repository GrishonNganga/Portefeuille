import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css'; import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User } from "@/lib/types";

type JoinFormProps = {
    user?: User,
    setUser: (user: any) => void,
    onSubmit: (e: React.FormEvent) => void
}

const vibes = [
    "Uplifting",
    "Cute",
    "Selfcare",
    "WCW",
    "MCM",
    "Quit slacking"
]

export default function JoinForm({ user, setUser, onSubmit }: JoinFormProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser((prevState: User): User => ({ ...prevState, [e.target.name]: e.target.value }));
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" name="firstname" placeholder="Enter your first name" value={user?.firstname || ""} required onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" name="lastname" placeholder="Enter your last name" required value={user?.lastname || ""} onChange={handleChange} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" name="email" required type="email" value={user?.email || ""} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Phone</Label>
                    <PhoneInput
                        inputProps={{ style: { width: "100%", borderRadius: '0.8rem', borderEndStartRadius: 0, borderStartStartRadius: 0 } }}
                        onChange={(phone) => {
                            setUser((prevState: User): User => ({ ...prevState, "phone": phone }));
                        }}
                        placeholder="Enter your phone number" name="phone" required value={user?.phone || ""} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea className="min-h-[100px]" id="bio" name="bio" value={user?.bio || ""} placeholder="Tell me about yourself, what you love and enjoy, what you struggle with, what you want to achieve." onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bio">Inspiration</Label>
                    <Textarea className="min-h-[100px]" id="inspiration" name="inspiration" placeholder="Who are some of the idols who inspire you?" onChange={handleChange} value={user?.inspiration || ""} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="vibe">Vibe</Label>
                    <div className="flex flex-wrap gap-2">
                        {
                            vibes.map((vibe) => {
                                if (user?.vibe?.includes(vibe)) {
                                    return (
                                        <Badge
                                            onClick={() => {
                                                const updatedVibe = user?.vibe.filter(v => v !== vibe)
                                                setUser((prevState: User): User => ({ ...prevState, "vibe": updatedVibe }));
                                            }}
                                            key={vibe}
                                            className="cursor-pointer">
                                            {vibe}
                                        </Badge>
                                    )
                                } else {
                                    return (
                                        <Badge
                                            onClick={() => {
                                                setUser((prevState: User): User => ({ ...prevState, "vibe": [...(user?.vibe ? user.vibe : []), vibe] }));
                                            }}
                                            key={vibe}
                                            className="border bg-secondary text-foreground hover:text-background cursor-pointer">
                                            {vibe}
                                        </Badge>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="">
                    <Button className="w-full">Receive Inspo</Button>
                </div>
            </form>
        </div>
    )
}