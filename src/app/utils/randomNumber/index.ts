import { RandomNumberProps } from "./props";

function getRandomNumber({min, max}: RandomNumberProps) {
    return Math.random() * (max - min) + min;
};

export default getRandomNumber;