import { defineConfig } from 'oxlint.js';
import base from './base.js';
import react from './react.js';

export default defineConfig({
  extends: [base, react],
});
