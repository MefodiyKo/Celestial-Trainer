import json, struct, urllib.request, os

URL = "https://brettonw.github.io/YaleBrightStarCatalog/bsc5-short.json"
OUT = "data/background_stars.bin"

os.makedirs("data", exist_ok=True)

def color_index(bv):
    if bv is None: return 2
    if bv < -0.05: return 0
    if bv < 0.25: return 1
    if bv < 0.55: return 2
    if bv < 0.95: return 3
    if bv < 1.40: return 4
    return 5

with urllib.request.urlopen(URL) as r:
    stars = json.load(r)

out = []

for s in stars:
    try:
        mag = float(s.get("V"))
        ra = float(s.get("RA"))
        dec = float(s.get("Dec"))
    except:
        continue

    if mag > 6.0:
        continue

    try:
        bv = float(s.get("K"))
    except:
        bv = None

    sha = (360 - ra * 15) % 360

    out.append((
        int(round(sha * 100)),
        int(round(dec * 100)),
        int(round(mag * 100)),
        color_index(bv)
    ))

with open(OUT, "wb") as f:
    f.write(struct.pack("<H", len(out)))

    for sha, dec, mag, color in out:
        f.write(struct.pack("<HhHb", sha, dec, mag, color))

print("Saved", len(out), "stars to", OUT)