import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Brand Foundation: Aqua Royal Blue #0082FC -->
  <rect width="512" height="512" fill="#0082FC" rx="0" />
  
  <!-- Outer Engineering Border: Aqua Cyan #5FD4FD -->
  <rect x="12" y="12" width="488" height="488" fill="none" stroke="#5FD4FD" stroke-width="24" rx="0" />
  
  <!-- Top-Right Brand Identity Accent: Aqua Cyan #5FD4FD -->
  <rect x="382" y="0" width="130" height="130" fill="#5FD4FD" rx="0" />
  
  <!-- Droplets Icon (Centered and Scaled from 24x24) -->
  <g transform="translate(68, 68) scale(15.66)" stroke-linecap="round" stroke-linejoin="round">
    <!-- Back Droplet with crisp white stroke -->
    <path 
      d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" 
      fill="#5FD4FD"
      fill-opacity="0.18"
      stroke="#FFFFFF" 
      stroke-width="2.2" 
    />
    <!-- Front Droplet with white stroke & cyan glow fill -->
    <path 
      d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" 
      fill="#5FD4FD" 
      fill-opacity="0.4" 
      stroke="#FFFFFF" 
      stroke-width="2.2" 
    />
  </g>
</svg>`;

async function main() {
  const rootDir = process.cwd();
  const publicDir = path.join(rootDir, "public");
  const appDir = path.join(rootDir, "src", "app");

  // Write SVG files
  fs.writeFileSync(path.join(appDir, "icon.svg"), svgContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgContent, "utf-8");

  const sizes = [16, 32, 48, 64, 128, 180, 192, 256, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    const buf = await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers[size] = buf;
  }

  // Save Apple Touch Icon
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), pngBuffers[180]);
  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), pngBuffers[180]);

  // Save standard Web Manifest Icons
  fs.writeFileSync(path.join(publicDir, "android-chrome-192x192.png"), pngBuffers[192]);
  fs.writeFileSync(path.join(publicDir, "android-chrome-512x512.png"), pngBuffers[512]);

  // Save 32x32 and 16x16 PNGs
  fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), pngBuffers[32]);
  fs.writeFileSync(path.join(publicDir, "favicon-16x16.png"), pngBuffers[16]);

  // Write temporary PNG files for Python Pillow to bundle into standard .ico
  const tempDir = path.join(rootDir, ".temp_favicons");
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

  for (const s of [16, 32, 48, 64, 128, 256]) {
    fs.writeFileSync(path.join(tempDir, `icon_${s}.png`), pngBuffers[s]);
  }

  console.log("PNG and SVG icons generated successfully!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

