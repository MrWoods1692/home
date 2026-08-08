import re

with open('/home/mrcwoods/code/home/src/contexts/AppContext.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the zh-TW block - it starts with " 'zh-TW': {" (note the leading space)
zh_tw_start = content.find(" 'zh-TW': {")
print(f"zh-TW start: {zh_tw_start}")

if zh_tw_start != -1:
    # Find the matching closing brace
    brace_count = 0
    i = content.find('{', zh_tw_start)
    while i < len(content):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                break
        i += 1
    print(f"zh-TW end: {i}")
    
    # Find the comma after the closing brace
    comma_pos = content.find(',', i)
    print(f"comma pos: {comma_pos}")
    
    # Remove from zh_tw_start to comma_pos+1
    new_content = content[:zh_tw_start] + content[comma_pos+1:]
    
    with open('/home/mrcwoods/code/home/src/contexts/AppContext.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Done - zh-TW removed")
else:
    print("zh-TW not found in file")
