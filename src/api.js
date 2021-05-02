//BASE URL
const base_url = "https://api.rawg.io/api/";

//GET CURRENT MONTH
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

//GET CURRENT DATE
const getCurrentDate = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

//CURRENT  DAY/MONTH/YEAR
const currentDay = getCurrentDate();
const currentMonth = getCurrentMonth();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//POPULAR, UPCOMING, NEW GAMES
const popular_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${currentYear},${nextYear}&ordering=-added&page_size=12`;
const new_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = (page) =>
  `${base_url}${popular_games}&page=${page}`;
export const upcomingGamesURL = (page) =>
  `${base_url}${upcoming_games}&page=${page}`;
export const newGamesURL = (page) => `${base_url}${new_games}&page=${page}`;
