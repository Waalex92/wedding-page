function nextYearFromNow() {
    const start = new Date();

    start.setFullYear(start.getFullYear() + 1);

    return start.getFullYear();
}

export const nextYear = nextYearFromNow();

export const endTime = new Date(2024, 1, 17, 18, 0).getTime();

export function timeLeft() {
    const now = new Date();

    const remainingTime = endTime - now.getTime();

    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
}