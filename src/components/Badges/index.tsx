import { Badges } from "./Badges";
import { BadgesLoading } from "@leetcode/blocks/Loading/BadgesLoading";
import { Show } from "@leetcode/blocks";
import { useBadges } from "@leetcode/hooks";

interface LeetcodeBadgesProps {
    username: string
}
export const LeetcodeBadges = ({ username }: LeetcodeBadgesProps) => {

    const { data, isLoading, isError } = useBadges(username);

    if (isError) {
        return <div>Error</div>;
    }
    
    console.log(data)
    return (
        <div className="max-w-[600px] w-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg mt-2">
            <Show when={!isLoading && !isError && !!data}>
                <Badges data={data || []} />
            </Show>
            <Show when={isLoading}>
                <BadgesLoading />
            </Show>
            <div id="badge-gif"></div>
        </div>
    );
}