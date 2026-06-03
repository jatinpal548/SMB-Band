/**
 * Vercel Speed Insights integration
 * Tracks web vitals and performance metrics
 */
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false,
  sampleRate: 1 // Track 100% of page views
});
