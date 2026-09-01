import os

filepath = 'script.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('  rank: 26,\n  name: "Purple bauhinia",', '  rank: 26,\n  name: "Purple bauhinia",\n  img: \'images/purple-bauhinia.jpg\','),
    ('  rank: 27,\n  name: "Butter tree",', '  rank: 27,\n  name: "Butter tree",\n  img: \'images/butter-tree.jpg\','),
    ('  rank: 28,\n  name: "Indian mulberry",', '  rank: 28,\n  name: "Indian mulberry",\n  img: \'images/indian-mulberry.jpg\','),
    ('  rank: 29,\n  name: "Geranium tree",', '  rank: 29,\n  name: "Geranium tree",\n  img: \'images/geranium-tree.jpg\','),
    ('  rank: 30,\n  name: "Yellow bells",', '  rank: 30,\n  name: "Yellow bells",\n  img: \'images/yellow-bells.jpg\',')
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
