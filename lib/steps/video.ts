// The V3 source document intentionally leaves every video field empty.
export function getStepVideoSrc(_stepNum: number): string | null {
  return null;
}

const VIDEO_POSTERS: Record<number, string> = {
  1: '/images/video-posters/step-01.png',
  2: '/images/video-posters/step-02.png',
  3: '/images/video-posters/step-03.png',
  4: '/images/video-posters/step-04.png',
  5: '/images/video-posters/step-05.png',
};

export function getStepVideoPoster(stepNum: number): string | null {
  return VIDEO_POSTERS[stepNum] ?? null;
}

// "Moms asked about this" per-step percentages (badge on step page).
export const MOMS_AGREE_PCT: number[] = [65, 76, 72, 53, 78];
