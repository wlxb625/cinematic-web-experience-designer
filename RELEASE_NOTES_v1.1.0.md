# Cinematic Web Experience Designer v1.1.0

首个可直接下载使用的正式 Skill 发布包。

这个 Skill 用于指导 ChatGPT、Codex 和其他代码智能体生成具有电影化视觉、媒体融合和滚动叙事能力的网页体验。它不会直接从需求跳到常规组件堆叠，而是先完成视觉世界、页面分幕、媒体导演、滚动时间轴、移动端重新导演和性能降级设计，再进入逐幕实现与验收。

## 本次发布包含

- 中英文完整 Skill：`SKILL.md`、`SKILL.zh-CN.md`
- Codex 中英文分阶段执行提示词
- 页面分幕、媒体规划、滚动时间轴和视觉简报模板
- 桌面端、移动端、性能与减少动态验收清单
- React + GSAP ScrollTrigger 固定滚动场景示例
- “同行·记忆生长空间”完整案例

## v1.1.0 重点能力

- 将滚动视为主时间轴，而不是简单添加淡入动画
- 定义 Trigger、Start、End、Pin、Scrub 和滚动距离
- 使用统一的 `0 → 1` 场景进度驱动图片、视频、3D、Shader、文字与 UI
- 规定相邻场景的输入状态、变形过程和输出状态
- 支持视频进度绑定、图片序列、WebGL 镜头和 Shader 参数映射
- 为手机端重新设计滚动长度和交互，而不是缩小桌面版
- 提供普通设备、低性能设备和 `prefers-reduced-motion` 降级方案
- 要求 0%、25%、50%、75%、100% 截图和完整滚动录屏验收
- 验证快速滚动、反向滚动、停在中间进度和窗口尺寸变化

## 下载与安装

下载 Release 附件：

`cinematic-web-experience-designer-v1.1.0.zip`

解压后保持 `SKILL.md` 位于文件夹根目录，然后将整个文件夹放入所使用的 Agent、Codex 或 Skills 目录中。

发布 ZIP 是精简包，不包含仓库预览图片、README 和 Git 历史，体积约 36 KB。

## 技术示例依赖

只有在运行附带的 React 滚动示例时才需要：

```bash
npm install gsap @gsap/react
```

Skill 本身不需要安装前端依赖。

## SHA-256

```text
511a9c21559562dc67a6fa60c5c061ba6821543bb3cbbbfc638b34a3e3cbf676
```

---

## English summary

The first downloadable release of **Cinematic Web Experience Designer**, a bilingual AI skill for cinematic, media-integrated and scroll-linked web experience design.

It includes scene sequencing, media direction, normalized scroll timelines, pin/scrub specifications, scene continuity, mobile art direction, performance fallbacks, recording-based QA, a React + GSAP reference implementation, and a complete Tongxing memory-growth-space example.
