import React from 'react';

export type SpaceBetweenDirection = 'horizontal' | 'vertical';

export type SpaceBetweenSize = 'm';

export type SpaceBetweenProps = {
  children?: React.ReactNode;
  direction?: SpaceBetweenDirection;
  size?: SpaceBetweenSize;
};

const DIRECTION_AXIS_MAP = new Map<SpaceBetweenDirection, string>([
  ['horizontal', 'x'],
  ['vertical', 'y'],
]);

const SIZE_MAP = new Map<SpaceBetweenSize, string>([['m', '3']]);

const getSpaceBetweenClassName = (props: {
  direction: SpaceBetweenDirection;
  size: SpaceBetweenSize;
}): string => {
  const { direction, size } = props;

  const axis = DIRECTION_AXIS_MAP.get(direction)!;
  const sizeNumber = SIZE_MAP.get(size)!;

  return `space-${axis}-${sizeNumber}`;
};

export const SpaceBetween = (props: SpaceBetweenProps) => {
  const { children, direction = 'vertical', size = 'm' } = props;

  const className = getSpaceBetweenClassName({
    direction,
    size,
  });

  return <div className={className}>{children}</div>;
};
