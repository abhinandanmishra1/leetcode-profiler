import { Badges } from "./Badges";
import { Show } from "@leetcode/blocks";
import { useBadges } from "@leetcode/hooks";

interface LeetcodeBadgesProps {
    username: string
}
export const LeetcodeBadges = ({ username }: LeetcodeBadgesProps) => {

    const { data, isLoading, isError } = useBadges(username);

    if (isLoading || !data) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }
    
    console.log(data)
    return (
        <div className="max-w-[600px] w-full h-full bg-dark-layer-1 p-4 shadow-dark-down-01 rounded-lg mt-2">
            <Show when={data.length>0}>
                <Badges data={data} />
            </Show>
            <div id="badge-gif"></div>
        </div>
    );
}