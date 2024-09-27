import axios from "axios";

const BASE_URL = "https://predict-beta-api-develop-hpcmx2pcya-uc.a.run.app";

const api = axios.create({
  baseURL: BASE_URL,
});


export interface Season {
  id: string;
  createdAt: string;
  deletedAt: null;
  name: string;
  isCurrent: boolean;
  year: number;
}

export interface Week {
  id: number;
  createdAt: string;
  deletedAt: any;
  number: number;
  publish: boolean;
  deadline: string;
}

export interface Match {
  id: string;
  homeTeam: {
    name: string;
    logo?: string;
  };
  awayTeam: {
    name: string;
    logo?: string;
  };
  dateTime: string;
}

export interface HeadToHead {
  homeTeamWins: number;
  awayTeamWins: number;
  draws: number;
}

export interface Prediction {
  fixtureId: string;
  prediction: 'HOME_WIN' | 'DRAW' | 'AWAY_WIN';
};

export const getSeasons = async(): Promise<Season[]> => {
  const response = await api.get<Season[]>('/seasons')
  return response.data
}

export const getPublishedWeeks = async (seasonId: string): Promise<Week[]> => {
  const response = await api.get<Week[]>(`/weeks/season/${seasonId}/published`);
  return response.data;
};

export const getMatches = async (seasonId: string, weekId: string): Promise<Match[]> => {
  const response = await api.get<Match[]>(`/fixtures/season/${seasonId}/week/${weekId}`);
  return response.data;
};

export const getHeadToHead = async (fixtureId: string): Promise<HeadToHead> => {
  const response = await api.get<HeadToHead>(`/fixtures/${fixtureId}/h2h`);
  return response.data;
};

export const submitPredictions = async (predictions: Prediction[]): Promise<void> => {
  await api.post('/predictions', predictions);
};