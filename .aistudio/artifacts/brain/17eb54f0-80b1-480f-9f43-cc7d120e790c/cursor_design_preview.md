# Tech Crosshair Cursor Implementation

The custom cursor matching your uploaded reference image has been built and integrated into the portfolio.

---

## Design Specifications

- **Reference Image**: Direct match with your uploaded crosshair reticle.
- **Visual Elements**:
  - **Center Node**: Glowing coral/magenta dot (`#FF4B72`) with a crisp dark stroke and subtle specular highlight.
  - **Cardinal Reticle Bars**: 4 rounded capsule bars in slate steel-blue (`#5D6C8E`) with black outlines.
  - **Proportions**: Symmetrical 48x48 view box, rendered at a clean 38px size for optimal precision and responsiveness.

---

## Dynamic States & Interactions

1. **Default Pointer**: Follows mouse position using hardware-accelerated Framer Motion spring physics (`damping: 28, stiffness: 450, mass: 0.1`) with zero input lag.
2. **Interactive Hover (Links, Buttons, Cards)**:
   - Expands smoothly with a 1.18x spring scale.
   - Rotates by 45 degrees into an active tactical diamond posture.
   - Center dot transforms to an electric neon cyan `#00f2fe`.
3. **Click Action (`mouseDown`)**:
   - Snappy 0.82x mechanical click recoil.
4. **Touch Device Compatibility**:
   - Automatically disabled on touch screens and coarse pointer devices via CSS media query `(hover: none) or (pointer: coarse)` to preserve native touch accessibility.
