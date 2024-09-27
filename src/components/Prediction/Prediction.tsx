import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchMatches } from "@/features/slices/matches";
import { setPrediction } from "@/features/slices/predictions";
import { Match } from "@/utils/api";

const MatchPredictions: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { matches, loading, error } = useSelector(
    (state: RootState) => state.matches
  );
  const predictions = useSelector(
    (state: RootState) => state.predictions.predictions
  );

  useEffect(() => {
    const seasonId = "1";
    const weekId = "1";
    dispatch(fetchMatches({ seasonId, weekId }));
  }, [dispatch]);

  const handlePrediction = (
    matchId: string,
    prediction: "HOME_WIN" | "DRAW" | "AWAY_WIN"
  ) => {
    dispatch(setPrediction({ fixtureId: matchId, prediction }));
  };

  const getPredictionButtonClass = (
    matchId: string,
    buttonPrediction: "HOME_WIN" | "DRAW" | "AWAY_WIN"
  ) => {
    const prediction = predictions.find((p) => p.fixtureId === matchId);
    return prediction && prediction.prediction === buttonPrediction
      ? "bg-blue-500 text-white"
      : "bg-gray-200";
  };

  if (loading) return <div>Loading matches .....</div>;
  if (error) return (<div><p>Error: {error}</p></div>)

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">HallaBet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map((match: Match) => (
          <div key={match.id} className="border rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <div className="flex flex-col">
                <span className="font-semibold">{match.homeTeam.name}</span>
                <span className="font-semibold">{match.awayTeam.name}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 rounded ${getPredictionButtonClass(
                    match.id,
                    "HOME_WIN"
                  )} hover:bg-blue-700 transition-colors`}
                  onClick={() => handlePrediction(match.id, "HOME_WIN")}
                >
                  H
                </button>
                <button
                  className={`px-3 py-1 rounded ${getPredictionButtonClass(
                    match.id,
                    "DRAW"
                  )}`}
                  onClick={() => handlePrediction(match.id, "DRAW")}
                >
                  X
                </button>
                <button
                  className={`px-3 py-1 rounded ${getPredictionButtonClass(
                    match.id,
                    "AWAY_WIN"
                  )}`}
                  onClick={() => handlePrediction(match.id, "AWAY_WIN")}
                >
                  A
                </button>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Stats ▼</span>
              <span>{match.dateTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchPredictions;
