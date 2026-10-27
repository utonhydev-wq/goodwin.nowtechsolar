import { useState, useEffect } from 'react';

export interface DeviceInfo {
  isAndroid: boolean;
  isIOS: boolean;
  isMobile: boolean;
  isDesktop: boolean;
  isStandalone: boolean;
  osName: 'Android' | 'iOS' | 'Windows' | 'macOS' | 'Linux' | 'Outro';
}

export function useDeviceDetect(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isAndroid: false,
    isIOS: false,
    isMobile: false,
    isDesktop: true,
    isStandalone: false,
    osName: 'Outro',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = /android/i.test(ua);
    const isIOS = /iphone|ipad|ipod/i.test(ua);
    const isMobile = isAndroid || isIOS || /mobile/i.test(ua);
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;

    let osName: DeviceInfo['osName'] = 'Outro';
    if (isAndroid) osName = 'Android';
    else if (isIOS) osName = 'iOS';
    else if (/windows/i.test(ua)) osName = 'Windows';
    else if (/macintosh|mac os x/i.test(ua)) osName = 'macOS';
    else if (/linux/i.test(ua)) osName = 'Linux';

    setDeviceInfo({
      isAndroid,
      isIOS,
      isMobile,
      isDesktop: !isMobile,
      isStandalone,
      osName,
    });
  }, []);

  return deviceInfo;
}
