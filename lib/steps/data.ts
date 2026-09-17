import type { Step } from './types';

const V3 = '/images/steps/v3';

// Content source: Feishu document "V3设备助手-步骤详情" (revision 527).
export const STEPS: Step[] = [
  {
    num: 1,
    title: '选择正确的法兰尺寸',
    subtitle: '测量乳头直径，适配最佳法兰尺寸',
    videoTitle: '',
    videoSub: '',
    tips: [
      {
        type: 'image',
        icon: 'alert',
        title: '请勿跳过乳头测量',
        body: '合适的法兰可最大限度地提高吸奶量，防止乳头损伤，并确保高效吸奶。',
        image: `${V3}/step-01-flange-guide-cropped.png`,
      },
      {
        type: 'image',
        icon: 'question',
        title: '乳头尺码卡',
        body: '使用乳头测量卡确认乳头直径，并根据对应范围选择合适的法兰尺寸。合适的尺寸有助于减少摩擦和拉扯不适，也能提升吸奶效率。',
        image: `${V3}/step-01-flange-size.png`,
      },
    ],
  },
  {
    num: 2,
    title: '清洁部件',
    subtitle: '建议使用温和清洁剂和清水清洁',
    videoTitle: '',
    videoSub: '',
    tips: [
      {
        type: 'carousel',
        icon: 'question',
        title: '拆卸部件',
        sharedIntro: '请按以下步骤依次拆卸吸奶器各组件。',
        frameHeight: 220,
        slides: [
          { image: `${V3}/step-02-disassemble-1.png`, caption: '将导管与奶碗分离。' },
          { image: `${V3}/step-02-disassemble-2.png`, caption: '将法兰从奶碗上拆下。' },
          { image: `${V3}/step-02-disassemble-3.png`, caption: '将鸭嘴阀与法兰分离。' },
        ],
      },
      {
        type: 'carousel',
        icon: 'alert',
        title: '建议清洁方法',
        sharedIntro: '使用温和清洁剂和清水清洁。',
        frameHeight: 250,
        slides: [
          {
            image: `${V3}/step-02-clean-overview.png`,
            caption: '清洁与消毒说明。',
          },
          {
            image: `${V3}/step-02-clean-part.png`,
            caption: '需清洁部件：奶碗、法兰、鸭嘴阀、硅胶塞（如适用）。',
          },
          {
            image: `${V3}/step-02-clean-method.png`,
            caption: '建议清洁方法：使用温和清洁剂和清水清洁。',
          },
          {
            image: `${V3}/step-02-sterilize.png`,
            caption: '消毒：蒸汽消毒 10 分钟。如使用锅具煮水消毒，请将部件煮沸 3-5 分钟，每周消毒 1-2 次。',
          },
        ],
      },
    ],
  },
  {
    num: 3,
    title: '组装',
    subtitle: '组装前，请确保所有部件均已完全干燥',
    videoTitle: '',
    videoSub: '',
    tips: [
      {
        type: 'carousel',
        icon: 'question',
        title: '组装部件',
        frameHeight: 220,
        slides: [
          { image: `${V3}/step-03-assemble-1.png`, caption: '将鸭嘴阀安装至法兰。' },
          { image: `${V3}/step-03-assemble-2.png`, caption: '将法兰与奶碗组装在一起，确保边缘处牢固扣合。' },
          { image: `${V3}/step-03-assemble-3.png`, caption: '将导管连接至奶碗。' },
        ],
      },
      {
        type: 'carousel',
        icon: 'alert',
        title: '将各部件连接至主机',
        frameHeight: 220,
        slides: [
          { image: `${V3}/step-03-host-1.png`, caption: '打开主机正面底部的导管接口盖。' },
          { image: `${V3}/step-03-host-2.png`, caption: '将导管连接器插入主机接口，确保安装正确。' },
          { image: `${V3}/step-03-host-3.png`, caption: '组装完成。' },
        ],
      },
      {
        type: 'image',
        icon: 'alert',
        title: '连接电源适配器',
        body: '请仅使用 Momcozy V3 专用适配器。使用其他适配器可能导致产品故障。',
        image: `${V3}/step-03-power.png`,
      },
    ],
  },
  {
    num: 4,
    title: '正确的佩戴方式和吸奶姿势',
    subtitle: '将吸奶器放入文胸，吸奶前检查密封性',
    videoTitle: '',
    videoSub: '',
    tips: [
      {
        type: 'image',
        icon: 'alert',
        title: '佩戴对位校准',
        body: '佩戴吸奶器时需完成双维度对准：\n侧向贴合校准：使法兰平整贴合乳房表面，禁止法兰上端翘起、整体倾斜。\n中心对位校准：调整位置使乳头处于吸奶器法兰的中心轴线上，避免乳头偏移、贴靠法兰侧壁。',
        image: `${V3}/step-04-position-cropped.png`,
      },
      {
        type: 'image',
        icon: 'question',
        title: '稳固放入文胸',
        body: '将吸奶器放入哺乳文胸中，并调整至与乳房贴合。必要时可收紧文胸或肩带，使吸奶器保持稳定。确认位置合适后，再开始吸奶。',
        image: `${V3}/step-04-wear-cropped.png`,
      },
    ],
  },
  {
    num: 5,
    title: '如何选择吸力档位',
    subtitle: '开始吸奶后，分别调节每一侧的吸力强度',
    videoTitle: '',
    videoSub: '',
    tips: [
      {
        type: 'image',
        icon: 'question',
        title: '如何选择吸力档位',
        body: '开始吸奶后：\n1. 选择吸奶侧：左 / 右 / 左 + 右（双侧）。\n2. 旋转旋钮，以调节吸力档位。\n3. 从最低吸力档位开始，逐渐提高吸力，直到出现轻微不适，然后将吸力调低一档，在舒适度和吸奶效率之间达到良好平衡。',
        warning: '左右两侧乳房对吸力的耐受程度可能不同。请分别调节每一侧的吸力强度，以使两侧均能获得舒适的吸奶体验。',
        image: `${V3}/step-05-suction-cropped.png`,
      },
    ],
  },
];

export const TIP_INDEX: Array<{ title: string; blurb: string; icon: string }> = [
  { title: '选择正确的法兰尺寸', blurb: '测量乳头直径，适配最佳尺寸', icon: '/icon/tips1.png' },
  { title: '清洁部件', blurb: '拆卸、清洁并完成消毒', icon: '/icon/tips2.png' },
  { title: '组装', blurb: '连接奶碗、导管与主机', icon: '/icon/tips3.png' },
  { title: '正确佩戴', blurb: '完成对位并稳固放入文胸', icon: '/icon/tips4.png' },
  { title: '选择吸力档位', blurb: '找到舒适高效的吸力强度', icon: '/icon/tips5.png' },
];
