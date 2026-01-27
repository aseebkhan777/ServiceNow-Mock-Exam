export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const getRandomQuestions = (questionBank, count) => {
  return shuffleArray([...questionBank]).slice(0, count);
};