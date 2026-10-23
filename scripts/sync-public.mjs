// sync-public.mjs — vitepress build 后同步 public/ → dist/
// 本环境（Windows + vite）下 vitepress build 不会把 docs/.vitepress/public/ 复制到 dist/，
// 导致发布后的静态文件（如 hy插件/install.sh、CNAME、img/）404。
// 在 package.json 的 build 脚本中 build 后调用：node scripts/sync-public.mjs
import { cpSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = resolve(root, 'docs/.vitepress/public')
const distDir = resolve(root, 'docs/.vitepress/dist')

if (!existsSync(publicDir)) {
  console.error('[sync-public] public 目录不存在:', publicDir)
  process.exit(1)
}
if (!existsSync(distDir)) {
  console.error('[sync-public] dist 目录不存在（先执行 vitepress build）:', distDir)
  process.exit(1)
}

cpSync(publicDir, distDir, { recursive: true })
console.log('[sync-public] public → dist 同步完成')
