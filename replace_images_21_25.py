import os

filepath = 'script.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('  rank: 21,\n  name: "Wood apple",', '  rank: 21,\n  name: "Wood apple",\n  img: \'images/wood-apple.jpg\','),
    ('  rank: 22,\n  name: "Mulberry tree",', '  rank: 22,\n  name: "Mulberry tree",\n  img: \'images/mulberry.jpg\','),
    ('  rank: 23,\n  name: "Guava tree",', '  rank: 23,\n  name: "Guava tree",\n  img: \'images/guava.jpg\','),
    ('  rank: 24,\n  name: "Casuarina",', '  rank: 24,\n  name: "Casuarina",\n  img: \'images/casuarina.jpg\','),
    ('  rank: 25,\n  name: "Bibhitaki tree",', '  rank: 25,\n  name: "Bibhitaki tree",\n  img: \'images/bibhitaki.jpg\',')
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
