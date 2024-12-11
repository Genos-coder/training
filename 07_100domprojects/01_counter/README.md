
### Common Media Query breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 481px | Mobile devices |
| 481px — 768px | iPads, Tablets |
| 769px — 1024px | Small screens, laptops |
| 1025px — 1200px | Desktops, large screens |
| 1201px and greater | Extra large screens, TV |

### Bootstrap breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 576px | xs |
| >=576px | small |
| >=768px | medium |
| >=992px | large |
| >=1200px | xl |
| >=1400px | 2xl |

### Tailwind breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 640px | xs |
| >=640px | small |
| >=768px | medium |
| >=1024px | large |
| >=1280px | xl |
| >=1536px | 2xl |















# 🎉 Prettier Plugin for Tailwind CSS

This plugin automatically sorts Tailwind CSS class names in a consistent and logical order when you format your code with Prettier. It helps improve code readability and maintainability by organizing classes according to Tailwind's recommended order.

---

## ✨ Features

### 🔢 Class Name Sorting
The plugin rearranges Tailwind CSS class names based on a predefined order (e.g., layout classes first, followed by flexbox/grid, spacing, etc.).

#### Example:
Before formatting:
```html
<div class="bg-red-500 flex p-4 text-white justify-center">
```

After formatting:
```html
<div class="flex justify-center p-4 bg-red-500 text-white">
```

---

### 🤝 Prettier Integration
- Integrates seamlessly with Prettier.
- Formats Tailwind CSS class names alongside your code when Prettier runs (manually or automatically on save).

---

### 📏 Improves Consistency
- Ensures consistent ordering of Tailwind CSS classes across your codebase.
- Reduces the chance of mismatched or duplicated styles.

---

### 👓 Readable Styles
- Organizes class names for better readability.
- Makes it easier to understand applied styles at a glance.

---

## ❓ Why Use This Plugin?
With Tailwind CSS's utility-first approach, class lists can become long and messy. This plugin:
- Simplifies maintenance of your codebase.
- Adheres to best practices.
- Facilitates easier collaboration within teams.

---

## 📦 Installation

```bash
npm install -D prettier-plugin-tailwind
```

---

## 🚀 Usage

No additional configuration is required. Simply run Prettier in your project, and it will automatically sort Tailwind CSS class names.

```bash
npx prettier --write .
```

---

🎉 Happy coding!
