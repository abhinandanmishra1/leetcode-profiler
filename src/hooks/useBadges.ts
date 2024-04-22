import { getBadges } from "@leetcode/apis";
import { useQuery } from "@leetcode/services";

export const useBadges = (username: string) => {
    return useQuery({
        queryKey: ["badges", username],
        queryFn: () => getBadges(username),
        enabled: !!username
    });
}
