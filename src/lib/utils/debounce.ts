let timeout: NodeJS.Timeout
/**
 * BROKEN - Debouncing function
 * @param func The function to be debounced
 * @param waitFor time in ms
 * @returns void
 */
export default function debounce<
  F extends (...args: Parameters<F>) => ReturnType<F>
>(func: F, waitFor: number = 300): (...args: Parameters<F>) => void {
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), waitFor)
  }
}
