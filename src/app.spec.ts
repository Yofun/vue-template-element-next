import { describe, it, expect } from 'vitest';

describe('Vitest test', () => {
  it('a sample test', () => {
    const value = 1 + 1;
    expect(value).toBe(2);
  });

  it('Render App component', async () => {
    const app = await import('@/App.vue');
    expect(app).toBeDefined();
  });
});
