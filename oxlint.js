import { defineConfig } from 'oxlint';
import base from './base.js';
import react from './react.js';

export default defineConfig({
  extends: [base, react],
});
