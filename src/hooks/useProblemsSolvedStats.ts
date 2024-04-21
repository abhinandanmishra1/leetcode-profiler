import { getSolvedProblemsStatsData } from "@leetcode/apis";
import { useQuery } from "@leetcode/services";

export const useSolvedProblemsStats = (username: string) => {
    return useQuery({
        queryKey: ["problemsSolvedStats", username],
        queryFn: () => getSolvedProblemsStatsData(username),
        enabled: !!username
    });
}
