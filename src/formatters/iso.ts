export default function iso(timestamp: number) {
  return new Date(timestamp).toISOString();
}
