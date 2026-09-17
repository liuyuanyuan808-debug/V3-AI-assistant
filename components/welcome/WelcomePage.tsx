'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SkipDialog } from './SkipDialog';

const PHASES = [
  {
    icon: '/icon/Welcome-1.png',
    title: '测量与清洁',
    desc: '选择合适的法兰尺寸并清洁部件',
    time: '步骤 1-2',
  },
  {
    icon: '/icon/Welcome-2.png',
    title: '组装设备',
    desc: '连接奶碗、导管、主机与电源适配器',
    time: '步骤 3',
  },
  {
    icon: '/icon/Welcome-3.png',
    title: '佩戴与吸力',
    desc: '正确佩戴并选择舒适的吸力档位',
    time: '步骤 4-5',
  },
];

/**
 * The V3 onboarding intro — pink gradient, hero + phase list
 * + Get started. Corresponds to vanilla #welcome. Skip goes to the My Device
 * hub (`/`).
 */
export function WelcomePage() {
  const router = useRouter();
  const [skipOpen, setSkipOpen] = useState(false);

  return (
    <div
      className="relative flex flex-col h-full overflow-y-auto"
      style={{ background: 'linear-gradient(180deg, #F8C3CD 0%, #FEF5F5 48%)' }}
    >
      <button
        type="button"
        onClick={() => setSkipOpen(true)}
        className="absolute right-5 z-[5] bg-white/55 text-[#1A1A1A] text-[15px] font-medium border-0 rounded-[100px] px-5 py-2 cursor-pointer"
        style={{
          top: 'calc(env(safe-area-inset-top) + 12px)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        跳过
      </button>

      <div
        className="flex-1 flex flex-col px-6"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)' }}
      >
        <div className="text-center flex-shrink-0 mt-[52px]">
          <img
            src="/images/welcome-hero.png"
            alt="Welcome"
            draggable={false}
            className="block mx-auto mb-[18px] object-contain"
            style={{
              width: '72%',
              maxWidth: 280,
              aspectRatio: '393 / 267',
              height: 'auto',
            }}
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <h1
            className="font-denton m-0 mb-2.5"
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: '#2B0007',
              lineHeight: 1.12,
              letterSpacing: '-0.3px',
            }}
          >
            V3 设备助手
          </h1>
          <p
            className="mx-auto mt-0 mb-[26px] font-normal"
            style={{
              color: '#2B0007',
              fontSize: 15,
              lineHeight: 1.45,
              maxWidth: 300,
            }}
          >
            通过 5 个步骤完成设备准备、正确佩戴与吸力设置。
          </p>
        </div>

        <div className="flex-1 flex flex-col px-1">
          {PHASES.map((p, i) => (
            <div
              key={p.title}
              className="flex gap-3 items-start"
              style={{ paddingBottom: i < PHASES.length - 1 ? 22 : 0 }}
            >
              <div className="w-6 h-6 flex-shrink-0 mt-px flex items-center justify-center">
                <img
                  src={p.icon}
                  alt=""
                  draggable={false}
                  className="w-6 h-6 object-contain select-none"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="m-0 mb-0.5"
                  style={{ fontSize: 18, fontWeight: 600, color: '#1A1A1A', lineHeight: 1.25 }}
                >
                  {p.title}
                </h3>
                <p
                  className="m-0 mb-0.5"
                  style={{ fontSize: 13, color: '#1A1A1A', lineHeight: 1.35 }}
                >
                  {p.desc}
                </p>
                <p className="m-0" style={{ fontSize: 12, color: '#888', lineHeight: 1.3 }}>
                  {p.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-7 flex-shrink-0">
          <button
            type="button"
            onClick={() => router.push('/setup/1')}
            className="w-full text-white font-semibold border-0 cursor-pointer active:opacity-80 transition-opacity"
            style={{ background: '#4A0612', padding: 18, borderRadius: 100, fontSize: 17 }}
          >
            开始设置
          </button>
        </div>
      </div>

      <SkipDialog
        open={skipOpen}
        onClose={() => setSkipOpen(false)}
        onConfirm={() => {
          setSkipOpen(false);
          router.push('/');
        }}
      />
    </div>
  );
}
