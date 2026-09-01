import os

filepath = 'script.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('  img: \'images/teak.jpg\',\n  img: \'images/teak.jpg\',', '  img: \'images/teak.jpg\','),
    ('  img: \'images/pungam.jpg\',\n  img: \'images/pungam.jpg\',', '  img: \'images/pungam.jpg\','),
    ('  img: \'images/spanish-cherry.jpg\',\n  img: \'images/spanish-cherry.jpg\',', '  img: \'images/spanish-cherry.jpg\','),
    ('  img: \'images/paradise.jpg\',\n  img: \'images/paradise.jpg\',', '  img: \'images/paradise.jpg\','),
    ('  img: \'images/wild-almond.jpg\',\n  img: \'images/wild-almond.jpg\',', '  img: \'images/wild-almond.jpg\',')
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        print(f"Fixed duplicate for {new.strip()}")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
