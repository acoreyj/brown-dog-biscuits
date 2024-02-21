import type {
  QwikIntrinsicElements} from '@builder.io/qwik';
import {
  Fragment,
  component$,
  useTask$,
  useStore,
} from '@builder.io/qwik';
import { VHElement } from '@qwikbits/utils';
import { DoodleHearts_1 } from './icons/kld-Doodle-Hearts_1';
import { HeartFill } from './icons/heart_fill';
import { TwoToneHeart } from './icons/twoToneHeart';
import { squareIntersectsCircle } from '../utils';
const getSettingClass = (
  size: '' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  pos?: Setting | 'inherit'
) => {
  if (pos === 'inherit') {
    return '';
  }
  if (!pos) {
    return size ? `${size}:hidden` : 'hidden';
  }
  return pos;
};
type Setting = string | 'inherit';
type ScreenSettings = {
  xs?: Setting;
  sm?: Setting;
  md?: Setting;
  lg?: Setting;
  xl?: Setting;
  twoxl?: Setting;
};
type Icon =
  | 'paw-prints'
  | 'heart-doodle'
  | 'heart'
  | 'paw-two-tone'
  | 'paw-print'
  | 'paw-fill'
  | 'heart-fill'
  | 'heart-suit'
  | 'heart-two-tone';

type BGIcon = {
  name: Icon;
  color: string;
  size?: string | ScreenSettings;
  style: { top: string; left: string } & QwikIntrinsicElements['div']['style'];
  classes?: string;
};
type AddedIcon = {
  left: number;
  top: number;
  widthAndHeight: number;
  color: string;
  icon: Icon;
};

export type BackgroundProps = {
  xMax: number;
  yMax: number;
  xStart?: number;
  yStart?: number;
  rotations?: string[];
  icons?: string[];
  textColors?: string[];
  padding?: number;
  blank?: {
    left: number;
    top: number;
    width: number;
    height: number;
    circle?: boolean;
    padding?: number;
  };
  flippableIcons?: string[];
};

