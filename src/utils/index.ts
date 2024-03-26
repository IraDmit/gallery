export function debounce<T extends (...args: any[]) => any>(func: T, delay: number = 300): (...args: Parameters<T>) => void {
    let timerId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: Parameters<T>): void {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

