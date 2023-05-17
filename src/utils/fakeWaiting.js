export default function fakeWaiting(timeout = 1000) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}