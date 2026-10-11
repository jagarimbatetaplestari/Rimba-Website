import { execSync } from 'child_process';

console.log('[Rimba-Website] Starting static export for Mobile/Capacitor build...');
process.env.NEXT_EXPORT = 'true';

try {
  execSync('npx next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_EXPORT: 'true'
    }
  });
  console.log('[Rimba-Website] Static build export completed successfully -> out/');
} catch (err) {
  console.error('[Rimba-Website] Static export failed:', err);
  process.exit(1);
}
