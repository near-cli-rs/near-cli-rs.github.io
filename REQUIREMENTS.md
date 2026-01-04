# near-cli-rs Landing Page Requirements

## Overview

A statically generated landing page for near-cli-rs, designed to be hosted on GitHub Pages. The design replicates the aesthetic of terminal, dark-mode interface featuring brown-black backgrounds and neon green accents.

---

## Visual Design

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0d0b09` | Main page background |
| `--bg-secondary` | `#1a1612` | Section backgrounds, nav, footer |
| `--bg-tertiary` | `#252018` | Elevated elements, hover states |
| `--bg-card` | `#1f1a14` | Card backgrounds |
| `--bg-terminal` | `#0a0908` | Terminal window backgrounds |
| `--accent-primary` | `#00ec97` | Primary neon green accent |
| `--accent-secondary` | `#00d489` | Hover states for accent |
| `--accent-dim` | `#00a36c` | Muted accent, borders |
| `--accent-glow` | `rgba(0, 236, 151, 0.3)` | Glow effects, shadows |
| `--text-primary` | `#e8e4df` | Primary text |
| `--text-secondary` | `#a39e96` | Secondary/body text |
| `--text-muted` | `#6b6660` | Muted text, placeholders |
| `--border-primary` | `#3d352c` | Primary borders |
| `--border-secondary` | `#2a241e` | Subtle borders |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Body | Inter | 400 | 16px base |
| Headings | Inter | 600-700 | 2rem - 4rem |
| Code/Terminal | JetBrains Mono | 400-600 | 0.8rem - 0.95rem |
| Navigation | Inter | 400 | 0.95rem |
| Buttons | JetBrains Mono | 500 | 0.95rem |

Font stack fallbacks:
- Sans-serif: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- Monospace: `'JetBrains Mono', 'Fira Code', 'Consolas', monospace`

### Design Principles

1. **Square/Angular Aesthetic** - Sharp corners (4-8px border-radius max), no rounded pills
2. **Terminal-Like UI** - Monospace fonts, command prompts, blinking cursors
3. **Dark Mode Only** - No light mode toggle required
4. **Subtle Glow Effects** - Neon green text-shadow on accent elements
5. **Minimal Animations** - Smooth transitions (0.2s ease), terminal typing effect

---

## Layout Structure

### Sections (top to bottom)

1. **Navigation** (fixed)
   - Logo with terminal prompt icon (▸)
   - Links: GitHub, Docs, NEAR Protocol

2. **Hero Section**
   - Main headline with highlighted text
   - Subtitle description
   - Installation tabs with copy buttons
   - CTA buttons (primary + secondary)

3. **Terminal Demo**
   - Animated terminal window
   - Cycles through interactive CLI examples
   - macOS-style window chrome (traffic light buttons)

4. **Features Grid**
   - 6 feature cards in responsive grid
   - Icon + heading + description per card

5. **Commands Overview**
   - 4 command cards showing CLI capabilities
   - Terminal-style headers with `$` prompt

6. **Interactive Demo**
   - 2 mini-terminal mockups
   - Hoverable menu options
   - Shows real CLI prompt/response patterns

7. **FAQ Section**
   - Accordion-style expandable items
   - `+`/`−` toggle indicator

8. **Footer**
   - Logo
   - Links: GitHub, Documentation, NEAR Protocol, Discord
   - Copyright line

---

## Component Specifications

### Navigation Bar

```
Height: ~60px
Position: Fixed, top
Background: rgba(13, 11, 9, 0.9) with backdrop-filter: blur(10px)
Border: 1px solid var(--border-secondary) bottom
Max-width: 1200px centered
```

### Installation Tabs

```
Tab buttons:
- Background: var(--bg-secondary)
- Border: 1px solid var(--border-primary)
- Border-radius: 4px
- Padding: 0.5rem 0.9rem
- Font: JetBrains Mono, 0.8rem
- Active state: accent border + accent text color

Content box:
- Background: var(--bg-terminal)
- Border: 1px solid var(--border-primary)
- Border-radius: 6px
- Padding: 1rem 1.5rem
- Max-width: 700px
```

### Copy Button

```
Size: ~32px square
Background: transparent
Border: 1px solid var(--border-primary)
Border-radius: 4px
Icon size: 16x16px
Hover: accent border + accent color
Copied state: shows checkmark icon for 2 seconds
```

### Terminal Window

```
Max-width: 900px
Border-radius: 8px
Border: 1px solid var(--border-primary)
Box-shadow: 0 0 0 1px var(--border-secondary), 0 25px 50px -12px rgba(0,0,0,0.5)

Header:
- Background: var(--bg-secondary)
- Padding: 0.75rem 1rem
- Traffic light buttons: 12px circles (#ff5f57, #ffbd2e, #28c840)

Body:
- Padding: 1.5rem
- Min-height: 350px
- Font: JetBrains Mono, 0.9rem
- Line-height: 1.5
```

### Feature Cards

