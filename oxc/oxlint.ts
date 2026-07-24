import { defineConfig } from 'oxlint';
import base from './base';
import react from './react';

export default defineConfig({
  extends: [base, react],
});