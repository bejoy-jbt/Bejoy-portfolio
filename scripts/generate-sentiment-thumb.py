"""Generate project thumbnail for AI Sentiment Analysis."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 800, 480
img = Image.new("RGB", (W, H), (26, 26, 46))
d = ImageDraw.Draw(img)

for y in range(H):
    t = y / H
    r = int(45 + (92 - 45) * (1 - t))
    g = int(55 + (148 - 55) * (1 - t))
    b = int(100 + (252 - 100) * (1 - t))
    d.line([(0, y), (W, y)], fill=(r, g, b))

d.rectangle([0, H - 48, W, H], fill=(222, 216, 149))
d.rectangle([0, H - 52, W, H - 48], fill=(26, 26, 46))

cx, cy = W // 2, H // 2 - 20
cw, ch = 520, 280
x0, y0 = cx - cw // 2, cy - ch // 2
d.rectangle([x0, y0, x0 + cw, y0 + ch], fill=(247, 247, 247), outline=(26, 26, 46), width=6)
d.rectangle([x0 + 6, y0 + 6, x0 + cw - 6, y0 + ch - 6], outline=(26, 26, 46), width=2)
d.rectangle([x0, y0, x0 + cw, y0 + 44], fill=(61, 158, 72))
d.rectangle([x0, y0 + 44, x0 + cw, y0 + 48], fill=(26, 26, 46))

try:
    title_font = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 22)
    small_font = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 18)
    tiny_font = ImageFont.truetype("C:/Windows/Fonts/consola.ttf", 15)
except OSError:
    title_font = small_font = tiny_font = ImageFont.load_default()

d.text((x0 + 16, y0 + 10), "SST-2 SENTIMENT ANALYZER", fill=(255, 255, 255), font=title_font)

lines = [
    ('"This movie was absolutely brilliant!"', (45, 45, 80)),
    ("", None),
    ("Prediction: POSITIVE", (61, 158, 72)),
    ("Confidence: 94.2%", (92, 148, 252)),
]
y = y0 + 68
for line, color in lines:
    if line:
        d.text((x0 + 24, y), line, fill=color or (45, 45, 80), font=small_font)
    y += 36 if line else 12

labels = [("NEG", (232, 93, 93), 50), ("NEU", (247, 213, 29), 30), ("POS", (61, 158, 72), 140)]
bx = x0 + 24
by = y0 + ch - 72
for lab, col, bw in labels:
    d.rectangle([bx, by, bx + 150, by + 28], outline=(26, 26, 46), width=2, fill=(229, 229, 229))
    d.rectangle([bx + 2, by + 2, bx + bw, by + 26], fill=col)
    d.text((bx, by - 22), lab, fill=(26, 26, 46), font=tiny_font)
    bx += 170

d.rectangle([x0 + cw - 200, y0 + ch - 44, x0 + cw - 16, y0 + ch - 16], fill=(92, 148, 252), outline=(26, 26, 46), width=2)
d.text((x0 + cw - 188, y0 + ch - 38), "Transformers", fill=(255, 255, 255), font=tiny_font)

out_dir = os.path.join(os.path.dirname(__file__), "..", "public", "projects")
os.makedirs(out_dir, exist_ok=True)
out = os.path.join(out_dir, "ai-sentiment-analysis.png")
img.save(out, optimize=True)
print("OK ->", out)
