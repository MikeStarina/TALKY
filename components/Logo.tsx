import type { CSSProperties } from 'react';

export function Logo({
  className = 'logo',
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span className={className} style={style}>
      Talk<span>Y</span>
    </span>
  );
}
