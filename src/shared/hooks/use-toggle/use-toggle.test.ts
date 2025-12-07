import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useToggle } from './use-toggle';

describe('useToggle', () => {
  it('초기값은 false여야 한다', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.state).toBe(false);
  });

  it('초기값이 주어지면 해당 값으로 설정되어야 한다', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.state).toBe(true);
  });

  it('on 함수를 호출하면 true가 되어야 한다', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current.on();
    });
    expect(result.current.state).toBe(true);
  });

  it('off 함수를 호출하면 false가 되어야 한다', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current.off();
    });
    expect(result.current.state).toBe(false);
  });

  it('toggle 함수를 호출하면 상태가 반전되어야 한다', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current.toggle();
    });
    expect(result.current.state).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.state).toBe(false);
  });
});
