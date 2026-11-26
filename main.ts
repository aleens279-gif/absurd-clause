// The Absurd Clause — deadpan ToS boilerplate that quietly turns absurd (rev 2)
// 153 of 200 chars max; one sentence, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

// Section number first, then the soul gets terms and conditions.
const PARTS = [
  "Section 14.3:",
  "by using this service,",
  "you agree that your soul",
  "may be retained for",
  "quality-assurance purposes and returned, slightly used, within 90 days.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
