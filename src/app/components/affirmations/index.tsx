import Join from "./join"
import Title from "./title"

export default function Affirmations() {
    return (
        <div className="w-full py-12 grid gap-6 md:gap-12">
            <Title />
            <div className="mx-auto max-w-3xl p-8 flex items-center space-y-0.5 text-sm md:max-w-5xl md:space-y-1 md:text-base border rounded-md">
                <Join />
            </div>
        </div>
    )
}