# Technologies System

This document explains how to manage technologies in your website.

## File Structure

- `src/data/technologies.ts` - Main data file containing all technologies
- `src/assets/` - Icon files (renamed to follow consistent naming)
- `src/components/TechnologiesPage.tsx` - Technologies page component
- `src/components/Technologies.tsx` - Home page technologies component

## How to Add/Edit Technologies

### 1. Edit the Data File

Open `src/data/technologies.ts` and modify the `technologies` array:

```typescript
export const technologies: Technology[] = [
  // Add new technology
  { name: "New Technology", icon: "new-technology.svg", category: "Frontend Technologies" },
  
  // Edit existing technology
  { name: "Updated Name", icon: "updated-icon.svg", category: "Backend Technologies" },
];
```

### 2. Add Icon Files

1. Add your icon file to `src/assets/`
2. Use consistent naming: lowercase, hyphens for spaces
   - ✅ `react.svg`
   - ✅ `nodejs.svg`
   - ✅ `visual-studio-code.svg`
   - ❌ `React.svg` (uppercase)
   - ❌ `Node.js.svg` (spaces)

### 3. Update Icon Mapping

In `src/components/TechnologiesPage.tsx`, add your icon import and mapping:

```typescript
// Add import
import NewTechnologyIcon from "../assets/new-technology.svg";

// Add to iconMap
const iconMap: Record<string, string> = {
  // ... existing mappings
  "new-technology.svg": NewTechnologyIcon,
};
```

## Categories

Available categories:
- Programming Languages
- Frontend Technologies
- Backend Technologies
- Databases
- DevOps & Tools
- Frameworks & Libraries
- IDEs & Tools

## Benefits

✅ **Easy to maintain** - Just edit the data file  
✅ **Consistent naming** - All icons follow the same pattern  
✅ **Type safety** - TypeScript interfaces ensure data integrity  
✅ **Reusable** - Same data used across multiple components  
✅ **Scalable** - Easy to add new categories and technologies  

## Example: Adding a New Technology

1. **Add icon file**: `src/assets/docker.svg`
2. **Update data**: Add to `technologies` array in `src/data/technologies.ts`
3. **Add import**: Import in `src/components/TechnologiesPage.tsx`
4. **Add mapping**: Add to `iconMap`

That's it! The technology will automatically appear on the technologies page. 