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

//POPULAR GAMES
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`

export const popularGamesURL =()=> `${base_url}${popular_games}`
