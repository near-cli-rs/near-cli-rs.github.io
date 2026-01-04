# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for near-cli-rs (NEAR Protocol CLI), designed for GitHub Pages hosting. Vanilla HTML/CSS/JS with no build step or dependencies.

## Development

Preview locally:
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

## Architecture

**Files:**
- `index.html` - Single page with all sections
- `styles.css` - CSS variables define the design system (see `:root` block)
- `script.js` - Three features: tab switching, copy-to-clipboard, terminal animation
- `404.html` - Custom error page
- `.nojekyll` - Required for GitHub Pages (disables Jekyll)

**Design System:**
- Colors: Brown-black backgrounds (`#0d0b09`), neon green accent (`#00ec97`)
- Fonts: Inter (body), JetBrains Mono (code/terminal)
- All design tokens are CSS custom properties in `styles.css`

**Terminal Animation:**
The `initTerminalDemo()` function in `script.js` cycles through 4 command sequences with typing effects. Each sequence is defined in the `sequences` array.

## Deployment

Push to GitHub and enable Pages from repository settings. The `.nojekyll` file is required.

## Reference

See `REQUIREMENTS.md` for complete visual/technical specifications including color palette, component specs, and interactive behaviors.