export default component$((props: BackgroundProps) => {
  const {
    xMax,
    yMax,
    padding,
    blank,
  } = props;

  const generateIconPositions = (options?: {
    xStart?: number;
    yStart?: number;
    xMax?: number;
    yMax?: number;
    padding?: number;
  }) => {
    options = options || {};
    const { xStart, yStart, xMax, yMax, padding } = options;
    const icons: Icon[] = [
      'paw-prints',
      'heart-doodle',
      'heart',
      'paw-two-tone',
      'paw-print',
      'paw-fill',
      'heart-fill',
      'heart-suit',
      'heart-two-tone',
    ] as const;

    const addedIcons: AddedIcon[] = [];
    const iconsCount: Record<string, number> = {};
    icons.forEach((icon) => {
      iconsCount[icon] = 0;
    });
    const colorsCount: Record<string, number> = {
      'text-base-300': 0,
      'text-primary': 0,
      'text-secondary': 0,
      'text-accent': 0,
      'text-info': 0,
    };

    const getWidth = () => {
      const min = 32;
      const max = 144;
      return Math.floor(Math.random() * ((max - min) / 8) + min / 8) * 8;
    };
    const pad = padding ?? 16;
    let y = yStart || 0;
    while (y < (yMax || 0)) {
      let x = xStart || 0;
      while (x < (xMax || 0)) {
        const width = getWidth();
        const top =
          Math.floor(Math.random() * 64) + y + Math.floor(Math.random() * pad);
        const left =
          Math.floor(Math.random() * 64) + x + Math.floor(Math.random() * pad);

        const leastColor = Math.min(...Object.values(colorsCount));
        const colorsWithLeast = Object.keys(colorsCount).filter(
          (color) => colorsCount[color] === leastColor
        );
        const color =
          colorsWithLeast[Math.floor(Math.random() * colorsWithLeast.length)];
        colorsCount[color]++;
        const leastIcon = Math.min(...Object.values(iconsCount));
        const iconsWithLeast = icons.filter(
          (icon) => iconsCount[icon] === leastIcon
        );
        const icon =
          iconsWithLeast[Math.floor(Math.random() * iconsWithLeast.length)];

        iconsCount[icon]++;
        addedIcons.push({
          left,
          top,
          widthAndHeight: width / 16,
          color,
          icon,
        });
        x = left + width;
      }
      y += 128 + pad;
    }

    return addedIcons;
  };
  const state = useStore<{ background: BGIcon[] }>({
    background: [],
  });
  const generatedIconPositions = generateIconPositions({
    xStart: 0,
    yStart: 0,
    xMax,
    yMax,
    padding: padding ?? 16,
  });
  const iconConfigs = generatedIconPositions;
  useTask$(async () => {
    try {
      const rect = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        circle: false,
        ...blank,
      };
      const rotateClasses = [
        'rotate-6',
        'rotate-12',
        'rotate-45',
        '-rotate-6',
        '-rotate-12',
        '-rotate-45',
      ];
      const flipIcons = ['paw-prints', 'heart-fill'];
      const background: BGIcon[] = iconConfigs.reduce<BGIcon[]>((acc, pos) => {
        let classes = '';
        const icon = pos.icon;

        if (flipIcons.includes(icon) && Math.random() > 0.5) {
          classes += ' scale-x-[-1]';
        }
        const rotateIcons = ['paw-print', 'paw-fill', 'paw-two-tone'];
        if (rotateIcons.includes(icon) && Math.random() > 0.2) {
          classes +=
            ' ' +
            rotateClasses[Math.floor(Math.random() * rotateClasses.length)];
        }
        const padding = rect.padding ?? 0;
        const width = pos.widthAndHeight * 16;
        const circleX = rect.left + rect.width / 2;
        const circleY = rect.top + rect.height / 2;
        const radius = (rect.width + padding) / 2;

        const intersects = squareIntersectsCircle(
          circleX,
          circleY,
          radius,
          pos.left,
          pos.top,
          width
        );
        if (intersects) {
          return acc;
        }

        const bgIcon: BGIcon = {
          name: icon,
          color: `${pos.color}`,
          size: `text-[${pos.widthAndHeight}rem]`,
          style: {
            top: `${pos.top}px`,
            left: `${pos.left}px`,
          },
          classes,
        };
        acc.push(bgIcon);
        return acc;
      }, []);
      state.background = background;
      console.log('set state');
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <VHElement class="min-w-full absolute z-0 top-0 left-0 bg-transparent overflow-hidden">
      {state.background &&
        state.background.length &&
        state.background.map((bg, i) => {
          const {
            xs: xsSize,
            sm: smSize,
            md: mdSize,
            lg: lgSize,
            xl: xlSize,
            twoxl: twoxlSize,
          } = typeof bg.size === 'string'
            ? {
                xs: bg.size,
                sm: 'inherit',
                md: 'inherit',
                lg: 'inherit',
                xl: 'inherit',
                twoxl: 'inherit',
              }
            : bg.size || ({} as ScreenSettings);
          const xsClass = getSettingClass('', xsSize);
          const smClass = getSettingClass('sm', smSize);
          const mdClass = getSettingClass('md', mdSize);
          const lgClass = getSettingClass('lg', lgSize);
          const xlClass = getSettingClass('xl', xlSize);
          const twoxlClass = getSettingClass('2xl', twoxlSize);
          let icon = '';
          switch (bg.name) {
            case 'paw-prints':
              icon = 'icon-[fluent-emoji-high-contrast--paw-prints]';
              break;
            case 'heart-suit':
              icon = 'icon-[bi--suit-heart]';
              break;
            case 'heart':
              icon = 'icon-[mdi--heart]';
              break;
            case 'paw-two-tone':
              icon = 'icon-[solar--paw-line-duotone]';
              break;
            case 'paw-print':
              icon = 'icon-[mdi--paw-outline]';
              break;
            case 'paw-fill':
              icon = 'icon-[mdi--paw]';
              break;
          }
          const cls = `bg-icon absolute ${bg.classes || ''} ${
            bg.color
          } ${xsClass} ${smClass} ${mdClass} ${lgClass} ${xlClass} ${twoxlClass}`;
          return (
            <Fragment key={i}>
              {icon ? (
                <span class={`${cls} ${icon}`} style={bg.style}></span>
              ) : null}
              {bg.name === 'heart-doodle' ? (
                <span class={cls} style={bg.style}>
                  <DoodleHearts_1 />
                </span>
              ) : null}
              {bg.name === 'heart-fill' ? (
                <span class={cls} style={bg.style}>
                  <HeartFill />
                </span>
              ) : null}
              {bg.name === 'heart-two-tone' ? (
                <span class={cls} style={bg.style}>
                  <TwoToneHeart animate={false} />
                </span>
              ) : null}
            </Fragment>
          );
        })}
    </VHElement>
  );
});
