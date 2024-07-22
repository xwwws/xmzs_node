const whitelist = ['localhost'];

const preventHotLinking = (req, res, next) => {
  // 获取referer
  const referer = req.headers.referer;
  if (referer) {
    const { hostname } = new URL(referer)
    if (!whitelist.includes(hostname)) res.status(403).send('Forbidden');
  }
  next();
};
export default preventHotLinking;
