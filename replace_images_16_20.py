import os

filepath = 'script.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('  rank: 16,\n  name: "Teak",', '  rank: 16,\n  name: "Teak",\n  img: \'images/teak.jpg\','),
    ('  rank: 17,\n  name: "Pungam tree",', '  rank: 17,\n  name: "Pungam tree",\n  img: \'images/pungam.jpg\','),
    ('  rank: 18,\n  name: "Spanish Cherry",', '  rank: 18,\n  name: "Spanish Cherry",\n  img: \'images/spanish-cherry.jpg\','),
    ('  rank: 19,\n  name: "Paradise tree",', '  rank: 19,\n  name: "Paradise tree",\n  img: \'images/paradise.jpg\','),
    ('  rank: 20,\n  name: "Wild almond tree",', '  rank: 20,\n  name: "Wild almond tree",\n  img: \'images/wild-almond.jpg\',')
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        print(f"Replaced rank for {old.split('name:')[1].strip()}")
    else:
        print(f"Could not find block for {old.split('name:')[1].strip()}")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
