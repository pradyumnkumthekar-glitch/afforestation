import os

script_path = r"c:\Users\lokes\Downloads\afforestation\script.js"

with open(script_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the literal \n with an actual newline
content = content.replace("\\nfunction TreeDatabase() {", "\nfunction TreeDatabase() {")

with open(script_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Syntax error fixed in script.js")
