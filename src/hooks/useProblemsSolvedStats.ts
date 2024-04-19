import { useQuery } from "@leetcode/services";
import { getProblemsSolvedStatsData } from "@leetcode/apis";
export const useProblemsSolvedStats = (username: string) => {
    return useQuery({
        queryKey: ["problemsSolvedStats", username],
        queryFn: () => getProblemsSolvedStatsData(username),
        enabled: !!username
    });
}