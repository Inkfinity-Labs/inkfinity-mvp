# 🎨 Inkfinity Design & Code Style Guide

## Design Philosophy

Inkfinity's design language combines the rich artistic tradition of tattoo art with modern digital experiences. Our design system prioritizes:

- **Artistic Expression**: Showcasing tattoo designs with proper contrast and detail
- **Professional Credibility**: Creating a platform that respects tattoo artists and their work
- **Accessibility**: Making the platform usable for everyone, regardless of ability
- **Web3 Integration**: Integrating blockchain elements without overwhelming users

## 🖌️ Design Guidelines

Our design system emphasizes clarity, efficiency, and seamless collaboration between designers and developers, with special considerations for tattoo artwork representation.

### Design System Implementation

When creating design assets, follow a structured approach that enables clear communication and efficient development:

1. **Component Architecture:** Build a component-based design structure using Figma's auto-layout functionality. This ensures consistency and supports responsive design principles while aligning with our Next.js and Shadcn UI implementation.

2. **Documentation Standards:** Include comprehensive documentation for each significant design element:
   * Functional specifications
   * Component behavior parameters
   * Interactive states
   * Implementation considerations
   * Special tattoo art display requirements

3. **Design Token Management:** Create a systematic approach to design tokens:
   * Define clear color systems and typography scales
   * Implement consistent spacing hierarchies
   * Document component-specific properties
   * Ensure NFT display standards are consistent

### Tattoo Art Display Standards

For displaying tattoo artwork as NFTs, follow these guidelines:

* **Image Quality**: Tattoo designs must be displayed in high resolution to show intricate details
* **Color Accuracy**: Color profiles must accurately represent tattoo ink colors
* **Multiple Views**: Include templates for displaying tattoo designs from multiple angles
* **Artist Attribution**: Always include clear attribution for the tattoo artist
* **Metadata Display**: Design consistent ways to show NFT metadata without overwhelming the visual experience

### Theme Implementation

For multi-theme applications, use this structure:

* **Variable System:** Use Figma's variable functionality to create robust, scalable theming solutions
* **Theme Documentation:** Keep thorough documentation of theme variations and implementation parameters
* **Component States:** Document how components behave across different themes and states
* **Dark Mode Priority**: Given tattoo artists often work in dark studio environments, our dark mode should be exceptionally well-designed

A well-implemented design system ensures consistency while maintaining professional standards throughout the design and development process. Keep communication open when sharing new designs until all details are clear.

### Figma Conventions

