# Hero Visual Design Proposal

This proposal details options for replacing the current geometric core with a high-fidelity 3D stylized character portrait matching the aesthetic in **image.png**, layered seamlessly behind the massive typography and wrapped in the Framer Motion **Magnet** interaction.

---

## Visual Comparison & Options

### Option 1: Tailored 3D Computer Science Developer Avatar (Recommended)
A 3D Pixar-style character render tailored specifically for Sohith Nagendra as a Computer Science student and AI developer, featuring volumetric dark hair, subtle tech hoodie with circuit logo, and dual cyan/violet rim lighting that perfectly matches the dark theme (`#0C0C0C`).

![Tailored 3D Developer Avatar](/src/assets/images/sohith_3d_avatar_1792077283487.jpg)

- **Pros**: Direct alignment with Sohith's identity, modern developer vibe, exact color synergy with the existing theme.
- **Background**: Seamless dark background blending smoothly into `#0C0C0C`.

---

### Option 2: Exact Reference 3D Character Head (From image.png)
The 3D character bust shown in your uploaded image with hoop earrings, stylized parted curls, expressive eyes, and studio rim lighting.

![Reference Image](image.png)

- **Pros**: 1:1 match with your reference image.
- **Implementation**: Centered with transparent background layering underneath the massive "HI, I'M SOHITH" header.

---

### Option 3: Hybrid 3D Character with Ambient Holographic HUD
Either Option 1 or Option 2 wrapped in a subtle cybernetic orbital ring with floating developer metadata chips:
- `KL UNIVERSITY · 2029`
- `AI + FULL-STACK`
- Subtle pulsating gradient aura reacting to the mouse cursor.

---

## Layout & Interaction Architecture

1. **Z-Index Layering**:
   - **Background Layer (z-0)**: Ambient radial glow (`#7621B0` & `#B600A8`).
   - **Typography Layer (z-10)**: Massive Kanit font `"HI, I'M SOHITH"` spanning across the viewport.
   - **Character Magnet Layer (z-20)**: Positioned absolutely at `left-1/2 -translate-x-1/2`, overlapping the lower portion of the heading just like in the reference image.
   - **Controls Layer (z-30)**: Bottom bar with description and "Let's Connect" button.

2. **Magnet Physics**:
   - Uses Framer Motion's `useSpring` with `damping: 18, stiffness: 180, mass: 0.15`.
   - Cursor tracking within 150px proximity with elastic return to origin.
   - Fluid 3D tilt or parallax offset on mouse move for tactile depth.

---

### How would you like to proceed?
- **Option 1**: Implement the tailored 3D Developer Avatar.
- **Option 2**: Implement the exact reference 3D character from image.png.
- **Option 3**: Implement with the subtle ambient cybernetic accents.
