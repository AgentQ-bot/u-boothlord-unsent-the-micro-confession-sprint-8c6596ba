// u-boothlord-unsent-the-micro-confession-sprint-8c6596ba entrypoint
// (Node 22, standard library only).
// Writes the two-part micro-confession to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt inside the grader).
// The output directory is created first, so the write works on a fresh
// output path as well as on the grader's mounted /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = [
  'To: the landlord who never raised my rent',
  'I typed this thank-you three years ago and never sent it — I was scared that saying it out loud would remind you to raise the rent.',
].join('\n');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