* Use auto-layout for all components to ensure responsive design
* Name all frames, components, and elements using kebab-case convention
* Follow component hierarchy and organization as outlined in our design system
* Document all design decisions within the related issue
* Maintain consistency with established design system guidelines
* Ensure proper implementation of constraints and responsive design principles
* Always export vectors in SVG format to ensure high-quality assets
* Always export images in `webp` format for optimal web performance. Use online converters from [PNG to WEBP](https://cloudconvert.com/png-to-webp) when necessary
* Avoid low-resolution images or rasterized vectors, especially for tattoo artwork

### Tattoo-Specific Component Guidelines

* **Design Showcase**: Implement shadow effects and lighting that enhance tattoo design details without distortion
* **Artist Profiles**: Create templates that highlight an artist's style and portfolio effectively
* **Booking Interface**: Design calendar and booking components that clearly communicate availability and deposit requirements
* **NFT Certificate**: Design certificates that convey authenticity and ownership in an aesthetically pleasing way

## 📝 Typography

Typography uses a hierarchical pattern to help users navigate content effectively. For Inkfinity, typography should balance modern digital conventions with tattoo industry aesthetics.

Text styles are defined as follows:

* **Display**: `display__n__` (where n = intensity level): Defines webpage headers. Uses 2 scales for Landing Banners, either at page start or site landing, based on design needs.
* **Headings**: `h__n__` (where n = importance level): Defines text sizes for content titles, sections, and page banners.
* **Body**: `body-size` (where size = text size): Defines text sizes for content elements like subtitles, headers, labels, footers, and lists. Uses t-shirt sizing (from xxs to xxl).

### Typography Best Practices

* Use appropriate contrast between text and backgrounds
* Consider accessibility needs with minimum font sizes of 16px for body text
* Limit font families to our defined set (currently Montserrat for headings, Inter for body)
* Ensure legibility of text over tattoo artwork through appropriate overlays or spacing

## 🔳 Spacing

Design pattern spacing uses an exponential t-shirt sizing scale. We use [TailwindCSS spacing](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale) as our reference for pixel scaling in REM.

Consider your design concept when choosing spacing. Decide whether sections need clear separation for focus or should be more condensed, as in portfolios or mobile-adaptive designs.

Begin with a middle point pixel size (regular) of 32px. Create a scale using negative and positive exponents (e.g., ...14 x 1.5 = 21 x 1.5 = 32\[midpoint] x 1.5 = 48 x 1.5 = 72...).

Scale names MUST use kebab-case with t-shirt sizing and include a zero value: none, x-small, small, regular, large, x-large.

### Spacing for Tattoo Art

When showcasing tattoo designs:
* Allow for appropriate whitespace around artwork
* Consider the focal point of designs when laying out elements
* Use consistent padding for design cards and artist profiles
* Implement responsive spacing that maintains design integrity on mobile devices

## 🎨 Colors

Color schemes follow [TailwindCSS color palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette) conventions. Use contrast scales (black/white, based on primary color contrast) to accent or soften colors.

### Inkfinity Color System

Our color system is designed to complement tattoo artwork without competing with it:

* **Primary**: Deep teal (`#0F766E`) – Professional and creative without overwhelming artwork
* **Secondary**: Coral (`#F97316`) – Used sparingly for calls-to-action and highlights
* **Neutral**: Rich grayscale palette with warm undertones
* **Success/Error**: Standard green/red system with adjustments for accessibility

Color scales follow this pattern:

* `main-n` (main = primary color, n = tint/shade): Primary colors with different tints/shades. Midpoint has no number, with tints ranging from 50-400 and shades from 600-900.

> TIP: Keep primary color tints minimal but maintain a complete (contrast) gray scale, including 500 for midpoint.

### Color Accessibility

* Maintain WCAG AA compliance for all text elements (minimum 4.5:1 contrast ratio)
* Ensure color is not the only means of conveying information
* Test designs in grayscale to verify hierarchy remains clear
* Consider color blindness when designing UI elements, especially for booking status indicators

## 💻 Code Style Guidelines

### React/Next.js Components

* Use functional components with hooks
* Implement proper TypeScript typing for all props and state
* Follow the container/presentation pattern where appropriate
* Lazy load components that aren't needed for initial render

### TailwindCSS Implementation

* Use consistent class ordering (layout, typography, colors, etc.)
* Create reusable component classes with @apply for repeated patterns
* Use Tailwind's theme extension for custom colors rather than arbitrary values
* Implement responsive design using Tailwind's breakpoint system

### StarkNet/Cairo Contract Code

* Follow clear naming conventions for all functions and variables
* Document complex logic with detailed comments
* Implement comprehensive error handling with descriptive messages
* Optimize for gas efficiency where possible
* Structure contract code using logical component separation

## 📱 Responsive Design Guidelines

Inkfinity must provide an excellent experience across all devices:

* **Mobile-First**: Design for mobile screens initially, then enhance for larger screens
* **Breakpoints**: Follow Tailwind's standard breakpoints with special consideration for tablet portrait mode
* **Touch Targets**: Ensure all interactive elements are at least 44×44 pixels
* **Image Optimization**: Implement responsive images with appropriate sizing and resolution
* **Testing**: Test designs on actual devices, not just browser emulators

## 🚀 Implementation Standards

When implementing designs in code:

* Match designs pixel-perfectly while maintaining responsive behavior
* Use appropriate Next.js patterns (Server Components vs. Client Components)
* Implement proper loading states and error handling
* Ensure all animations and transitions are smooth (60fps target)
* Verify implementations on multiple browsers and devices

---

This guide will evolve as our design system matures. Always refer to the latest version when creating new designs or implementing features.