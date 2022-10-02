let timeout: NodeJS.Timeout
export default function debounce<
  F extends (...args: Parameters<F>) => ReturnType<F>
>(func: F, waitFor: number = 300): (...args: Parameters<F>) => void {
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), waitFor)
  }
}
