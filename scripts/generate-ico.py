import os
import shutil
from PIL import Image

def generate_ico():
    temp_dir = ".temp_favicons"
    sizes = [16, 32, 48, 64, 128, 256]
    images = []

    for s in sizes:
        png_path = os.path.join(temp_dir, f"icon_{s}.png")
        if os.path.exists(png_path):
            img = Image.open(png_path)
            images.append(img)

    if not images:
        print("No images found to generate ICO")
        return

    # Pillow can save an ICO containing multiple sizes
    # Primary image is 256 or 32, other sizes passed in append_images
    largest = images[-1]
    
    app_ico_path = os.path.join("src", "app", "favicon.ico")
    public_ico_path = os.path.join("public", "favicon.ico")

    largest.save(
        app_ico_path,
        format="ICO",
        sizes=[(s, s) for s in sizes],
        append_images=images[:-1]
    )

    shutil.copyfile(app_ico_path, public_ico_path)
    print(f"Generated multi-size favicon.ico in {app_ico_path} and {public_ico_path}")

    # Clean up temp dir
    shutil.rmtree(temp_dir, ignore_errors=True)
    if os.path.exists("generate_icons_test.py"):
        os.remove("generate_icons_test.py")

if __name__ == "__main__":
    generate_ico()
