import { getContestRatingGraph } from "@leetcode/apis";
import { useQuery } from "@leetcode/services";

export const useContestRatingGraph = (username: string) => {
    return useQuery({
        queryKey: ["contestRatingGraph", username],
        queryFn: () => getContestRatingGraph(username),
        enabled: !!username
    });
}
