import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

async function main() {
  const rootDir = process.cwd();
  const publicDir = path.join(rootDir, "public");
  const appDir = path.join(rootDir, "src", "app");
  const srcImage = path.join(publicDir, "images", "AI_Fevicon.png");

  if (!fs.existsSync(srcImage)) {
    console.error("AI_Fevicon.png not found at:", srcImage);
    process.exit(1);
  }

  // 1. Generate PNG Favicons
  await sharp(srcImage)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "favicon-32x32.png"));

  await sharp(srcImage)
    .resize(16, 16, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "favicon-16x16.png"));

  // 2. Generate Apple Icons (180x180)
  await sharp(srcImage)
    .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, "apple-icon.png"));

  fs.copyFileSync(
    path.join(publicDir, "apple-icon.png"),
    path.join(publicDir, "apple-touch-icon.png")
  );
  fs.copyFileSync(
    path.join(publicDir, "apple-icon.png"),
    path.join(appDir, "apple-icon.png")
  );

  // 3. Generate Android Chrome Icons
  await sharp(srcImage)
    .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "android-chrome-192x192.png"));

  await sharp(srcImage)
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "android-chrome-512x512.png"));

  // 4. Generate favicon.ico
  fs.copyFileSync(
    path.join(publicDir, "favicon-32x32.png"),
    path.join(publicDir, "favicon.ico")
  );
  fs.copyFileSync(
    path.join(publicDir, "favicon-32x32.png"),
    path.join(appDir, "favicon.ico")
  );

  // 5. Generate high-resolution clean SVG with AI_Fevicon embedded
  const b64 = fs.readFileSync(srcImage).toString("base64");
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="40" fill="#FFFFFF" />
  <image href="data:image/png;base64,${b64}" x="48" y="24" width="416" height="464" preserveAspectRatio="xMidYMid meet" />
</svg>`;

  fs.writeFileSync(path.join(appDir, "icon.svg"), svgContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "icon.svg"), svgContent, "utf-8");
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgContent, "utf-8");

  console.log("All modern web favicons generated from AI_Fevicon.png successfully.");
}

main().catch((err) => {
  console.error("Error generating favicons:", err);
  process.exit(1);
});