```
Background: var(--bg-card)
Border: 1px solid var(--border-primary)
Border-radius: 8px
Padding: 2rem
Hover: accent border + translateY(-2px)
Grid: auto-fit, minmax(300px, 1fr)
Gap: 1.5rem
```

### Mini Terminal (Interactive Demo)

```
Background: var(--bg-terminal)
Border: 1px solid var(--border-primary)
Border-radius: 8px
Padding: 1.5rem
Font: JetBrains Mono, 0.85rem

Option indicator:
- Unselected: ○ (dim)
- Selected: ● (accent color)

Left border on options: 2px solid #4a90d9
Hint text color: #c9a227
```

### FAQ Accordion

```
Background: var(--bg-card)
Border: 1px solid var(--border-primary)
Border-radius: 6px
Margin-bottom: 1rem

Summary:
- Padding: 1.25rem 1.5rem
- Font-weight: 500
- Toggle icon: + / − (accent-dim color)

Content:
- Padding: 0 1.5rem 1.25rem
- Color: var(--text-secondary)
- Line-height: 1.7
```

### Buttons

```
Primary:
- Background: var(--accent-primary)
- Color: var(--bg-primary)
- Border: 1px solid var(--accent-primary)
- Hover: var(--accent-secondary) + box-shadow glow

Secondary:
- Background: transparent
- Color: var(--text-primary)
- Border: 1px solid var(--border-primary)
- Hover: accent border + accent text

Common:
- Padding: 0.8rem 1.5rem
- Font: JetBrains Mono, 0.95rem, weight 500
- Border-radius: 4px
- Transition: all 0.2s ease
```

---

## Technical Requirements

### Static Site Structure

```
near-cli-landing/
├── index.html          # Main page
├── 404.html            # Custom 404 page
├── styles.css          # All styles
├── script.js           # Interactivity
├── favicon.svg         # SVG favicon
└── .nojekyll           # Disable Jekyll processing
```

### Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript (async/await, arrow functions, template literals)
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- Backdrop-filter (with graceful degradation)

### Performance

- No build step required (vanilla HTML/CSS/JS)
- Fonts loaded via Google Fonts with `display=swap`
- Minimal JavaScript (~200 lines)
- No external dependencies

### Responsive Breakpoints

```css
@media (max-width: 768px) {
    - Navigation links hidden
    - Hero padding reduced
    - Title font-size: 2rem
    - Demo grid: single column
    - Stats grid: single column
    - Terminal font-size: 0.8rem
}
```

### Accessibility

- Semantic HTML (`nav`, `section`, `footer`, `details`)
- `aria-label` on icon-only buttons
- Sufficient color contrast (WCAG AA)
- Keyboard-navigable (tabs, accordions)
- `rel="noopener"` on external links

---

## Interactive Behaviors

### Installation Tabs

1. Click tab → switch active pane
2. Only one pane visible at a time
3. Active tab has accent styling

### Copy Button

1. Click → copy command to clipboard
2. Icon changes to checkmark
3. Reverts after 2 seconds
4. Fallback for older browsers (execCommand)

### Terminal Demo Animation

1. Auto-plays on page load
2. Cycles through 4 sequences:
   - Interactive mode (`near`)
   - Account management (`near account`)
   - Smart contracts (`near contract`)
   - Token operations (`near tokens`)
3. Typing effect with delays
4. Blinking cursor on command line
5. 3-second pause between sequences
6. Infinite loop

### Mini Terminal Hover

1. Hover on option → becomes selected
2. Radio indicator fills (○ → ●)
3. Text color changes to primary
4. Mouse leave → reset to first option

### FAQ Accordion

1. Click summary → toggle open/close
2. Only visual indicator changes (+ ↔ −)
3. Multiple items can be open simultaneously

---

## Content Requirements

### Installation Methods (from README)

| Method | Command |
|--------|---------|
| Shell (macOS/Linux/WSL) | `curl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh \| sh` |
| npm | `npm install -g near-cli-rs` |
| npx | `npx near-cli-rs` |
| Cargo | `cargo install near-cli-rs` |
| PowerShell (Windows) | `irm https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.ps1 \| iex` |
| Binary | Download from GitHub Releases |

### Feature Highlights

1. Interactive Prompts
2. Blazingly Fast (Rust)
3. Secure by Default (system keychain)
4. All-in-One tool
5. Multi-Network support
6. TEACH-ME mode

### CLI Commands Showcased

- `near account` - Account management
- `near tokens` - Token operations
- `near contract` - Smart contract interactions
- `near staking` - Staking management

---

## GitHub Pages Deployment

1. Push static files to repository
2. Enable GitHub Pages (Settings → Pages)
3. Deploy from `main` branch (root)
4. `.nojekyll` file prevents Jekyll processing
5. Custom 404.html for error pages

### Required Files

- `index.html` - Entry point
- `.nojekyll` - Empty file, required
- All assets relative paths (no leading `/` for subdirectory hosting)
