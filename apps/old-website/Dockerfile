FROM node:21.7.3-alpine
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY  public ./public
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static

USER nextjs

ENV PORT 3000
ENV HOSTNAME 0.0.0.0

HEALTHCHECK --interval=10s --timeout=3s \
  CMD wget -q --spider http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
