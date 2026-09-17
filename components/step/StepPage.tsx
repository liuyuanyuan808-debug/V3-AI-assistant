'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { STEPS } from '@/lib/steps/data';
import { getStepVideoPoster, getStepVideoSrc } from '@/lib/steps/video';
import { StepHeader } from './StepHeader';
import { ProgressBar } from './ProgressBar';
import { VideoPlayer, type VideoPlayerHandle } from './VideoPlayer';
import { FullscreenVideoPlayer } from './FullscreenVideoPlayer';
import { TipAccordion } from './TipAccordion';

interface Props {
  stepNumber: number;
}

/**
 * One step of the V3 setup flow. Structure mirrors vanilla `#step`:
 *   • Header (X close + setup title + CozyAI pill)
 *   • .step-progress (padding 8/24/16): "Step N" label + Denton 28px title +
 *     thin progress bar
 *   • .step-video (full-bleed, no rounding, 393/267 aspect)
 *   • .step-card-wrap: white step card containing the accordion
 *   • .step-footer: Back (white outline) + Next (dark red filled) with safe-area
 */
export function StepPage({ stepNumber }: Props) {
  const router = useRouter();
  const idx = Math.max(1, Math.min(STEPS.length, stepNumber)) - 1;
  const step = STEPS[idx];
  const isFirst = step.num === 1;
  const isLast = step.num === STEPS.length;

  const videoRef = useRef<VideoPlayerHandle>(null);
  const [fsOpen, setFsOpen] = useState(false);
  const [fsInitialTime, setFsInitialTime] = useState(0);

  function next() {
    // Finish → back to the My Device hub.
    if (isLast) router.push('/');
    else router.push(`/setup/${step.num + 1}`);
  }
  function back() {
    // From step 1, back goes to the Welcome intro (not the device hub) so users
    // can revisit the phase overview.
    if (isFirst) router.push('/welcome');
    else router.push(`/setup/${step.num - 1}`);
  }

  function openFullscreen(t: number) {
    setFsInitialTime(t);
    setFsOpen(true);
    videoRef.current?.pause();
  }
  function closeFullscreen(endedAt: number) {
    setFsOpen(false);
    videoRef.current?.seek(endedAt);
    videoRef.current?.play();
  }

  return (
    <div className="flex flex-col h-full" style={{ background: '#FEF5F5' }}>
      <StepHeader
        title="V3 设备助手"
        backHref="/"
        cozyFrom={`step-${step.num}`}
        variant="close"
      />

      <div
        className="flex-shrink-0"
        style={{ padding: '8px 24px 16px' }}
      >
        <div
          className="font-semibold"
          style={{ fontSize: 13, color: '#4A0612', marginBottom: 4 }}
        >
          第 {step.num} 步
        </div>
        <h2
          className="font-denton m-0"
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: '#1A1A1A',
            marginBottom: 6,
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </h2>
        <p className="m-0 text-[13px] leading-[1.45] text-[#6F6264]" style={{ marginBottom: 12 }}>
          {step.subtitle}
        </p>
        <ProgressBar currentStep={step.num} total={STEPS.length} />
      </div>

      {/* Scroll host — footer lives inside so it pins to the viewport bottom
          when content is short (mt-auto inside min-h-full) and flows below the
          content once an accordion section expands past the viewport. */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col min-h-full">
          {/* Full-bleed video */}
          <div style={{ margin: '0 0 16px' }}>
            <VideoPlayer
              ref={videoRef}
              src={getStepVideoSrc(step.num)}
              poster={getStepVideoPoster(step.num)}
              labelTitle="操作视频"
              onExpand={openFullscreen}
            />
          </div>

          {/* Step content card */}
          <div className="relative" style={{ margin: '0 16px 16px' }}>
            {/* Step card wrapping the accordion */}
            <div
              className="bg-white"
              style={{
                borderRadius: 20,
                padding: '24px 22px',
                boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
              }}
            >
              <TipAccordion tips={step.tips} />
            </div>
          </div>

          <StepFooter
            showBack={!isFirst}
            nextLabel={isLast ? '完成' : '下一步'}
            backLabel="上一步"
            onBack={back}
            onNext={next}
          />
        </div>
      </div>

      {fsOpen && (
        <FullscreenVideoPlayer
          src={getStepVideoSrc(step.num)}
          stepNum={step.num}
          stepLabel={`第 ${step.num} 步`}
          totalSteps={STEPS.length}
          initialTime={fsInitialTime}
          hasPrev={!isFirst}
          hasNext={true}
          nextLabel={isLast ? '完成' : '下一步'}
          onClose={closeFullscreen}
          onPrev={() => {
            setFsOpen(false);
            back();
          }}
          onNext={() => {
            setFsOpen(false);
            next();
          }}
        />
      )}
    </div>
  );
}

function StepFooter({
  showBack,
  backLabel,
  nextLabel,
  onBack,
  onNext,
}: {
  showBack: boolean;
  backLabel: string;
  nextLabel: string;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="flex flex-shrink-0"
      style={{
        gap: 12,
        padding: '12px 20px calc(20px + env(safe-area-inset-bottom))',
        background: '#FEF5F5',
        marginTop: 'auto',
      }}
    >
      {showBack && (
        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer active:opacity-80 transition-opacity"
          style={{
            background: '#fff',
            color: '#1A2746',
            border: '1px solid #E0D5D7',
            borderRadius: 100,
            padding: '16px 32px',
            fontSize: 16,
            fontWeight: 600,
            minWidth: 110,
          }}
        >
          {backLabel}
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        className="flex-1 cursor-pointer active:opacity-80 transition-opacity"
        style={{
          background: '#4A0612',
          color: '#fff',
          border: 'none',
          borderRadius: 100,
          padding: 16,
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}
