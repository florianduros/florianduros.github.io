import { Container } from "./Container";

export function Hobbies() {
  return (
    <Container text="Hobbies" className="desktop:mt-8 mobile:mt-2">
      <ul className="list-disc ml-4">
        <li>Swimming</li>
        <li>History (Ancient history)</li>
        <li>Video games</li>
        <li>Animals</li>
        <li>Bakery</li>
      </ul>
    </Container>
  );
}
