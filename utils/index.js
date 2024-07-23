import os from 'node:os';

/**
 * 获取所有本地ip
 * @return {*[]}
 */
export const getLocalIPs = () => {
  const interfaces = os.networkInterfaces();
  const ips = [];
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4') {
        ips.push(alias.address);
      }
    }
  }
  return ips;
};
